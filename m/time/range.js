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
import rczhCN from 'rc-calendar/lib/locale/zh_CN';

const dateFormatter = new DateTimeFormat('yyyy-MM-dd');
const formatter = new DateTimeFormat('yyyy-MM-dd HH:mm:ss');
class Time extends React.Component {
    static defaultProps = {
        timerangeHasDate: true,
        timerangeValue: '',
        timerangeWidth: 100
    }
    state = {
        value: this.props.timerangeValue.split('~')
    }
    change1 (data) {
        let date = dateFormatter.format(data)
        let value = this.state.value
        value[0] = date
        this.setState({
            value: value
        })
    }
    change2 (data) {
        let date = dateFormatter.format(data)
        let value = this.state.value
        value[1] = date
        this.setState({
            value: value
        })
    }
    disabledDate (current) {
        // if (this.props.timeMin) {
        //     if (current.time < new Date(this.props.timeMin).getTime()) {
        //         return true
        //     }
        // }
        // if (this.props.timeMax) {
        //     if (current.time > new Date(this.props.timeMax).getTime()) {
        //         return true
        //     }
        // }
        return false
    }
    render () {
        let self = this
        let calendar1
        let calendar2
        let currentDate1 = new GregorianCalendar(zhCN)
        let currentDate2 = new GregorianCalendar(zhCN)
        let value = self.state.value

        if (value.length === 2) {
            if (value[0]) {
                currentDate1.setTime(new Date(value[0]))
            }
            if (value[1]) {
                currentDate2.setTime(new Date(value[1]))
            }
        }
        else {
            currentDate1 = false
            currentDate2 = false
        }
        calendar1 = (<Calendar
            locale={rczhCN}
            formatter={dateFormatter}
            value={currentDate1}
            disabledDate={self.disabledDate.bind(this)}
            onChange={this.change1.bind(this)}
            placement={'bottomLeft'}
             />)
         calendar2 = (<Calendar
             locale={rczhCN}
             formatter={dateFormatter}
             value={currentDate2}
             disabledDate={self.disabledDate.bind(this)}
             onChange={this.change2.bind(this)}
             placement={'bottomLeft'}
              />)
        let inputValue = self.state.value.join('~')
        if (inputValue.length !== 21) {
            inputValue = ''
        }
        return (
            <span className="mo-timerange">
            <DatePicker
                calendar={calendar1}
             >
            {
               function () {
                   return (
                       <input className="mo-input mo-timerange-first" placeholder="开始时间" style={{width: self.props.timerangeWidth}}  type="text"  readOnly={true} value={self.state.value[0]} />
                   )
               }
           }
            </DatePicker>
            <DatePicker
                calendar={calendar2}
             >
            {
               function () {
                   return (
                       <input className="mo-input mo-timerange-last" placeholder="结束时间" style={{width: self.props.timerangeWidth}}  type="text" readOnly={true} value={self.state.value[1]} />
                   )
               }
           }
            </DatePicker>
            <input type="hidden" name={self.props.timerangeName} value={inputValue} />
            </span>
        )
    }
}
mo.timerange = function ($target) {
    $target.each(function () {
        let $this = $(this)
        $this.addClass('mo-timerange').addClass('mo-loading--off')
        let data = $this.data()
        ReactDOM.render(<Time {...data}  />, this)
    })
}
$(function () {
    mo.timerange($("[data-timerange-name]"))
})
