import $ from "jquery"
$(function () {
    $('body').on('click', '.mo-tab-hd-trigger', function (){
        let $this = $(this)
        let $tab = $this.closest('.mo-tab')
        let $triggers = $tab.find('.mo-tab-hd-trigger')
        let $bd = $tab.find('.mo-tab-bd')
        let $boxs = $bd.find('.mo-tab-bd-box')
        let index = $triggers.index($this)
        $triggers.removeClass('mo-tab-hd-trigger--on')
        $boxs.removeClass('mo-tab-bd-box--on')
        $triggers.eq(index).addClass('mo-tab-hd-trigger--on')
        $boxs.eq(index).addClass('mo-tab-bd-box--on')
    })
})
