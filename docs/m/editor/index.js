import $ from "jquery"
import './simditor.css'
var Base64 = require("js-base64").Base64

window.Simditor_Upload_AJAX_filter = function (res) {
	if (res.status === 'success') {
	    res.success = true
	    res.file_path = res.data.src
	}
	else {
	    res.success = false
	}
	return res
}

$(function () {
	$('[data-editor-name]').each(function () {
		let $this = $(this)
		let data = $this.data()
		$this.addClass('mo-editor').addClass('mo-loading--off')
		let html = $this.html()
		if (data.editorBase64) {
			html = Base64.decode(html)
		}
		let $textarea = $(`<textarea name="${data.editorName}">${html}</textarea>`)
		$this.after($textarea.hide())
		let editor = new Simditor({
		textarea: $textarea,
		toolbar: [
		  'title'
		  ,
		  'bold'
		  ,
		  'italic'
		  ,
		  'underline'
		  ,
		  'strikethrough'
		  ,
		  'fontScale'
		  ,
		  'color'
		  ,
		  'ol'
		  ,
		  'ul'
		  ,
		  'blockquote'
		  ,
		  'code'
		  ,
		  'table'
		  ,
		  'link'
		  ,
		  'image'
		  ,
		  'hr'
		  ,
		  'indent'
		  ,
		  'outdent'
		  ,
		  'alignment'
		  ,
		  'html'
		],
		pasteImageL: false,
		upload: {
		    // 可通过修改这里改变 图片ajax上传地址
		    url: data.editorUploadUrl
		}
		});
	})
})
