var $ = require('jquery')
module.exports = function () {
	$(function(){
		$('body').on('click','.mo-alert-close',function(){
			var $this = $(this)
			$this.closest('.mo-alert').fadeOut()
		})
	})
}
