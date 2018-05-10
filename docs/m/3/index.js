import $ from "jquery"
$(function () {
    $('.mo-3-side-item-hd').on('click', function () {
        var $this = $(this)
        var $item = $this.closest('.mo-3-side-item')
        $item.siblings('.mo-3-side-item').removeClass('on')
        $item.toggleClass('on')
    })
    $('.mo-3-side-toggle').on('click', function () {
        var $this = $(this)
        $this.closest('.mo-3').toggleClass('mo-3--min')
    })
})
