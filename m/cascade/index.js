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

        /* 初始选中值 : 
         *   1. 后端给到 
         *   2. 有插入0数据 
         *   3. 默认选中第一个
         */
        let hasCheckedValue = /\S/.test(props.cascadeValue || '' )
        // console.log(hasCheckedValue,props.cascadeValue)
        let checkedArray = []
        let propsCheckedArray = []
        if(hasCheckedValue){
            propsCheckedArray = extend(true,[],String(props.cascadeValue).split(','))
            checkedArray = TreeStore(data).changeSelect(String(props.cascadeValue).split(',').join('-'))
            // console.log('hasCheckedValue : ',JSON.stringify(checkedArray),JSON.stringify(propsCheckedArray))
            // console.log( TreeStore(data).changeSelect(checkedArray.reverse()[0]))
        }else{
            checkedArray = TreeStore(data).getChildLeftBranchIds().map(function(item){
                return item[0] || ''
            })
            // console.log('noCheckedValue : ',JSON.stringify(checkedArray),JSON.stringify(propsCheckedArray))
        }
        // 有column数据 改为0 (不覆盖后端给到数据)
        props.data.column.some(function(item,index){
            if(typeof item.filObj != 'undefined' && index >= propsCheckedArray.length ){
                // checkedArray[index] = '0'
                checkedArray = checkedArray.slice(0,index)
                // console.log(JSON.stringify(item),index)
                return true
            }
        })
        // console.log('CheckedValue : ',JSON.stringify(checkedArray))


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
            },
            removeComfirmDialog:{
                title:'提示',
                show:false,
                content:'确认删除？'
            }
        }
    }
    ms = (action) => {
        let self = this
        let state = this.state
        switch (action.type) {
            case 'CHANGE_CHECK_ARRAY':
                if(action.payload.value == '0'){
                    let changeCheckedArray = extend(true,[],state.checkedArray)
                    changeCheckedArray = changeCheckedArray.map(function(item,index){
                        if(index < action.payload.index){
                            return item 
                        }else{
                            return '0'
                        }
                    })
                    state.checkedArray = changeCheckedArray
                    // state.checkedArray = state.checkedArray.slice(0,action.payload.index+1)
                }else{
                    state.checkedArray = TreeStore(state.data).changeSelect(action.payload.value)
                }
                self.props.data.column.some(function(item,index){
                    if(typeof item.filObj != 'undefined' && index >= action.payload.index ){
                         // state.checkedArray[index] = '0'
                         state.checkedArray =  state.checkedArray.slice(0,action.payload.index + 1)
                        return true
                    }
                })
            break;
            case 'CHANGE_EDIT_DIALOG':
                for(let key in action.payload){
                    state.editDialog[key] = action.payload[key]
                }
            break
            case 'CHANGE_REMOVE_COFIRM_DIALOG':
                for(let key in action.payload){
                    state.removeComfirmDialog[key] = action.payload[key]
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
                if(state.moveDialog.old_path){
                    if(state.moveDialog.checkedArray.length < state.moveDialog.old_path.split(',').length ){
                        state.moveDialog.errMsg = '您没有移动到正确位置!'
                    }else{
                        state.moveDialog.errMsg = ''
                    }
                }
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
                    // console.log(parentId)
                    let curId = action.payload.id
                    let $id = parentId ? parentId.split(',') : []
                        $id.push(curId)
                        $id = $id.join('-')
                        // console.log($id)
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
            case 'CHANGE_REMOVE':
                // console.log('removeData data : ',JSON.stringify(state.data))
                let removeData = TreeStore.treeFilter(state.data,'child',function(item){
                    return item.id != state.removeComfirmDialog.id
                })
                    // console.log('removeData : ',JSON.stringify(removeData))
                state.data = extend(true,[],removeData)
                if(state.removeComfirmDialog.parentId == ''){
                    state.checkedArray = TreeStore(state.data).getChildLeftBranchIds().map(function(item){
                        return item[0] || ''
                    })
                    if(state.checkedArray[0] == ''){
                        state.checkedArray = []
                    }
                }else{
                    state.checkedArray = TreeStore(state.data).changeSelect(state.removeComfirmDialog.parentId)
                }
                // console.log('removeData checkedArray : ',JSON.stringify(state.checkedArray))
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
            operateType:state.editDialog.operateType,
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
        // 没有移动位置 报错提示
        if(state.checkedArray.join(',') === state.moveDialog.checkedArray.join(',') ){
            self.ms({
                type:'CHANGE_MOVE_DIALOG',
                payload:{
                    errMsg : '您没有修改位置!'
                }
            })
            return false
        }
        // 没有移动到同等级位置 报错提示
        if(state.moveDialog.checkedArray.length < state.moveDialog.old_path.split(',').length ){
            self.ms({
                type:'CHANGE_MOVE_DIALOG',
                payload:{
                    errMsg : '您没有移动到正确位置!'
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
            path:state.moveDialog.checkedArray[state.moveDialog.showLength - 1].split('-').join(','),
            operateType:state.moveDialog.operateType,
            type:state.moveDialog.type ,
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
    // ajax remove 
    submitRemove = () => {
        let self = this
        let state = this.state
        if(state.xhrBusy){
            return false
        }
        self.ms({
            type:'CHANGE_XHR_BUSY',
            payload:true
        })
        let data = {
            operateType:state.removeComfirmDialog.operateType,
            type:state.removeComfirmDialog.type ,
            id:state.removeComfirmDialog.id.split(',')
        }
        $.ajax({
            url:self.props.data.ajax.remove.action,
            type:self.props.data.ajax.remove.method,
            dataType:'json',
            data:data
        }).done(function(res){
            if(res.status == 'success'){
                self.ms({
                    type:'CHANGE_REMOVE',
                })
                self.ms({
                    type:'CHANGE_REMOVE_COFIRM_DIALOG',
                    payload:{
                        show:false
                    }
                })
                self.ms({
                    type:'CHANGE_MESSAGE',
                    payload:{
                        show:true,
                        content:'删除成功'
                    }
                })
            }else{
                self.ms({
                    type:'CHANGE_MESSAGE',
                    payload:{
                        show:true,
                        content:res.msg || '删除失败'
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

        let showCheckedArray = extend(true,[],state.checkedArray)
        showCheckedArray = TreeStore(state.data).changeSelect(showCheckedArray.reverse()[0])
        // console.log(JSON.stringify(showCheckedArray))
        showCheckedArray = showCheckedArray.slice(0,state.checkedArray.length + 1)
        console.log('showCheckedArray :',JSON.stringify(showCheckedArray))
        let renderObj = {
            checked : showCheckedArray ,
            maxLength : state.showLength ,
            minLength : state.showLength
        }
        if(typeof props.data.column != 'undefined'){
            props.data.column.some(function(item){
                if(typeof item.filObj != 'undefined'){
                    renderObj.filObj = item.filObj
                    return true
                }
            })
        }
        let renderSelect = TreeStore(state.data).renderSelect(renderObj)
        console.log(renderSelect)

        let moveDialogSelect = []
        if(state.moveDialog.show){
            moveDialogSelect= TreeStore(state.data).renderSelect({
                checked : state.moveDialog.checkedArray ,
                maxLength : state.moveDialog.showLength
            })
        }
        // console.log(moveDialogSelect)

        return (
            <div className={`mo-cascade mo-cascade--themes-${props.themes}`}>
                {
                    renderSelect.map(function(item,index){
                        let config = {
                            value : state.checkedArray[index] || ''
                        }
                        // 判断是否禁用
                        if(props.disabled.split(',')[index] == 'true' ){
                            config.disabled = 'disabled'
                        }
                        /* 判断value值
                            1. 有disable -> '0'
                            2. 无value值 & 有配置filObj -> '0'
                        */
                        if(typeof config.disabled != 'undefined'){
                            config.value = '0'
                        }else{
                            if(!config.value){
                                if(typeof props.data.column != 'undefined'){
                                    if(typeof props.data.column[index].filObj != 'undefined'){
                                        config.value = '0'
                                    }
                                }
                            }
                        }

                        return (
                            <div key={index} className="mo-cascade-item">
                                <div className="mo-cascade-item-label">
                                    {props.data.column[index].label}
                                </div>
                                <div className="mo-cascade-item-cnt">
                                    <select
                                        className="mo-cascade-item-cnt-select"
                                        onChange={function(e){
                                            self.ms({
                                                type:'CHANGE_CHECK_ARRAY',
                                                payload:{
                                                    index:index,
                                                    value:e.target.value
                                                }
                                            })
                                        }}
                                        {...config}
                                    >
                                        {
                                            (function(){
                                                let placeholder = null ;
                                                ( renderSelect[index] || [] ).some(function(tempItem,tempIndex){
                                                    if(tempItem.$id != '0'){
                                                        placeholder = (<option  value="" disabled >请选择</option>)
                                                    }
                                                    return true
                                                })
                                                if(( renderSelect[index] || [] ).length == 0){
                                                    placeholder = (<option  value="" disabled >请选择</option>)
                                                }
                                                return placeholder
                                            })()
                                        }
                                        {
                                            ( renderSelect[index] || [] ).map(function(selItem,selIndex){
                                                let node = null
                                                if(selItem.id == '0' && typeof props.data.column[index].filObj != 'undefined'){
                                                    node = ( <option key={selIndex} value={selItem.id} >{props.data.column[index].filObj.name}</option> )
                                                }
                                                if(selItem.id != '0'){
                                                    node = ( <option key={selIndex} value={selItem.id} >{selItem.name}</option> )
                                                }
                                                return node
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="mo-cascade-item-tool">
                                    {/* 如果有ajax.add接口才显示按钮 */}
                                    {
                                        props.data.ajax.add && index <= state.checkedArray.length
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
                                    {/* 如果有ajax.remove接口才显示按钮 */}
                                    {
                                        props.data.ajax.remove && state.checkedArray[index]
                                        ? (
                                            <div className="mo-cascade-item-tool-icon fa fa-trash-o"
                                                 onClick={function (){
                                                    // console.log('删除')
                                                    let ids = state.checkedArray[index]
                                                    let curId = ids.split('-').reverse()[0]
                                                    let curName = self.getCheckedArrayString(state.checkedArray.slice(0,index + 1),'name').reverse()[0]
                                                    let parentId = ids.split('-')
                                                        parentId.pop()
                                                        parentId = parentId.join('-')
                                                    // console.log('ids,curId,curName : ',ids,curId,curName,parentId)

                                                    self.ms({
                                                        type:'CHANGE_REMOVE_COFIRM_DIALOG',
                                                        payload:{
                                                            show:true,
                                                            $ids:curId,
                                                            id:ids,
                                                            content:'确认删除“'+curName+'”吗？',
                                                            operateType:'remove',
                                                            type:props.data.column[index].type,
                                                            parentId:parentId,
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
                        value={(function(){
                            if( state.checkedArray[state.checkedArray.length - 1] ){
                                return state.checkedArray[state.checkedArray.length - 1].split('-').join(',')
                            }
                            if( state.checkedArray[state.checkedArray.length - 2] ){
                                return state.checkedArray[state.checkedArray.length - 2].split('-').join(',')
                            }
                            return ''
                        })()}
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
                {/* removeComfirmDialog */}
                <Dialog
                    title={self.state.removeComfirmDialog.title}
                    show={self.state.removeComfirmDialog.show}
                    style={{width: 350}}
                    onClose={function (){
                        self.ms({
                            type:'CHANGE_REMOVE_COFIRM_DIALOG',
                            payload:{
                                show:false
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
                                onClick={self.submitRemove}
                            >确认</span>
                            <span className="mo-cascade-btn mo-btn" data-r-dialog-close="true">取消</span>
                        </div>
                    )}
                >
                    <div>{self.state.removeComfirmDialog.content}</div>
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
        operateType:'move',
        showLength:0,
        checkedArray:[],
        id:'', // 编辑时当前id,
        $ids:'', // 树id封装标识
        old_path:'', // 原始位置,
        errMsg:''
    },
    themes:'default',
    disabled:'false,false,false,false'
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
