var $ = require('jquery')
var noty = require('noty')
var _ = require('lodash')
$(function(){
	let blurSettings = {
		selector: '[data-form-autosubmit="true"] input,[data-form-autosubmit="true"] textarea',
		eventName: 'blur.fastAdminFormInputBlur'
	}
	blurSettings.callback = function (event) {
		// 控制频率
		_.debounce(function () {
			// 触发 submit 前取消所有 blur，目的是防止 blur的触发方式是点击另外一个 input,这样会导致一直触发 blur，因为 comfrim 被弹出
			$('body').off(blurSettings.eventName, blurSettings.selector)
			$(event.target).closest('form').trigger('submit')
			// 触发 submit 后绑定 blur
			setTimeout(function () {
				$('body').on(blurSettings.eventName, blurSettings.selector, blurSettings.callback)
			}, 200)
		}, 200)()
	}
	$('body').on(blurSettings.eventName, blurSettings.selector, blurSettings.callback)
	$('body').on('submit', '[data-form-ajax="true"]', function (event) {
		event.preventDefault()
		var $this = $(this)
		var url = $this.attr('action')
		var method = $this.attr('method')
		var data = $this.serializeArray()
		var dataAutosubmit = $this.data('formAutosubmit')
		var dataConfirm = $this.data('formConfirm')
		var dataJSON = JSON.stringify(data)
		if (dataAutosubmit) {
			if (dataJSON === $this.data('_dataAutosubmitValue')) {
				return false
			}
		}
		if (dataConfirm) {
			if (!confirm(dataConfirm)) {
				return
			}
		}
		var $submit = $this.find('button[type="submit"]')
		$submit.addClass("mo-btn--loading")
		$submit.data('text', $submit.html())
		$submit.html($submit.html() + '中...')
		$.ajax({
            url: url,
            type: method,
            data: data,
            dataType: 'json'
        }).done(function (res) {
			var timeout = data.formTimeout || 0
			if (!res.msg) {
				if (res.status === 'success') {
					res.msg = "操作成功"
					$this.data('_dataAutosubmitValue', dataJSON)
				}
				else {
					let throwError = '开发人员注意: 操作错误后错误原因必须在 ajax 响应 JSON 中的 msg 中配置'
					alert(throwError)
					throw new Error(throwError)
				}
			}
			noty({
				type: res.status,
				text: res.msg,
				timeout: 3000
			})
			var hrefTimeout = 0
			res.data = res.data || {}
			if (res.data.href) {
				var refresh = false
				if (res.data.href === 'refresh') {
					res.data.href = location.href
					refresh = true
				}
				if (res.data.timeout) {
					hrefTimeout = parseInt(res.data.timeout, 10)
				}
				var timeoutSecond = hrefTimeout/1000
				noty({
					text: timeoutSecond + '秒后，' + refresh ?'刷新页面': '跳转至' + res.data.href,
					type:'success'
				})
				setTimeout(function () {
					location.href = res.data.href
				}, hrefTimeout)
			}
			if (res.status === 'success') {
				if ($this.data('formSuccessCallback')) {
					var fnKey = $this.data('formSuccessCallback').replace(/^@/,'')
					if (typeof window[fnKey] === 'function') {
						window[fnKey](res)
					}
					else {
						alert('not find window[data-form-success-callback]')
					}
				}

			}
        }).always(function () {
			$submit.html($submit.data('text'))
			$submit.removeClass("mo-btn--loading")
		})
		return false
	})
})
