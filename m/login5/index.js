let $ = require('jquery')

$(function(){
	function createTimestamp (ele) {
		let $this = $(this)
		let src = $this.data('loginVerifySrc')
		if (/\?/.test(src)) {
			src = src + '&'
		}
		else {
			src = src + '?'
		}
		src = src + 'timestamp=' + new Date().getTime()
		$this.attr('src', src)
	}
	let $code = $('.mo-login5-box-form-item-verifyimage')
	$code.each(function () {
		let $this = $(this)
		createTimestamp.bind(this)()
	}).on('click',createTimestamp)

	function changeSchoolTheme (ele) {
		let $this = $(this) // this -> .mo-login5
		let $originParent = $this.closest('.mo-login5')
		let $selected = $this.children('option:selected')

		let bg = $selected.data('bg') || '/m/login5/bg.jpg'
		$originParent.find('.mo-login5-mark').css("background-image","url('"+bg+"')")
		let logo = $selected.data('logo') || ''
		let text = /请选择/.test($selected.text()) ? '' : $selected.text()
		let motto = $selected.data('motto') || ''
		$originParent.find('.mo-login5-board').html(`
            <img src="`+$selected.data('logo')+`" class="mo-login5-board-pic"/>
            <div class="mo-login5-board-title">`+text+`</div>
            <div class="mo-login5-board-hd">`+motto+`</div>
		`)
	}
	let $login5Select = $('.mo-login5-box-form-item-select')
	$login5Select.each(function () {
		let $this = $(this)
		changeSchoolTheme.bind(this)
	}).on('change',changeSchoolTheme)
})
