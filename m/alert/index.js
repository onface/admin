var $ = require('jquery')
$(function(){
	$('body').on('click','.mo-alert-close',function(){
		var $this = $(this)
		$this.closest('.mo-alert').fadeOut()
	})
})
