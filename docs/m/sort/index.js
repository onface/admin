import $ from "jquery"
import dragula from "dragula"
import "./index.less"
import noty from 'noty'
mo.sort = function (target) {
	let $target = $(target)
	let data = $target.data()
	$target.data('_sortStartIndex', 1)
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
			// 重新选择DOM便于获取 index
			let $ids = $target.find(`[name="${data.sortId}"]`)
			let $el = $(el)
			let $id = $el.find(`[name="${data.sortId}"]`)
			let id = $id.val()
			let index
			let prevIndex = $ids.index($id) - 1
			let $prevId = $ids.eq(prevIndex)
			if (prevIndex === -1) {
				index = 0
			}
			else {
				index = $prevId.data('_sortIndex')
			}
			let sendData = {
				index: $id.data('_sortIndex'),
				id: id,
				method: 'after',
				target_index: index,
				target_id: null
			}
			if (sendData.target_index !== 0) {
				sendData.target_id = $prevId.val()
			}
			$.ajax({
				url: data.sortUrl,
				type: 'post',
				dataType: 'json',
				data: sendData
			}).done(function (res){;res=FAST_ADMIN_FILLDATA(res);
				if (res.status === 'success') {
					noty({
						text: '排序成功',
						type: 'success'
					})
				}
				else {
					alert(res.msg)
					location.href = location.href
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
