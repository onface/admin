var $ = require('jquery')
function createId () {
    return 'id' + ((Math.random()*100000 / Math.random()*100000 )).toString().replace(/\./,'')
}
$(function () {
    $('[data-ui="input"][data-type="checkbox"]').each(function(){
        let $this = $(this)
        let html = []
        html.push('<input')
        html.push('class="mo-checkbox"')
        let data = $this.data()
        data.id = data.id || createId()
        $.each(data, function (key, value) {
            html.push(key + '="' + value + '"')
        })
        html.push('/>')
        html = html.join(' ')
        $this.html(html + '<label for="' + data.id + '"><span class="fa fa-check"></span></label>')
    })
    $('[data-ui="input"][data-type="radio"]').each(function(){
        let $this = $(this)
        let html = []
        html.push('<input')
        html.push('class="mo-radio"')
        let data = $this.data()
        data.id = data.id || createId()
        $.each(data, function (key, value) {
            html.push(key + '="' + value + '"')
        })
        html.push('/>')
        html = html.join(' ')
        $this.html(html + '<label for="' + data.id + '"></label>')
    })
    $('[data-ui="input"][data-type="switch1"]').each(function(){
        let $this = $(this)
        let html = []
        html.push('<input')
        html.push('class="mo-switch1"')
        let data = $this.data()
        data.id = data.id || createId()
        $.each(data, function (key, value) {
            html.push(key + '="' + value + '"')
        })
        html.push(' type="checkbox" />')
        html = html.join(' ')
        $this.html(html + '<label for="' + data.id + '"><span class="fa fa-check"></span></label>')
    })
})
