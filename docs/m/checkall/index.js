import $ from "jquery"
import filter from "../filter/index"
$(function () {
    $('[data-checkall]').on('change', function () {
        let $this = $(this)
        let data = $this.data()
        let $check = filter($this, data.checkall)
        $check.prop('checked', this.checked)
    }).each(function () {
        var $this = $(this)
        let data = $this.data()
        let $check = filter($this, data.checkall)
        $check.each(function () {
            var $thisCheck = $(this)
            if (this.__bind_fast_admin_checkall_bind_change) {
                return
            }
            this.__bind_fast_admin_checkall_bind_change = true
            $thisCheck.on('change', function () {
                // 目标项全选中
                if ($check.filter(':checked').length === $check.length) {
                    $this.prop('checked', true)
                }
                // 目标项没有全选中
                if ($check.filter(':checked').length < $check.length) {
                    $this.prop('checked', false)
                }
            })
        })
    })
})
