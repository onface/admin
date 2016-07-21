var $ = require('jquery')
$(function () {
    $('body').on('click', '.mo-box-hd-close', function () {
        var $this = $(this)
        var $parent = $this.closest('.mo-box')
        var $bd = $parent.find('.mo-box-bd')
        $bd.toggleClass('mo-hide')
    })
})
