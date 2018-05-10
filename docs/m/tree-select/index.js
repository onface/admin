import $ from "jquery"
import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom'
import 'rc-tree-select/assets/index.css';
import TreeSelect, { TreeNode, SHOW_PARENT } from 'rc-tree-select';
import filter from "../filter/index"
import "./index.less"

class Ts extends Component {
    static defaultProps = {
        tsValue: '',
        tsWidth: 300
    }
    constructor (props) {
        super(props)
        let value
        if (props.tsSingle) {
            value = props.tsValue.toString()
        }
        else {
            value = props.tsValue.toString().split(',')
        }

        this.state = {value}
    }
    onDropdownVisibleChange () {
        return true
    }
    onChange (value) {
        this.setState({value})
    }
    render () {
        let props = this.props
        let state = this.state
        let value
        if (props.tsSingle) {
            value = state.value
        }
        else {
            value = state.value.join(',')
        }
        return (
            <span>
                <TreeSelect
                  className="check-select"
                  style={{width: this.props.tsWidth}}
                  transitionName="rc-tree-select-dropdown-slide-up"
                  choiceTransitionName="rc-tree-select-selection__choice-zoom"
                  dropdownStyle={{ height: 200, overflow: 'auto' }}
                  dropdownPopupAlign={{ overflow: { adjustY: 0, adjustX: 0 }, offset: [0, 2] }}
                  onDropdownVisibleChange={this.onDropdownVisibleChange.bind(this)}
                  placeholder={<i>请下拉选择</i>}
                  searchPlaceholder="search"
                  treeLine maxTagTextLength={10}
                  value={this.state.value}
                  treeData={this.props.data}
                  treeNodeFilterProp="title"
                  treeCheckable={!props.tsSingle} showCheckedStrategy={SHOW_PARENT}
                  onChange={this.onChange.bind(this)}
                />
                <input type="hidden" name={this.props.tsName} value={value} />
            </span>
        )
    }
}
$(function () {
    $('[data-ts-name]').each(function () {
        let $this = $(this)
        $this.addClass('mo-ts').addClass('mo-loading--off')
        let data = $this.data()
        let $options = filter(this,data.tsOptions)
		let options = JSON.parse($options.html())
        ReactDOM.render(<Ts {...data} data={options} />, this)
    })
})
