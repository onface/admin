import $ from "jquery"
import { Component } from "react"
import { render } from "react-dom"
import cls from "classnames"
require('rc-pagination/assets/index.css')
require('./index.less')
const Pagination = require('rc-pagination');
class AJAXTable extends Component {
    constructor (props) {
        super(props)
        this.state = {
            current: 1,
            loading: false,
            data: {
                total:1,
                thead:[],
                tbody:[]
            }
        }
    }
    componentWillMount() {
        this.ms({
            type: '@INIT'
        })
    }
    componentDidMount() {
        this.update()
    }
    update() {
        let self = this
        self.ms({
            type: 'LOADING'
        })
        $.ajax({
            type: 'get',
            url: this.props.ajaxtableUrl,
            data: {
                p: self.state.current
            },
            dataType: 'json'
        }).done(function (res) {
            self.ms({
                type: 'RENDER_DATA',
                data: res.data
            })
        }).always(function () {
            self.ms({
                type: 'LOADED'
            })
        })
    }
    ms(action) {
        let state = this.state
        let props = this.props
        switch (action.type) {
            case '@INIT':

            break
            case 'CHANGE_CURRENT':
                state.current = action.data.page
            break
            case 'RENDER_DATA':
                state.data = action.data
            break
            case 'LOADING':
                state.loading = true
            break
            case 'LOADED':
                state.loading = false
            break
        }
        this.setState(state)
    }

    onChangeCurrent (page) {
        this.ms({
            type: 'CHANGE_CURRENT',
            data: {
                page: page
            }
        })
        this.update()
    }
    render() {
        let props = this.props
        let state = this.state
        return (
            <div className="mo-ajaxtableDialog" >
                <div className={cls({
                    'mo-ajaxtableDialog--loading mo-loading mo-loading--big mo-loading--full': state.loading
                })} ></div>
                <div className="mo-tablescroll">
                   <table className="mo-table">
                       <thead>
                           <tr>
                                {
                                    state.data.thead.map(function (item, key) {
                                        return (
                                            <th key={key} >
                                                {item}
                                            </th>
                                        )
                                    })
                                }
                           </tr>
                       </thead>
                       <tbody>
                        {
                            state.data.tbody.map(function (item, key) {
                                return (
                                    <tr key={key} >
                                        {
                                            item.map(function (item, key) {
                                                return (
                                                    <td key={key} >{item}</td>
                                                )
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                       </tbody>
                   </table>
               </div>
               <div className="mo-ajaxtablePaging">
                    <Pagination current={this.state.current} onChange={this.onChangeCurrent.bind(this)} total={state.data.total} />
               </div>
            </div>
        )
    }
}
mo.ajaxtable = function (ele) {
    let $ele = $(ele)
    $ele.addClass("mo-loading--off")
    let data = $ele.data()
    $ele.addClass('mo-ajaxtable')
    $ele.data('_ajaxtableRender', true)
    render(<AJAXTable {...data} />, ele)
}
$(function () {
    $('[data-ajaxtable-url]').each(function (){
        mo.ajaxtable(this)
    })
    setTimeout(function callee () {
        $('[data-ajaxtable-url]').each(function (){
            var $this = $(this)
            if (!$this.data('_ajaxtableRender')) {
                mo.ajaxtable(this)
            }
        })
        setTimeout(callee, 500)
    }, 500)
    // mo.ajaxtable
})
