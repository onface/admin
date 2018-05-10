import $ from 'jquery'
import {render} from "react-dom"
import {Component} from 'react'
import Cascader from 'rc-cascader'
import 'rc-cascader/assets/index.css'
import filter from '../filter/index'
class Linkage extends Component {
    static defaultProps = {
        linkageValue: ''
    }
    state = {
        inputText: '',
        inputValue: this.props.linkageValue.split(',')
    }
    onChange (value, selectedOptions) {
        this.setState({
            inputText: selectedOptions.map(o => o.label).join(', '),
            inputValue: selectedOptions.map(o => o.value),
        })
    }
    render () {
        let self = this
        let defaultOptions = []
        let linkageValue = self.props.linkageValue
        if (linkageValue) {
            linkageValue = linkageValue.toString()
            linkageValue = self.props.linkageValue.split(',')
        }
        else {
            linkageValue = []
        }
        if (linkageValue.length) {
            // 遍历选中 value，并根据选中项获取选中完整数据
            // 逻辑有点复杂
            ;(function callee (values, options) {
                let currentOptions
                let bHas = false
                options.forEach(function (item) {
                    if (item.value == values[0]) {
                        defaultOptions.push(item)
                        bHas = true
                    }
                })
                if (bHas) {
                    let lastChild =defaultOptions[defaultOptions.length-1].children
                    if (lastChild) {
                        values.shift()
                        callee(values, lastChild)
                    }
                }
            })($.extend(true, [], linkageValue), self.props.linkageOptions)
        }
        let inputText = this.state.inputText || defaultOptions.map(o => o.label).join(', ')
        return (
            <span>
            <Cascader
            popupPlacement="bottomRight"
            defaultValue={linkageValue}
            options={this.props.linkageOptions}
            onChange={this.onChange.bind(this)}
             >
                <input type="text" className="mo-input" placeholder={this.props.linkagePlaceholder} style={{width:this.props.linkageWidth}} value={inputText} readOnly />
            </Cascader>
            <input type="hidden" value={this.state.inputValue.join(',')} name={this.props.linkageName} />
            </span>
        )
    }
}
function linkage ($ele) {
    $ele.each(function () {
        let $this = $(this)
        $this.addClass('mo-linkage').addClass('mo-loading--off')
        let json
        let data = $this.data()
        let $options = filter(this, data.linkageOptions)
        data.linkageOptions = JSON.parse($options.html())
        render(<Linkage {...data} />, $this.get(0))
    })
}
window.mo.linkage = linkage
$(function () {
    mo.linkage($('[data-linkage-options]'))
})
