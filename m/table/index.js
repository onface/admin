var $ = require('jquery')
$(function () {
    $('body').on('click', '.mo-tableContoler-left', function () {
        var $this = $(this)
        var $parent = $this.closest('.mo-tableContoler')
        var $scroll = $parent.find('.mo-tableScroll,mo-tablescroll')
        $scroll.animate({
            scrollLeft: $scroll.scrollLeft() - 300 || 0
        })
    })
    $('body').on('click', '.mo-tableContoler-right', function () {
        var $this = $(this)
        var $parent = $this.closest('.mo-tableContoler')
        var $scroll = $parent.find('.mo-tableScroll,mo-tablescroll')
        $scroll.animate({
            scrollLeft: $scroll.scrollLeft() + 300
        })
    })
})
