var $ = require('jquery')
$(function () {

    $('body').on('click', '.mo-clone',function () {
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
        $target[data.copyMethod]($clone)
    })
})
