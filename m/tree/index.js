import "./index.less";
import $ from "jquery"
import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import TreeStore from "tree-store" ;
import classNames from "classnames" ;
import filter from '../filter/index';

$('body').on('click','.li-span',function(e){
	e.stopPropagation();e.preventDefault();
    let $this = $(this)
    let $parent = $this.closest('.li')
    $parent.toggleClass('li-true')
    $parent.toggleClass('li-false')
})

class TreeNode extends Component {
	render() {
        let self = this
		let props = this.props
		return (
			<ul>
				{
					props.data.map(function (item, key){
						var checked = false
						if(props.checked_ids.indexOf(item.id) != -1){
							checked = true
						}
						var node = null
                        var btn = null
						if (item.child) {
							node = (<TreeNode data={item.child} checked_ids={props.checked_ids} change={props.change} />)
                            btn = (
                                <span className={'li-span'} 
                                ></span>
                            )
						}
						return (
							<li key={key} className={'li li-false'} 
							>
                                {btn}
								<input type="checkbox" checked={checked} onChange={function (){
									props.change(item.id,checked)
								}} />
								{item.id +'  '+ item.value}
								{node}
							</li>
						)
					})
				}
			</ul>
		)
	}
}

class TreeApp extends Component {
	constructor ( props ) {
		super(props)
        let store = TreeStore( props.data ,{
            id :  'value',
            child :  'children' ,
            value :  'label' ,
        })

        let checked_ids = []
        if(/\S/.test(props.treeValue)){
            let isChecked = props.treeValue.split(',')
            checked_ids = checked_ids.concat(isChecked)
            for(let key in isChecked){
                checked_ids = checked_ids.concat(store.getParentAllIds(isChecked[key]))
            }
        }

		this.state = {
            store : store ,
			data : store.data,
			checked_ids : checked_ids //已选中的id
		}
	}
	// 重复绑定事件bug 注释移除
    // componentDidMount () {
    //     $('body').on('click','.li-span',function(e){
    //     	e.stopPropagation();e.preventDefault();
    //     	console.log('li-span')
    //         let $this = $(this)
    //         let $parent = $this.closest('.li')
    //         $parent.toggleClass('li-true')
    //         $parent.toggleClass('li-false')
    //     })
    // }
	change ( id , checked ) {
		var self = this
		var result = self.state.store.changeChecked({
		    id : id ,
		    isChecked : checked ,
		    checkedIds : self.state.checked_ids,
            autoLink : {
                parent : self.props.treeLinkParent ,
                child : self.props.treeLinkChild 
            }
		})
		
		self.setState({
			checked_ids: result.checked
		})
	}
	render () {
		let self = this
		let state = this.state
		return (
			<div className="expand">
				<TreeNode data={state.data} checked_ids={state.checked_ids}  change={this.change.bind(this)} />
                <input name={self.props.treeName} type="hidden" value={self.state.checked_ids.join(',')} />
			</div>
		)
	}
}

TreeApp.defaultProps = {
    data:[],
    treeName:'',
    treeValue:'',
    treeLinkParent:true,
    treeLinkChild:true,
}

mo.tree = function (target) {
	var $target = $(target)
	$target.each(function () {
		$target.addClass('mo-tree').addClass('mo-loading--off')
		let $this = $(this)
		let data = $this.data()
		let $options = filter(this,data.treeOptions)
		let json = JSON.parse($options.html())
		ReactDOM.render(<TreeApp {...data} data={json} />, this)
	})
}
$(function () {
	mo.tree('[data-tree-name]')
})
