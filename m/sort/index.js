import $ from "jquery"
import dragula from "dragula"
import "./index.less"
import noty from 'noty'
mo.sort = function (target) {
	let $target = $(target)
	let data = $target.data()
	let startIndex = $target.find(`[name="${data.sortStartIndex}"]`).eq(0).val()
	startIndex = parseInt(startIndex, 10)
	$target.data('_sortStartIndex', startIndex)
	let drake = dragula([target], {
		moves: function (el, container, handle) {
			return $(handle).hasClass('mo-sort-handle')
		}
	})
	if (data.sortUrl) {
		drake.on('dragend', function (el) {
			let $el = $(el)
			let id = $el.find(`[name="${data.sortId}"]`).val()
			let domIndex = $target.find(`[name="${data.sortId}"]`).index($el.find(`[name="${data.sortId}"]`))
			let newIndex = $target.data('_sortStartIndex') + domIndex
			$.ajax({
				url: data.sortUrl,
				type: 'post',
				dataType: 'json',
				data: {
					id: id,
					method: 'after',
					index: newIndex
				}
			}).done(function (res) {
				if (res.status === 'success') {
					noty({
						text: '排序成功',
						type: 'success'
					})
				}
				else {
					noty({
						text: res.msg,
						type: 'error'
					})
				}
			})
		})
	}
}

$(function () {
	$('[data-sort-id]').each(function () {
		mo.sort(this)
	})
})