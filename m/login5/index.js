let $ = require('jquery')
$(function(){
	function createTimestamp (ele) {
		let $this = $(this)
		let src = $this.data().loginVerifySrc
		if (/\?/.test(src)) {
			src = src + '&'
		}
		else {
			src = src + '?'
		}
		src = src + 'timestamp=' + new Date().getTime()
		$this.attr('src', src)
	}
	let $code = $('.mo-login5-form-item-verifyimage')
	$code.each(function () {
		let $this = $(this)
		createTimestamp.bind(this)()
	}).on('click',createTimestamp)

})
