import $ from 'jquery'
import filter from '../filter/index'
$(function () {
	$('body').on('click', '[data-remove-target]', function () {
		let $this = $(this)
		let data = $this.data()
		let $target = filter(this, data.removeTarget)
		$target.remove()
	})
})