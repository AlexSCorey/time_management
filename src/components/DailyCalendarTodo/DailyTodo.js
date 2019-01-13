import React, { Component } from 'react'

import Durations from './Durations'

class DailyTodo extends Component {
  render () {
    let { weekDayTodo, timeOfDay, startTime } = this.props
    console.log(this.props, 'props')
    console.log(startTime, 'startTime')
    return (
      timeOfDay.map((time) => {
        if (startTime === time) {
          return (
            <React.Fragment>
              <td>{weekDayTodo}</td>
            </React.Fragment>
          )
        }
      })
    )
  }
}

export default DailyTodo
