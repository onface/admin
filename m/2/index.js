import $ from "jquery"
$(function () {
    $('.mo-2-side-item-hd').on('click', function () {
        var $this = $(this)
        var $item = $this.closest('.mo-2-side-item')
        console.log($item)
        $item.toggleClass('mo-2-side-item--on')
    })
    var docHeight = $(document).height()
    var windowHeight = $(window).height()
    var pageHeight
    if (windowHeight >= docHeight) {
        pageHeight = windowHeight
    }
    else {
        pageHeight = docHeight
    }
    $('.mo-2-side,.mo-2-cnt').height(pageHeight - $('.mo-2-head').height() - $('.mo-2-foot').height())
})
