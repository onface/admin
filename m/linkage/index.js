import $ from 'jquery'
import React from 'react'
import ReactDOM from "react-dom"
import Linkage from './linkage'
function linkage ($ele) {
    $ele.each(function () {
        var $this = $(this)
        var data = $this.data()
        if (data.data === 'prev') {
            let json = $this.prev('script').html()
            data.data = JSON.parse(json)
        }
        ReactDOM.render(<Linkage data={data} />, $ele.get(0))
    })
}
window.mo.linkage = linkage
mo.linkage($('.mo-linkage'))
