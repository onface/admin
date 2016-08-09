import 'rc-tree/assets/index.css';
import "./index.less";
import $ from "jquery"
import filter from '../filter/index'
import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import Tree, { TreeNode } from 'rc-tree';

class TreeApp extends Component {
	static defaultProps = {
		treeValue: ''
	}
	state = {
		treeValue: this.props.treeValue.toString().split(',')
	}
	onCheck (value) {
		this.setState({
			treeValue: value
		})
	}
	render () {
		let self = this
		const loop = (data) => {
			return data.map((item) => {
				if (item.children) {
					return (<TreeNode key={item.value} title={item.label}>
			            {loop(item.children)}
			          </TreeNode>);
				}
				return <TreeNode key={item.value} title={item.label} />
			})
		}
		return (
			<div>
				<Tree
			        className="myCls"
			        showLine checkable
			        checkedKeys={self.state.treeValue}
			        onCheck={self.onCheck.bind(self)}
			      >
			      {loop(self.props.data)}
			    </Tree>
			    <input type="hidden" name={self.props.treeName} value={self.state.treeValue.join(',')} />
		      </div>
		)
	}
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
