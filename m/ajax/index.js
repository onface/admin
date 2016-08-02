var $ = require('jquery')
var noty = require('noty')
var dialog = require('fast-artdialog')
var filter = require('../filter/index')
$(function () {
	$('body').on('click', '[data-ajax-url]', function () {
		var $this = $(this)
		if ($this.data('_ajax-busy')) {
			return false
		}
		var data = {
			ajaxMethod: 'get',
			ajaxData: ''
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
		// checkbox
		let $checkbox
		let checkboxValues = []
		if (data.ajaxCheckbox) {
			$checkbox = $(data.ajaxCheckbox)
			$checkbox.each(function () {
				checkboxValues.push(this.value)
			})
			data.ajaxData = data.ajaxData + $checkbox.attr('name') + '=' + checkboxValues.join(',')
		}
		$.ajax({
			url: data.ajaxUrl,
			data: data.ajaxData,
			type: data.ajaxMethod,
			dataType: 'json'
		}).done(function (res) {
			res.data = res.data || {}
			if (!res.msg) {
				if (res.status === 'success') {
					res.msg = "操作成功"
				}
				else {
					let throwError = '开发人员注意: 操作错误后错误原因必须在 ajax 响应 JSON 中的 msg 中配置'
					alert(throwError)
					throw new Error(throwError)
				}
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
				let $deleteTarget = filter($this, data.ajaxRemove)
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
