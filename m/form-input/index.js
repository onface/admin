var $ = require('jquery')
var noty = require('noty')
$(function(){
	$('body').on('blur', '[data-form-autosubmit="true"] input,[data-form-autosubmit="true"] textarea', function (event) {
		$(event.target).closest('form').trigger('submit')
	})
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
        })
		return false
	})
})
