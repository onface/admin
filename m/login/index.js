var $ = require('jquery')
module.exports = function () {
	$(function(){
		$('.mo-login-form').on('submit',function(){
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
					location.href = res.data.href
	        	}
	        	else if(res.status === 'error'){
	        		alert(res.msg)
	        	}
	        })
			return false
		})
		$('.mo-login-item-code').on('click',function(){
			var $this = $(this)
			var src = $this.attr('src')
			src = src.replace(/\?.*$/,'?t=' + new Date().getTime())
			$this.attr('src', src)
		})
	})
}
