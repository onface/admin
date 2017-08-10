import $ from "jquery"
$(function () {
    $('.mo-5-side-item-title').on('click', function (e) {
        var $item = $(this).closest('.mo-5-side-item')
        if ($item.get(0).tagName === 'A') {
            return
        }
        $item.toggleClass('mo-5-side-item--on')
        $item.siblings('.mo-5-side-item').removeClass('mo-5-side-item--on')
    })
})
