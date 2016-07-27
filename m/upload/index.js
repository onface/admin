import $ from 'jquery'
import {Component} from "react"
import {render} from "react-dom"
import FastUpload from 'fast-upload'
import noty from 'noty'
import cls from 'classnames'
import "../hide/index.less"
class Upload extends Component {
    static defaultProps = {
        uploadTitle: '上传',
        uploadWidth: 200,
        uploadHeight: 200,
        uploadPostname: 'file',
        uploadType: 'photo'
    }
    state = {
        src: this.props.uploadValue.src || '',
        id: this.props.uploadValue.id || '',
        filename: this.props.uploadValue.filename || ''
    }
    componentDidMount () {
        let self = this
        new FastUpload({
            trigger: self.refs.picker,
            name: self.props.uploadPostname,
            action: self.props.uploadUrl,
            multiple: false,
            error: function (file) {
                alert('上传错误')
                console.log(file)
            },
            success: function (res) {
                if (typeof res !== 'object') {
                    res = JSON.parse(res)
                }
                if (res.status === 'success') {
                    let newState = {
                        id: res.data.id,
                        src: res.data.src
                    }
                    if (res.data.filename) {
                        newState.filename = res.data.filename
                    }
                    self.setState(newState)
                }
                else {
                    if (res.msg) {
                        let throwError = '开发人员注意: 操作错误后错误原因必须在 ajax 响应 JSON 中的 msg 中配置'
    					alert(throwError)
    					throw new Error(throwError)
                    }
                    noty({
                        type: 'error',
                        text: res.msg
                    })
                }
            }
        })
    }
    clear () {
        this.setState({
            id: '',
            src: '',
            filename: ''
        })
    }
    render () {
        let self = this
        let props = self.props
        let controlSize = {
            width: self.props.uploadWidth + 'px',
            lineHeight: self.props.uploadHeight + 'px',
            height:self.props.uploadHeight + 'px'
        }
        return (
            <div>
                <div className="mo-upload-title">
                    {props.uploadTitle}
                </div>
                <div className={cls({
                    'mo-upload-bd': true,
                    'mo-upload-bd--picker': !self.state.id,
                    'mo-upload-bd--preview': self.state.id
                })} >
                    <div ref="picker" className="mo-upload-bd-picker fa fa-upload" style={controlSize} >

                    </div>
                    <div className="mo-upload-bd-preview" style={controlSize} >
                        <img src={self.state.src} alt="" className={cls({
                            'mo-hide': self.props.uploadType === 'file'
                        })}/>
                        <span className={cls({
                            'mo-hide': self.props.uploadType !== 'file'
                        })}>
                        {self.state.filename}
                        </span>
                    </div>
                </div>
                <div className="mo-upload-tool">
                    <span className={cls({
                        'mo-btn mo-btn--danger mo-upload-tool-delete': true,
                        'mo-hide': !self.state.id
                    })} onClick={this.clear.bind(this)}>删除</span>
                </div>
                <input type="hidden" name={self.props.uploadName} value={self.state.id} />
            </div>
        )
    }
}

mo.upload = function ($ele) {
    $ele.each(function () {
        let $this = $(this)
        let data = $.extend(true, data, $this.data())
        let json
        if (data.uploadValue) {
            if (data.uploadValue == 'prev') {
                json = $this.prev('script').html()
            }
            else {
                json = $(data.uploadValue).html()
            }
            data.uploadValue = JSON.parse(json)
        }
        else {
            data.uploadValue = {}
        }

        render(<Upload {...data} />, this)
    })
}
$(function () {
    mo.upload($('.mo-upload'))
})
