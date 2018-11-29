import React, { Component } from 'react'
import { Button } from 'bloomer'
import moment from 'moment'

class WeeklyDateRange extends Component {
  onGetLastWeekTodos (e, currentWeek) {
    // e.preventDevault()
    this.props.onGetLastWeekTodos(currentWeek)
  }
  onGetNextWeekTodos (e, currentWeek) {
    // e.preventDevault()
    this.props.onGetNextWeekTodos(currentWeek)
  }
  render () {
    let {
      // onGetNextWeekTodos, onGetLastWeekTodos,
      currentWeek } = this.props
    return (<div className='changeWeekButton'>
      <Button onClick={e => this.onGetLastWeekTodos(e, currentWeek)}>Last Week</Button>
      <div>{`${currentWeek} to ${moment(currentWeek).endOf('week').format('MM-DD-YYYY')}`}</div>
      <Button onClick={e => this.onGetNextWeekTodos(e, currentWeek)}>Next Week</Button>
    </div>)
  }
}
export default WeeklyDateRange
