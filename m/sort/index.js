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
	let $ids

	function countIndex () {
		$ids = $target.find(`[name="${data.sortId}"]`)
		$ids.each(function (index) {
			$(this).data('_sortIndex', $target.data('_sortStartIndex') + index)
		})
	}
	countIndex()
	let drake = dragula([target], {
		moves: function (el, container, handle) {
			return $(handle).hasClass('mo-sort-handle')
		}
	})
	if (data.sortUrl) {
		drake.on('dragend', function (el) {
			let $el = $(el)
			let $id = $el.find(`[name="${data.sortId}"]`)
			let id = $id.val()
			let index
			// 重新选择DOM便于获取 index
			$ids = $target.find(`[name="${data.sortId}"]`)
			let prevIndex = $ids.index($id) - 1
			if (prevIndex === -1) {
				index = 0
			}
			else {
				let $prevId = $ids.eq(prevIndex)
				index = $prevId.data('_sortIndex')
			}
			$.ajax({
				url: data.sortUrl,
				type: 'post',
				dataType: 'json',
				data: {
					id: id,
					method: 'after',
					index: index
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

			countIndex()
		})
	}
}

$(function () {
	$('[data-sort-id]').each(function () {
		mo.sort(this)
	})
})