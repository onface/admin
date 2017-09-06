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
        // console.log(hasCheckedValue)
        let checkedArray = hasCheckedValue
                            ?   props.cascadeValue.split(',')
                            :   TreeStore(data).getChildLeftBranchIds().map(function(item){
                                    return item[0] || ''
                                })
            console.log(JSON.stringify(checkedArray))
            checkedArray = TreeStore(data).changeSelect(checkedArray.reverse()[0] )
            console.log(JSON.stringify(checkedArray))
        // 显示的级联下拉框个数 : number || undefined (无限制显示)
        let showLength = props.data.column ? props.data.column.length : undefined


        this.state = {
            checkedArray : checkedArray ,
            showLength : showLength ,
            data : data,
            editDialog :props.editDialog,
            moveDialog :props.moveDialog,
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
            case 'CHANGE_MOVE_DIALOG':
                for(let key in action.payload){
                    state.moveDialog[key] = action.payload[key]
                }
            break
            case 'CHANGE_MOVE_DIALOG_CHECK_ARRAY':
                let checkedArray = TreeStore(state.data).changeSelect(action.payload)
                state.moveDialog.checkedArray = extend(true,[],checkedArray)
            break
            case 'CHANGE_MESSAGE':
                for(let key in action.payload){
                    state.message[key] = action.payload[key]
                }
            break;
            case 'CHANGE_MOVE':
                let curArray = []
                let parentId = state.moveDialog.checkedArray[state.moveDialog.showLength - 1]
                let deletedata = TreeStore.treeFilter(state.data,'child',function(item){
                        let isIt = item.id == state.moveDialog.$ids
                        if(isIt){
                            let temp = extend(true,{},item)
                            curArray.push(temp)
                        }
                        return !isIt
                    })
                let movedata = TreeStore.extendChild(deletedata,parentId,curArray)
                state.data = extend(true,[],movedata)
                // console.log(movedata)
                state.checkedArray = TreeStore(state.data).changeSelect(state.moveDialog.$ids)
            break
            case 'CHANGE_XHR_BUSY':
                state.xhrBusy = action.payload
            break
            case 'CHANGE_DATA':
                // console.log('CHANGE_DATA : ',action.payload)
                if(state.editDialog.operateType == 'add'){// 新增
                    let parentId = state.editDialog.path.split(',').join('-')
                    let curId = action.payload.id
                    let $id = parentId.split(',')
                        $id.push(curId)
                        $id = $id.join('-')
                    let data = TreeStore.extendChild(state.data,parentId,[
                        {
                            id: $id,
                            $id: curId,
                            name:state.editDialog.name,
                        }
                    ])
                    state.data = extend(true,[],data)
                    state.checkedArray = TreeStore(state.data).changeSelect($id)
                }else if(state.editDialog.operateType == 'update'){// 修改
                    let data = TreeStore.treeMap(state.data,'child',function(item){
                        if(item.id == state.editDialog.$ids){
                            item.name = state.editDialog.name
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
            path:state.editDialog.path
        }
        $.ajax({
            url:self.props.data.ajax[state.editDialog.operateType].action,
            type:self.props.data.ajax[state.editDialog.operateType].method,
            dataType:'json',
            data:data
        }).done(function(res){
            if(res.status == 'success'){
                self.ms({
                    type:'CHANGE_DATA',
                    payload: {
                        id:res.data.id || '' ,
                    }
                })
                self.ms({
                    type:'CHANGE_EDIT_DIALOG',
                    payload:{
                        show:false,
                        errMsg:''
                    }
                })
                self.ms({
                    type:'CHANGE_MESSAGE',
                    payload:{
                        show:true,
                        content:'提交成功'
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
    // ajax move
    submitMove = () => {
        let self = this
        let state = this.state
        if(state.checkedArray.join(',') === state.moveDialog.checkedArray.join(',') ){
            self.ms({
                type:'CHANGE_MOVE_DIALOG',
                payload:{
                    errMsg : '您没有修改位置!'
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
            id:state.moveDialog.id ,
            old_path:state.moveDialog.old_path ,
            path:state.moveDialog.checkedArray[state.moveDialog.showLength - 1].split('-').join(',')
        }
        $.ajax({
            url:self.props.data.ajax.move.action,
            type:self.props.data.ajax.move.method,
            dataType:'json',
            data:data
        }).done(function(res){
            if(res.status == 'success'){
                self.ms({
                    type:'CHANGE_MOVE',
                })
                self.ms({
                    type:'CHANGE_MOVE_DIALOG',
                    payload:{
                        show:false,
                        errMsg:''
                    }
                })
                self.ms({
                    type:'CHANGE_MESSAGE',
                    payload:{
                        show:true,
                        content:'移动成功'
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
    /* {string} key */
    getCheckedArrayString = (checkedArray , key) => {
        checkedArray = extend(true,[],checkedArray)
        let self = this
        let state = self.state
        let checkedArrayStr = []

        if(checkedArray.length == 0 || checkedArray[0] == '' ){

        }else{
            TreeStore.treeMap(state.data,'child',function(item){
                let index = checkedArray.indexOf(item.id)
                if( index != -1 ){
                    checkedArrayStr[index] = item[key]
                }
            })
        }

        return checkedArrayStr
    }
    render () {
        let self = this
        let state = self.state
        let props = self.props
        let renderSelect = TreeStore(state.data).renderSelect({
            checked : state.checkedArray ,
            maxLength : state.showLength
        })
        if(renderSelect.length < state.showLength && renderSelect[0].length ){
            renderSelect.push([])
        }
        // console.log(renderSelect)

        let moveDialogSelect = []
        if(state.moveDialog.show){
            moveDialogSelect= TreeStore(state.data).renderSelect({
                checked : state.moveDialog.checkedArray ,
                maxLength : state.moveDialog.showLength
            })
        }
        // console.log(moveDialogSelect)

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
                                                    let ids = ''
                                                    let $ids = ''
                                                    let curId = ''
                                                    let pathIds = ''

                                                    if(state.checkedArray[index] && /\S/.test(state.checkedArray[index]) ){
                                                        ids = state.checkedArray[index]
                                                        $ids = state.checkedArray[index]
                                                        curId = ids.split('-').reverse()[0]
                                                        pathIds = ids.split('-')
                                                        pathIds.pop()
                                                        pathIds = pathIds.join(',')
                                                    }else{
                                                        ids = state.checkedArray[index - 1] || ''
                                                        pathIds = ids.split('-').join(',')
                                                    }
                                                    self.ms({
                                                        type:'CHANGE_EDIT_DIALOG',
                                                        payload:{
                                                            show:true,
                                                            operateType:'add',
                                                            type:props.data.column[index].type,
                                                            title:props.data.column[index].label,
                                                            path:pathIds,
                                                            tip:self.getCheckedArrayString(state.checkedArray.slice(0,index),'name').join(','),
                                                            id:curId,
                                                            $ids:$ids,
                                                            name:''
                                                        }
                                                    })
                                                }}
                                            ></div>
                                        ) : null
                                    }
                                    {/* 如果有ajax.update接口才显示按钮 */}
                                    {
                                        props.data.ajax.update && state.checkedArray[index]
                                        ? (
                                            <div className="mo-cascade-item-tool-icon fa fa-edit"
                                                onClick={function (){
                                                    let curName = self.getCheckedArrayString(state.checkedArray,'name')[index]

                                                    let ids = state.checkedArray[index]
                                                    let curId = ids.split('-').reverse()[0]
                                                    let pathIds = ids.split('-')
                                                        pathIds.pop()
                                                        pathIds = pathIds.join(',')

                                                    self.ms({
                                                        type:'CHANGE_EDIT_DIALOG',
                                                        payload:{
                                                            show:true,
                                                            operateType:'update',
                                                            type:props.data.column[index].type,
                                                            title:props.data.column[index].label,
                                                            name:curName,
                                                            id:curId,
                                                            $ids:state.checkedArray[index],
                                                            path:pathIds,
                                                            tip:self.getCheckedArrayString(state.checkedArray.slice(0,index),'name').join(','),
                                                        }
                                                    })
                                                }}
                                            ></div>
                                        ) : null
                                    }
                                    {/* 如果有ajax.move接口才显示按钮 */}
                                    {
                                        props.data.ajax.move && index && state.checkedArray[index]
                                        ? (
                                            <div className="mo-cascade-item-tool-icon fa fa-arrows"
                                                 onClick={function (){
                                                    // console.log('移动')
                                                    let ids = state.checkedArray[index]
                                                    let curId = ids.split('-').reverse()[0]
                                                    let pathIds = ids.split('-')
                                                        pathIds.pop()
                                                        pathIds = pathIds.join(',')

                                                    self.ms({
                                                        type:'CHANGE_MOVE_DIALOG',
                                                        payload:{
                                                            show:true,
                                                            type:props.data.column[index].type,
                                                            title:props.data.column[index].label,
                                                            checkedArray:state.checkedArray ,
                                                            showLength:index,
                                                            $ids:ids,
                                                            id:curId,
                                                            old_path:pathIds,
                                                            tip:self.getCheckedArrayString(state.checkedArray.slice(0,index),'name').join(','),
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
                    title={(function(){
                        let showString = state.editDialog.title
                        if(state.editDialog.operateType == 'update'){
                            showString = '修改' + showString
                        }else{
                            showString = '新增' + showString
                        }
                        if(/\S/.test(state.editDialog.tip) && state.editDialog.tip){
                            showString += ' ( '+state.editDialog.tip+' )'
                        }
                        return showString
                    })()}
                    show={state.editDialog.show}
                    style={{width: 550}}
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
                {/* moveDialog */}
                <Dialog
                    title={(function(){
                        let showString = '移动'+state.moveDialog.title+"到"
                        if(/\S/.test(state.moveDialog.tip) && state.moveDialog.tip){
                            showString = ' ( 从 '+state.moveDialog.tip+' 下 ) ' + showString
                        }
                        return showString
                    })()}
                    show={state.moveDialog.show}
                    style={{width: 550}}
                    onClose={function (){
                        self.ms({
                            type:'CHANGE_MOVE_DIALOG',
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
                                onClick={self.submitMove}
                            >确认</span>
                            <span className="mo-cascade-btn mo-btn" data-r-dialog-close="true">取消</span>
                        </div>
                    )}
                >
                    <div className="mo-cascade mo-cascade--expend">
                        {
                            moveDialogSelect.map(function(item,index){
                                return (
                                    <div key={index} className="mo-cascade-item">
                                        <div className="mo-cascade-item-label">
                                            {props.data.column[index].label + ' : '}
                                        </div>
                                        <div className="mo-cascade-item-cnt">
                                            <select
                                                className="mo-cascade-item-cnt-select"
                                                value={state.moveDialog.checkedArray[index] || ''}
                                                onChange={function(e){
                                                    // console.log(e.target.value)
                                                    self.ms({
                                                        type:'CHANGE_MOVE_DIALOG_CHECK_ARRAY',
                                                        payload:e.target.value
                                                    })
                                                }}
                                            >
                                                {
                                                    ( moveDialogSelect[index] || [] ).map(function(selItem,selIndex){
                                                        return (
                                                            <option key={selIndex} value={selItem.id} >{selItem.name}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                       </div>
                                   </div>
                               )
                           })
                       }
                       {
                           state.moveDialog.errMsg
                           ? (
                               <div className="mo-cascade-item">
                                   <div className="mo-cascade-item-cnt">
                                       <div className="mo-cascade-F-highlight">{state.moveDialog.errMsg}</div>
                                   </div>
                               </div>
                           ) : null
                       }
                    </div>
                </Dialog>
                {/* message */}
                <Dialog
                    title={state.message.title}
                    show={state.message.show}
                    style={{width: 200}}
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
        path:'', // 所有父id
        id:'', // 编辑时当前id,
        $ids:'', // 树id封装标识
        errMsg:''
    },
    moveDialog:{
        show:false,
        title:'',
        type:'',
        showLength:0,
        checkedArray:[],
        id:'', // 编辑时当前id,
        $ids:'', // 树id封装标识
        old_path:'', // 原始位置,
        errMsg:''
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
