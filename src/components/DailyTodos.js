import React, { Component } from 'react'
import moment from 'moment'
// import duration from 'moment-duration-format'

class DailyTodo extends Component {
  render () {
    // let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let { durations, todos } = this.props
    let total
    durations.reduce((acc, current) => {
      return (total = acc + current)
    })
    let workAndSleep = 960
    let occupiedTime = total + workAndSleep
    let occupiedTimePerc = Math.round(occupiedTime / 1440 * 100, 0)
    let freeTime = Math.round(1440 - occupiedTime)
    let freeTimePerc = Math.round(freeTime / 1440 * 100)
    if (durations) {
      return (
        <div>
          <div className='graphs'>
            <div className='graphContainer'>
              <div className='headerAndTime'>
                <div className='timeTitle'>Free Time</div>
                <div className='dailyTodoRow'>{moment.duration(freeTime, 'minutes').format('h:mm')}</div>
              </div>
              <div className='freeTime time'>
                <div className='freeTimePerc perc' style={{ height: `${freeTimePerc}%` }}>{freeTimePerc}%</div>
              </div>
            </div>
            <div className='graphContainer'>
              <div className='headerAndTime occupiedTime'>
                <div className='timeTitle'>Occupied Time</div>
                <div className='dailyTodoRow'>{moment.duration(occupiedTime, 'minutes').format('h:mm')}</div>
              </div>
              <div className='occupiedTime time'>
                <div className='occupiedTimePerc perc' style={{ height: `${occupiedTimePerc}%` }}>{occupiedTimePerc}%</div>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (<div>Loading</div>)
    }
  }
}

export default DailyTodo
