import $ from "jquery"
$(function () {
    $('.mo-6-side-nav-item-title').on('click', function (e) {
        var $item = $(this).closest('.mo-6-side-nav-item')
        if ($item.get(0).tagName === 'A') {
            return
        }
        $item.toggleClass('mo-6-side-nav-item--on')
        $item.siblings('.mo-6-side-nav-item').removeClass('mo-6-side-nav-item--on')
    })
})
