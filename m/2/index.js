import $ from "jquery"
$(function () {
    $('.mo-2-side-item-hd').on('click', function () {
        var $this = $(this)
        var $item = $this.closest('.mo-2-side-item')
        console.log($item)
        $item.toggleClass('mo-2-side-item--on')
    })
})
