var $ = require('jquery')
var filter = require('../filter/index')
var dialog = require('fast-artdialog')
var Base64 = require("js-base64").Base64
require('fast-artdialog/index.css')

$(function () {
    $('body').on('click', '[data-dialog-content]', function () {
        let $this = $(this)
        let data = $this.data()
        let $target = filter(this, $this.data('dialogContent'))
        let $cloneELmeent
        if ($target.data('__fast-admin-dialog-clone-element')) {
            $cloneELmeent = $target.data('__fast-admin-dialog-clone-element')
        }
        else {
            let html = $target.eq(0).html()
    		if (data.dialogBase64) {
    			html = Base64.decode(html)
    		}
            $cloneELmeent = $(html)
            $target.data('__fast-admin-dialog-clone-element', $cloneELmeent)
        }
        dialog({
            quickClose: true,
            title: $this.data('dialogTitle') || 'dialog',
            content: $cloneELmeent
        }).showModal()
    })
})
