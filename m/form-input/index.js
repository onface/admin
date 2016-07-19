var $ = require('jquery')
require('./input')
module.exports = function () {
	$(function(){
		$('[data-ui="form"]').on('submit',function(){
			var $this = $(this)
			var loginUrl = $this.attr('action')
			var loginType = $this.attr('method')
			var data = $this.serializeArray()
			$.ajax({
	            url: loginUrl,
	            type: loginType,
	            data: data,
	            dataType: 'json'
	        }).done(function (res) {
	        	if(res.status === 'success'){
					res.data = res.data || {}
					if (res.data.href) {
						location.href = res.data.href
					}
	        	}
	        	else if(res.status === 'error'){
	        		alert(res.msg)
	        	}
	        })
			return false
		})
	})
}
