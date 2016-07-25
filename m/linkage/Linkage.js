import {Component} from 'react'
class Linkage extends Component {
    render () {
        var self = this
        var optionsNodes = this.props.linkageData.map(function (item, key) {
            return <option value={item.value} key={key} >{item.name}</option>
        })
        return (
            <span>
                <select name="">
                {optionsNodes}
                </select>
            </span>
        )
    }
}
export default Linkage
