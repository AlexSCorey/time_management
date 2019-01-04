import React, { Component } from 'react'

class DailyTodo extends Component {
  durations (time) {
    let { weekDayTodo } = this.props
    weekDayTodo.durations.map((duration) => {
      console.log(time, 'time')
      if (duration === time) {
        return (
          <td>time</td>
        )
      } else {
        return (
          <td>no time</td>
        )
      }
    })
  }
  render () {
    let { weekDayTodo, time } = this.props
    // console.log(time, 'time')
    // weekDayTodo.durations.map((duration) => {
    // durations are causing the title to render several
    if (weekDayTodo.todo_start_time === time) {
      return (
        <div>
          <tr>
            {/* {console.log(time, 'time')} */}
            <td>{weekDayTodo.title}</td>
            {this.durations(this.props.time)}
          </tr>
        </div>
      )
    } else {
      return (
        <div>
          {/* <td>{weekDayTodo.title}</td> */}
        </div>
      )
    }
    // })
  }
}

export default DailyTodo
