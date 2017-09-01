import $ from "jquery"
import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom'
// import 'rc-tree-select/assets/index.css';
// import TreeSelect, { TreeNode, SHOW_PARENT } from 'rc-tree-select';
import filter from "../filter/index"
import TreeStore from "tree-store" ;
import classNames from "classnames" ;
import extend from 'extend' ;
import Dialog from 'dialog.react';
import "./index.less"

class Cascade extends Component {
    constructor(props){
        super(props)
        console.log(props)
        // 树形数据源
        let data = TreeStore.treeMap( props.data.data  , 'child' , function ( item ) {
                        item.$id = item.id
                        let idArray = item['__TreeStore_parentArray'].map(function(pAitem){
                            return pAitem.id
                        })
                        if(idArray.length){
                            idArray.push(item.$id)
                        }
                        item.id = idArray.join('-') || item.$id
                        delete item['__TreeStore_parentArray']
                        return item
                    } , true )

        // 初始选中值 : 后端给到 || 默认选中第一个
        let hasCheckedValue = /\S/.test(props.cascadeValue || '' )
        let checkedArray = hasCheckedValue
                            ?   props.cascadeValue.split(',')
                            :   TreeStore(data).getChildLeftBranchIds().map(function(item){
                                    return item[0] || ''
                                })
        // 显示的级联下拉框个数 : number || undefined
        let showLength = Math.max( (props.data.column || [] ).length , hasCheckedValue ? props.cascadeValue.split(',').length : 0 )
            showLength = showLength ? showLength : undefined
        this.state = {
            checkedArray : checkedArray ,
            showLength : showLength ,
            data : data,
            dialog :{
                show:false,
                title:'',
                value:'',
                type:'add',
                value:''
            }
        }
    }
    ms = (action) => {
        let self = this
        let state = this.state
        switch (action.type) {
            case 'CHANGE_CHECK_ARRAY':
                state.checkedArray = TreeStore(state.data).changeSelect(action.payload)
            break;
            case 'CHANGE_DIALOG':
                for(let key in action.payload){
                    state.dialog[key] = action.payload[key]
                }
            break
            default:
                console.log('not find ',action.type)
        }
        self.setState(state)
    }
    // ajax
    submit = () => {
        let self = this
    }
    render () {
        let self = this
        let state = self.state
        let props = self.props
        let renderSelect = TreeStore(state.data).renderSelect({
            checked : state.checkedArray ,
            maxLength : state.showLength
        })
        console.log(renderSelect)

        return (
            <div className="mo-cascade">
                {
                    renderSelect.map(function(item,index){
                        return (
                            <div key={index} className="mo-cascade-item">
                                <div className="mo-cascade-item-label">
                                    {props.data.column[index].label + ' : '}
                                </div>
                                <div className="mo-cascade-item-cnt">
                                    <select
                                        className="mo-cascade-item-cnt-select"
                                        value={state.checkedArray[index] || ''}
                                        onChange={function(e){
                                            self.ms({
                                                type:'CHANGE_CHECK_ARRAY',
                                                payload:e.target.value
                                            })
                                        }}
                                    >
                                        <option value="" disabled>请选择</option>
                                        {
                                            ( renderSelect[index] || [] ).map(function(selItem,selIndex){
                                                return (
                                                    <option key={selIndex} value={selItem.id} >{selItem.name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="mo-cascade-item-tool">
                                    {/* 如果有ajax.add接口才显示按钮 */}
                                    {
                                        props.data.ajax.add
                                        ? (
                                            <div className="mo-cascade-item-tool-icon fa fa-plus"
                                                onClick={function (){
                                                    self.ms({
                                                        type:'CHANGE_DIALOG',
                                                        payload:{
                                                            show:true,
                                                            type:'add',
                                                            title:props.data.column[index].label
                                                        }
                                                    })
                                                }}
                                            ></div>
                                        ) : null
                                    }
                                    {/* 如果有ajax.update接口才显示按钮 */}
                                    {
                                        props.data.ajax.update
                                        ? (
                                            <div className="mo-cascade-item-tool-icon fa fa-edit"
                                                onClick={function (){
                                                    self.ms({
                                                        type:'CHANGE_DIALOG',
                                                        payload:{
                                                            show:true,
                                                            type:'update',
                                                            title:props.data.column[index].label
                                                        }
                                                    })
                                                }}
                                            ></div>
                                        ) : null
                                    }
                                </div>
                            </div>
                        )
                    })
                }
                {/* 表单隐藏input 组合form组件使用 */}
                <input  type="hidden"
                        value={state.checkedArray[state.checkedArray.length - 1].split('-').join(',')}
                        name={self.props.cascadeName || 'mo-cascade'}
                />
                {/* dialog */}
                <Dialog
                    title={state.dialog.type == 'add' ? '新增'+state.dialog.title : '修改'+state.dialog.title}
                    show={state.dialog.show}
                    style={{
                        width: 550
                    }}
                    onClose={function (){
                        self.ms({
                            type:'CHANGE_DIALOG',
                            payload:{
                                show:false
                            }
                        })
                    }}
                    tool={(
                        <div>
                            <span className="r-dialog-btn"
                                onClick={self.submit}
                            >确认</span>
                            <span className="r-dialog-btn" data-r-dialog-close="true">取消</span>
                        </div>
                    )}
                >
                    <div className="mo-cascade mo-cascade--expend">
                        <div className="mo-cascade-item">
                            <div className="mo-cascade-item-label">
                                {state.dialog.title}
                            </div>
                            <div className="mo-cascade-item-cnt">
                                <input className="mo-cascade-item-cnt-select" value={state.dialog.value}
                                    onChange={function (e){
                                        self.ms({
                                            type:'CHANGE_DIALOG',
                                            payload:{
                                                value:e.target.value
                                            }
                                        })
                                    }}
                                 />
                            </div>
                        </div>
                    </div>
                </Dialog>
            </div>
        )
    }
}

$(function () {
    $('.mo-cascade').each(function () {
        let $this = $(this)
        $this.addClass('mo-loading--off')
        let data = $this.data()
        let $options = filter(this,data.cascadeOptions)
		let options = JSON.parse($options.html())

        ReactDOM.render(<Cascade {...data} data={options} />, this)
    })
})
