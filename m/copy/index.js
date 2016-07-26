var $ = require('jquery')
$(function () {

    $('body').on('click', '.mo-copy',function () {
        var $this = $(this)
        var data = {
            copyMethod: 'append'
        }
        $.extend(true, data, $this.data())
        var $clone = $(data.copyClone).clone()
        $clone.removeAttr('id')
        var $target= $(data.copyTarget)
        if (data.copyFilter) {
            window[data.copyFilter]($clone)
        }
        $clone
        mo._allowCopy.forEach(function (name) {
            let className = 'mo-' + name
            if ($clone.hasClass(className)) {
                $clone.html('')
                mo[name]($clone)
            }
        })
        $target[data.copyMethod]($clone)
    })
})
