import $ from 'jquery';
import Calendar from 'rc-calendar';
import 'rc-calendar/assets/index.css';
import DatePicker from 'rc-calendar/lib/Picker';
import MonthCalendar from 'rc-calendar/lib/MonthCalendar';
import CalendarLocale from 'rc-calendar/lib/locale/zh_CN';
import React from 'react';
import ReactDOM from 'react-dom';
import GregorianCalendar from "gregorian-calendar"
import DateTimeFormat from 'gregorian-calendar-format';
import zhCN from 'gregorian-calendar/lib/locale/zh_CN';
const dateFormatter = new DateTimeFormat('yyyy-MM-dd');
const formatter = new DateTimeFormat('yyyy-MM-dd HH:mm:ss');
class Time extends React.Component {
    static defaultProps = {
        timeHasDate: true
    }
    state = {
        value: this.props.timeValue.replace(/\s/g,'')
    }
    change (data) {
        let value = dateFormatter.format(data)
        this.setState({
            value: value
        })
    }
    disabledDate (current) {
        if (this.props.timeMin) {
            if (current.time < new Date(this.props.timeMin).getTime()) {
                return true
            }
        }
        if (this.props.timeMax) {
            if (current.time > new Date(this.props.timeMax).getTime()) {
                return true
            }
        }
        return false
    }
    render () {
        let self = this
        let calendar
        let currentDate = new GregorianCalendar(zhCN)
        if (this.state.value) {
            currentDate.setTime(new Date(this.state.value))
        }
        else {
            currentDate = false
        }
        // data-time-hasTime="true"
        if (this.props.timeHasDate) {
            // data-time-hasDate="ture"
            // data-time-hasTime="true"
            if (this.props.timeHastime) {

            }
            // data-time-hasDate="ture"
            // data-time-hasTime="false"
            else {
                calendar = (<Calendar
                    formatter={dateFormatter}
                    value={currentDate}
                    disabledDate={self.disabledDate.bind(this)} 
                    onChange={this.change.bind(this)}
                     />)
            }
        }
        // data-time-hasDate="false"
        // data-time-hasTime="true"
        else {

        }
        return (
            <DatePicker
                calendar={calendar}
             >
            {
               function () {
                   return (
                       <input className="mo-input" type="text" name={self.props.timeName} readOnly={true} value={self.state.value} />
                   )
               }
           }
            </DatePicker>
        )
    }
}
mo.time = function ($target) {
    $target.each(function () {
        let $this = $(this)
        $this.addClass('mo-time')
        let data = $this.data()
        ReactDOM.render(<Time {...data}  />, this)
    })
}
$(function () {
    mo.time($("[data-time-name]"))
})
