var $ = require('jquery')

var undoselect = {}

undoselect.undo = function (elem) {
    let prevValue = elem._fastAdminAjaxSelectUndoData[elem._fastAdminAjaxSelectUndoData.length-1]
    if (prevValue) {
        $(elem).find(`option[value=${prevValue}]`).prop('selected', true)
    }
}

undoselect.record = function (elem) {
    elem._fastAdminAjaxSelectUndoData.push(elem.value)
}
import extend from "extend"
import querystring from 'querystring'
var noty = require('noty')
var filter = require('../filter/index')
setTimeout(function timer () {
    $('[data-ajaxselect-url]').each(function () {
        if (!this._fastAdminAjaxSelectUndoData) {
            this._fastAdminAjaxSelectUndoData = [this.value]
        }
    })
    setTimeout(timer, 100)
}, 100)
$('body').on('change', '[data-ajaxselect-url]', function (e) {
    let $this = $(this)
    let eSelf = this
    let data = $this.data()
    const value = $this.val()
    let sendData = {}
    let collectPrompt = function (promptSettings) {
        let ajaxselectPrompt = querystring.parse(promptSettings)
        for(let key in ajaxselectPrompt) {
            // error_msg|失败原因
            let param = key.split('|')
            // ['msg']
            if (!param[1]) {
                // ['msg'] => ['msg', 'msg']
                param[1] = param[0]
            }
            let name = param[0]
            let title = param[1]
            let defaultValue = ajaxselectPrompt[key]
            let promptResut = prompt(title, defaultValue)
            if (!promptResut) {
                undoselect.undo(eSelf)
                return false
            }
            else {
                sendData[name] = promptResut
            }
        }
        return true
    }
    if (data.ajaxselectConfirm) {
        if (confirm(data.ajaxselectConfirm.replace(/%text/g, $this.find('option:selected').text()))) {
            if (data.ajaxselectPrompt) {
                if (collectPrompt(data.ajaxselectPrompt) === false) {
                    return false
                }
            }
            let currentPrompt = 'ajaxselectPrompt' + value
            if (data[currentPrompt]) {
                if (collectPrompt(data[currentPrompt]) === false) {
                    return false
                }
            }
        }
        else {
            undoselect.undo(eSelf)
            return
        }
    }
    if (data.ajaxselectData) {
        sendData = extend(true, sendData, querystring.parse(data.ajaxselectData))
    }
    if ($this.attr('name')) {
            sendData[$this.attr('name')] = value
    }
    $.ajax({
        url: data.ajaxselectUrl,
        data: sendData,
        type: data.ajaxselectMethod,
        dataType: 'json'
    }).done(function (res) {
        let message = noty({
			text: ''
		})
        if (res.status === 'error') {
            undoselect.undo(eSelf)
        }
        else {
            undoselect.record(eSelf)
        }
        res.data = res.data || {}
        if (!res.msg) {
            if (res.status === 'success') {
                res.msg = "操作成功"
            }
            else {
                let throwError = '开发人员注意: 操作错误后错误原因必须在 ajax 响应 JSON 中的 msg 中配置'
                alert(throwError)
                throw new Error(throwError)
            }
        }
        message.setText(res.msg)

        var hrefTimeout = 0
        if (res.data.href) {
            if (res.data.timeout) {
                hrefTimeout = parseInt(res.data.timeout, 10)
            }
            var timeoutSecond = hrefTimeout/1000
            noty({
                text: timeoutSecond + '秒后，跳转至' + res.data.href,
                type:'success'
            })
            setTimeout(function () {
                location.href = res.data.href
            }, hrefTimeout)

        }
        // remove
        if (data.ajaxselectRemove && res.status === 'success') {
            let $deleteTarget = filter($this, data.ajaxselectRemove)
            let removeTimeout = 500
            $deleteTarget.fadeOut(removeTimeout)
            setTimeout(function () {
                $deleteTarget.remove()
            }, removeTimeout)
        }
    }).always(function () {

    })

})
