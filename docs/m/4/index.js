import $ from "jquery"
$(function () {
    $('.mo-4-side-nav-item').on('click', function () {
        var $this = $(this)
        $this.toggleClass('mo-4-side-nav-item--on')
        $this.siblings('.mo-4-side-nav-item').removeClass('mo-4-side-nav-item--on')
    })
})
