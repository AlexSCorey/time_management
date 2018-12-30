import React, { Component } from 'react'

class DailyTodo extends Component {
  render () {
    let { weekDayTodo, time } = this.props
    return (
      <div>
        {weekDayTodo.durations.map((duration) => {
          //durations are causing the title to render several times
          if (weekDayTodo.todo_start_time === time) {
            return (
              <tr>
                {/* {console.log(weekDayTodo.title)} */}
                <td>{weekDayTodo.title}</td>
              </tr>
            )
          } else if (duration === time) {
            return (
              <tr>
                <td>{time}</td>
              </tr>
            )
          } else {
            return (<div />)
          }
        })}
      </div>
    )
  }
}
export default DailyTodo
