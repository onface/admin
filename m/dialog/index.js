var $ = require('jquery')
var filter = require('../filter/index')
var dialog = require('fast-artdialog')
require('fast-artdialog/index.css')

$(function () {
    $('body').on('click', '[data-dialog-content]', function () {
        let $this = $(this)
        let $target = filter(this, $this.data('dialogContent'))
        let $cloneELmeent
        if ($target.data('__fast-admin-dialog-clone-element')) {
            $cloneELmeent = $target.data('__fast-admin-dialog-clone-element')
        }
        else {
            $cloneELmeent = $($target.eq(0).html())
            $target.data('__fast-admin-dialog-clone-element', $cloneELmeent)
        }
        dialog({
            quickClose: true,
            title: $this.data('dialogTitle') || 'dialog',
            content: $cloneELmeent
        }).showModal()
    })
})
