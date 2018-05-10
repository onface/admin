import $ from "jquery"
$(function () {
    $('.mo-2-side-item-hd').on('click', function () {
        var $this = $(this)
        var $item = $this.closest('.mo-2-side-item')
        $item.toggleClass('mo-2-side-item--on')
    })
    $('.mo-2-sub-status').addClass('mo-2-sub-status--done').fadeOut(2000)
    function syncCnt () {
        var minCntHeight = $(window).height() - $('.mo-2-head').height() - 10
        var $cntHeight = $('.mo-2-cnt').height()
        if ($cntHeight < minCntHeight) {
            $('.mo-2-cnt').height(minCntHeight)
        }
        $('.mo-2-side').height($('.mo-2-cnt').height())
    }
    requestAnimationFrame(function callee() {
            syncCnt()
        requestAnimationFrame(callee)
    })
})
