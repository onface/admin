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
        // console.log(props)
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
        // 显示的级联下拉框个数 : number || undefined (无限制显示)
        let showLength = Math.max( (props.data.column || [] ).length , hasCheckedValue ? props.cascadeValue.split(',').length : 0 )
            showLength = showLength ? showLength : undefined
        this.state = {
            checkedArray : checkedArray ,
            showLength : showLength ,
            data : data,
            editDialog :props.editDialog,
            xhrBusy:false,
            message:{
                title:'提示',
                show:false,
                content:'错误'
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
            case 'CHANGE_EDIT_DIALOG':
                for(let key in action.payload){
                    state.editDialog[key] = action.payload[key]
                }
            break
            case 'CHANGE_MESSAGE':
                for(let key in action.payload){
                    state.message[key] = action.payload[key]
                }
            break;
            case 'CHANGE_XHR_BUSY':
                state.xhrBusy = action.payload
            break
            case 'CHANGE_DATA':
                // console.log('CHANGE_DATA : ',action.payload)
                if(action.payload.operateType == 'add'){// 新增
                    let parentId = action.payload.id.split(',')
                        parentId.pop()
                        parentId = parentId.join('-')
                    let data = TreeStore.extendChild(state.data,parentId,[
                        {
                            id:action.payload.id,
                            name:action.payload.name,
                        }
                    ])
                    state.data = extend(true,[],data)
                }else if(action.payload.operateType == 'update'){// 修改
                    let data = TreeStore.treeMap(state.data,'child',function(item){
                        if(item.id == action.payload.id){
                            item.name = action.payload.name
                        }
                        return item
                    })
                    state.data = extend(true,[],data)
                    // console.log(JSON.stringify(data))
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
        let state = this.state
        if(!/\S/.test(state.editDialog.name)){
            self.ms({
                type:'CHANGE_EDIT_DIALOG',
                payload:{
                    errMsg : '请填写'+state.editDialog.title
                }
            })
            return false
        }
        if(state.xhrBusy){
            return false
        }
        self.ms({
            type:'CHANGE_XHR_BUSY',
            payload:true
        })
        let data = {
            name:state.editDialog.name ,
            type:state.editDialog.type ,
            id:state.editDialog.operateType == 'add' ? undefined : state.editDialog.id ,
        }
        $.ajax({
            url:self.props.data.ajax[state.editDialog.operateType].action,
            type:self.props.data.ajax[state.editDialog.operateType].method,
            dataType:'json',
            data:data
        }).done(function(res){
            if(res.status == 'success'){
                let id = ''
                if(state.editDialog.operateType == 'update'){// 修改
                    id = state.editDialog.id.split(',').join('-')
                }else if(state.editDialog.operateType == 'add'){// 新增
                    if(state.editDialog.id == '' ){
                        id = res.data.id
                    }else{
                        id = state.editDialog.id.split(',')
                        id.push(res.data.id)
                        id = id.join('-')
                    }
                }
                self.ms({
                    type:'CHANGE_DATA',
                    payload: {
                        operateType:state.editDialog.operateType,
                        id:id,
                        name:data.name
                    }
                })
                self.ms({
                    type:'CHANGE_EDIT_DIALOG',
                    payload:{
                        show:false,
                        errMsg:''
                    }
                })
            }else{
                self.ms({
                    type:'CHANGE_MESSAGE',
                    payload:{
                        show:true,
                        content:res.msg || '提交失败'
                    }
                })
            }
        }).always(function(){
            self.ms({
                type:'CHANGE_XHR_BUSY',
                payload:false
            })
        })
    }
    render () {
        let self = this
        let state = self.state
        let props = self.props
        let renderSelect = TreeStore(state.data).renderSelect({
            checked : state.checkedArray ,
            maxLength : state.showLength
        })
        // console.log(renderSelect)

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
                                                        type:'CHANGE_EDIT_DIALOG',
                                                        payload:{
                                                            show:true,
                                                            operateType:'add',
                                                            type:props.data.column[index].type,
                                                            title:props.data.column[index].label,
                                                            id:(function(){
                                                                    let id = state.checkedArray[index].split('-')
                                                                    id.pop()
                                                                    id = id.join(',')
                                                                    return id
                                                                })(),
                                                            name:''
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
                                                    let name = ''
                                                    renderSelect[index].some(function(t,i){
                                                        if(t.id == state.checkedArray[index]){
                                                            name = t.name
                                                            return true
                                                        }
                                                    })
                                                    self.ms({
                                                        type:'CHANGE_EDIT_DIALOG',
                                                        payload:{
                                                            show:true,
                                                            operateType:'update',
                                                            type:props.data.column[index].type,
                                                            title:props.data.column[index].label,
                                                            name:name,
                                                            id:state.checkedArray[index].split('-').join(',')
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
                {/* editDialog */}
                <Dialog
                    title={state.editDialog.id ? '修改'+state.editDialog.title : '新增'+state.editDialog.title}
                    show={state.editDialog.show}
                    style={{
                        width: 550
                    }}
                    onClose={function (){
                        self.ms({
                            type:'CHANGE_EDIT_DIALOG',
                            payload:{
                                show:false,
                                errMsg:''
                            }
                        })
                    }}
                    tool={(
                        <div>
                            <span
                                className={classNames({
                                    "mo-cascade-btn mo-btn mo-btn--success":true,
                                    "mo-btn--loading" : state.xhrBusy
                                })}
                                onClick={self.submit}
                            >确认</span>
                            <span className="mo-cascade-btn mo-btn" data-r-dialog-close="true">取消</span>
                        </div>
                    )}
                >
                    <div className="mo-cascade mo-cascade--expend">
                        <div className="mo-cascade-item">
                            <div className="mo-cascade-item-label">
                                {state.editDialog.title}
                            </div>
                            <div className="mo-cascade-item-cnt">
                                <input
                                    className="mo-cascade-item-cnt-select"
                                    value={state.editDialog.name}
                                    onChange={function (e){
                                        self.ms({
                                            type:'CHANGE_EDIT_DIALOG',
                                            payload:{
                                                name:e.target.value
                                            }
                                        })
                                    }}
                                 />
                                 {
                                     state.editDialog.errMsg ? (<div className="mo-cascade-F-highlight">{state.editDialog.errMsg}</div>) : null
                                 }
                            </div>
                        </div>
                    </div>
                </Dialog>
                {/* message */}
                <Dialog
                    title={state.message.title}
                    show={state.message.show}
                    onClose={function (){
                        self.ms({
                            type:'CHANGE_MESSAGE',
                            payload:{
                                show:false
                            }
                        })
                    }}
                 >
                    <div>{state.message.content}</div>
                </Dialog>
            </div>
        )
    }
}

Cascade.defaultProps = {
    editDialog :{
        show:false,
        title:'',
        name:'',
        operateType:'add',
        type:'',
        id:'',
        errMsg:''
    },
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
