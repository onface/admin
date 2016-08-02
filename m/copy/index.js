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
        $clone.find('*').removeAttr('id')
        let $target= $(data.copyTarget)
        if (data.copyFilter) {
            // 如果filter 返回 false 则不生产 copy 的 dom
            if (window[data.copyFilter]($clone) === false) {
                return false
            }
        }
        let initMethod = []
        mo._allowCopy.forEach(function (name) {
            var $component = $clone.find('.mo-' + name )
            if ($component.length) {
                initMethod.push({
                    element: $component,
                    method: name
                })
            }
            if ($clone.hasClass('mo-' + name)) {
                initMethod.push({
                    element: $clone,
                    method: name
                })
            }
        })
        $target[data.copyMethod]($clone)
        // 必须添加到 dom 后再做init处理，否则有些组件获取不到高度
        initMethod.forEach(function (control) {
            control.element.html('')
            mo[control.method](control.element)
        })
    })
})
