import $ from 'jquery'
import {render} from "react-dom"
import {Component} from 'react'
import DateLogic from 'date-logic'
import extend from 'extend'
import classNames from 'classnames'

class Calendar extends Component {
	constructor(props){
		super(props)
		let self = this
		this.calData = new DateLogic({
	        date: new Date(props.date ),
	        startWeekDay: props.weekday || '7' ,
	        onChange: function (data) {
	        	// console.log('calData onChange')
	        	self.getCheckInXhr(data)
	        }
	    })

		this.state = {
			date : props.date ,
			weekColumn : props.weekcolumn ? props.weekcolumn.split(',') : ['S','M','T','W','T','F','S'],
			checkin : props.checkin ? props.checkin.split(',') : [],
			calData : this.calData.getData() || [] ,
			xhrBusy : false
		}
	}
	ms = (action) => {
		let self = this
		let state = this.state
		switch(action.type){
			case 'UPDATE_CAL_DATA':
				state.calData = action.payload
			break
			case 'UPDATE_DATE':
				state.date = action.payload
			break
			case 'UPDATE_CHECKIN':
				state.checkin = action.payload
			break
			case 'XHR_BUSY':
				state.xhrBusy = true
			break
			case 'XHR_FREE':
				state.xhrBusy = false
			break
			default:
				console.log('not find ',action.type)
		}
		self.setState(state)
	}
	getCheckInXhr = (data) => {
		// console.log('cgetCheckInXhr')
		data = extend(true,[],data)
        let date = ''
        data.some(function(item){
        	if(item.thisMonth){
        		date = item.year + '-' + item.month
        		return true
        	}
        })

		let self = this
		if(self.state.xhrBusy){
			return false
		}
		self.ms({
			type:'XHR_BUSY'
		})
		$.ajax({
			url:self.props.ajaxcalendarUrl,
			type:self.props.ajaxcalendarMethod,
			dataType:'json',
			data:{
				date:date
			}
		}).done(function(res){
			if(res.data){
				if(res.data.checkin){
			        self.ms({
			        	type:'UPDATE_CAL_DATA',
			        	payload:data
			        })
	                self.ms({
			        	type:'UPDATE_DATE',
			        	payload:date
			        })
			        self.ms({
			        	type:'UPDATE_CHECKIN',
			        	payload:res.data.checkin
			        })
				}
			}
		}).always(function(){
			self.ms({
				type:'XHR_FREE'
			})
		})

	}
	render(){
		let self = this
		let dateObj = new Date(self.state.date)
		return (
			<div style={{'position':'relative'}}>
				{
					self.state.xhrBusy
					? ( <span className="mo-loading mo-loading--big mo-loading--full" ></span> ) : null
				}
				<div className="mo-calendar-hd">
		            <div className="fa fa-chevron-left mo-calendar-hd-btnleft"
		            		onClick={function(){
		            			self.calData.lastMonth()
		            		}}
		            ></div>
		            <div className="mo-calendar-hd-title">{dateObj.getFullYear() +'年'+( dateObj.getMonth() + 1 )+'月'}</div>
		            <div className="fa fa-chevron-right mo-calendar-hd-btnright"
		            		onClick={function(){
								self.calData.nextMonth()
		            		}}
		            ></div>
		        </div>
		        <div className="mo-calendar-cnt">
		            <div className="mo-calendar-cnt-hd">
			            {
			            	self.state.weekColumn.map(function(item,index){
			            		return (
					                <span key={index} className="mo-calendar-cnt-hd-item">{item}</span>
		            			)
			            	})
			            }
		            </div>
		            <div className="mo-calendar-cnt-bd">
			            {
			            	self.state.calData.map(function(item,index){
			            		return (
					                <span 	key={index}
					                		className={classNames({
					                			"mo-calendar-cnt-bd-item" : true ,
					                			"mo-calendar-cnt-bd-item--disable" : item.lastMonth || item.nextMonth ,
					                			"mo-calendar-cnt-bd-item--on" : self.state.checkin.indexOf(String(item.day)) != -1
					                		})}
			                		>{item.day}</span>
		            			)
			            	})
			            }
		            </div>
		        </div>
		        <div className="mo-calendar-foot">
		            <span className="fa fa-circle"></span>
		            已打卡
		            <span className="mo-calendar-foot-tool">
		                共计打卡<span className="mo-calendar-foot-tool-highlight">{self.state.checkin.length}</span>天
		            </span>
		        </div>
			</div>
        )
    }
}


$(function () {
	$('.mo-calendar').each(function () {
        let $this = $(this)
        let data = $this.data()

        render(<Calendar {...data} />, $this.get(0))
    })
})
