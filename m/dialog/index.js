var $ = require('jquery')
var filter = require('../filter/index')
var dialog = require('fast-artdialog')
require('fast-artdialog/index.css')

$(function () {
    $('body').on('click', '[data-dialog-content]', function () {
        let $this = $(this)
        let $target = filter(this, $this.data('dialogContent'))
        dialog({
            title: $this.data('dialogTitle') || 'dialog',
            content: $target.eq(0).val()
        }).show()
    })
})
