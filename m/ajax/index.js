var $ = require('jquery')
var noty = require('noty')
var dialog = require('fast-artdialog')
$(function () {
	$('body').on('click', '.mo-ajax', function () {
		var $this = $(this)
		if ($this.data('_ajax-busy')) {
			return false
		}
		var data = $this.data()
		// defaultData
		var defaultData = {
			ajaxMethod: 'get'
		}
		$.extend(true, data, defaultData)
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
			if (res.status === 'success') {
				message.setText('操作成功')
				message.setType('success')
			}
			else {
				message.setText(res.msg)
				message.setType('error')
			}
			// remove
			if (data.ajaxRemove) {
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
