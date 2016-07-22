var $ = require('jquery')
var noty = require('noty')
$(function(){
	$('body').on('submit', '.mo-form form[data-form-ajax="true"]', function () {
		var $this = $(this)
		var url = $this.attr('action')
		var method = $this.attr('method')
		var data = $this.serializeArray()
		$.ajax({
            url: url,
            type: method,
            data: data,
            dataType: 'json'
        }).done(function (res) {
			var timeout = data.formTimeout || 0
			// 先出现 msg 如果有 href 则追加正在跳转页面
			// 然后跳转
        })
		return false
	})
})
