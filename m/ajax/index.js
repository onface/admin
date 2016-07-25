var $ = require('jquery')
var noty = require('noty')
var dialog = require('fast-artdialog')
$(function () {
	$('body').on('click', '.mo-ajax', function () {
		var $this = $(this)
		if ($this.data('_ajax-busy')) {
			return false
		}
		var data = {
			ajaxMethod: 'get'
		}
		$.extend(true, data, $this.data())
		// confirm
		if (data.ajaxConfirm) {
			if (!confirm(data.ajaxConfirm)) {
				return false
			}
		}
		// loading
		if ($this.hasClass('mo-btn')) {
			$this.addClass('mo-btn--loading')
		}
		var message = noty({
			text: 'loading'
		})
		$this.data('_ajax-busy', true)
		$.ajax({
			url: data.ajaxUrl,
			data: data.ajaxData,
			type: data.ajaxMethod,
			dataType: 'json'
		}).done(function (res) {
			res.data = res.data || {}
			if (res.status === 'success') {
				message.setType('success')
				res.msg = res.msg || '操作成功'
			}
			else {
				message.setType('error')
				res.msg = res.msg || '操作失败'
			}
			message.setText(res.msg)

			var hrefTimeout = 0
			if (res.data.href) {
				if (res.data.timeout) {
					hrefTimeout = parseInt(res.data.timeout, 10)
				}
				var timeoutSecond = hrefTimeout/1000
				noty({
					text: timeoutSecond + '秒后，跳转至' + res.data.href,
					type:'success'
				})
				setTimeout(function () {
					location.href = res.data.href
				}, hrefTimeout)

			}
			// remove
			if (data.ajaxRemove && res.status === 'success') {
				var selectors = data.ajaxRemove.split('&')
				var $deleteTarget = $this
				// 第一个选择器开头是 # 或者 . 则不适用 当前元素作为起始元素
				if (/^[#/.]/.test(selectors[0])) {
					$deleteTarget = $(selectors[0])
					// 移除第一个选择器
					selectors.shift()
				}
				if (selectors.length%2) {
					alert('data-ajax-remove 配置错误，请检查最后一个参数是否是目标而不是方法。  例子 方法：find 目标：li')
				}
				selectors.forEach(function (item, index) {
					if (index%2 === 0) {
						let method = item
						let target = selectors[index+1]
						$deleteTarget = $deleteTarget[method](target)
					}
				})
				let removeTimeout = 500
				$deleteTarget.fadeOut(removeTimeout)
				setTimeout(function () {
					$deleteTarget.remove()
				}, removeTimeout)
			}
		}).always(function () {
			$this.data('_ajax-busy', false)
			setTimeout(function () {
				message.close()
			}, 2000)
			$this.removeClass('mo-btn--loading')
		})
		return false
	})
})
