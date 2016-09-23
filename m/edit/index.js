var noty = require('noty')
var qs = require('querystring')
var blur = function () {
    var $this = $(this)
    var value = this.value
    var data = $this.data()
    if ($this.hasClass('mo-edit--busy')) {
        return
    }
    $this.addClass('mo-edit--busy')
    data.editData = qs.parse(data.editData)
    data.editData.value = value
    $.ajax({
        type: data.editMethod,
        url: data.editUrl,
        data: data.editData,
        dataType: 'json'
    }).done(function (res) {
        if (res.status === 'success') {
            $this.data('moEditServerValue')
            noty({
                text: '修改成功',
                type:'success'
            })
        }
        else {
            $this.val($this.data('moEditServerValue'))
            noty({
                text: res.msg,
                type:'error'
            })
        }
    }).always(function (){
        $this.removeClass('mo-edit--busy')
    })
}
var edit = function ($ele) {
    $ele.each(function () {
        var $this = $(this)
        $this.data('moEditServerValue', this.value)
        $this.on('blur', blur)
    })
}
$(function () {
    mo.edit($('[data-edit-url]'))
})
window.mo.edit = edit
