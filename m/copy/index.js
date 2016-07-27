var $ = require('jquery')
$(function () {

    $('body').on('click', '.mo-copy',function () {
        let $this = $(this)
        let data = {
            copyMethod: 'append'
        }
        $.extend(true, data, $this.data())
        let $clone = $(data.copyClone).clone()
        $clone.removeAttr('id')
        let $target= $(data.copyTarget)
        if (data.copyFilter) {
            window[data.copyFilter]($clone)
        }
        let dataMethod = []
        mo._allowCopy.forEach(function (name) {
            let className = 'mo-' + name
            if ($clone.hasClass(className)) {
                dataMethod.push(name)
                $clone.html('')

            }
        })
        $target[data.copyMethod]($clone)
        if (dataMethod.length) {
            // 需要在渲染后再执行，否则某些差距获取不到在dom中的宽高
            dataMethod.forEach(function (name) {
                mo[name]($clone)
            })
        }
    })
})
