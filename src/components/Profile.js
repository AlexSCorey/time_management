import React, { Component } from 'react'
import { Label, Input, Button } from 'bloomer'
import moment from 'moment'

class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      days: [
        { id: 0,
          day: 'Sunday',
          'active': false,
          start: moment(new Date()).startOf('min').format('h:mm a'),
          end: moment(new Date()).startOf('min').format('h:mm a') },
        { id: 1,
          day: 'Monday',
          active: false,
          start: moment(new Date()).startOf('min').format('h:mm a'),
          end: moment(new Date()).startOf('min').format('h:mm a') },
        { id: 2,
          day: 'Tuesday',
          active: false,
          start: moment(new Date()).startOf('min').format('h:mm a'),
          end: moment(new Date()).startOf('min').format('h:mm a') },
        { id: 3,
          day: 'Wednesday',
          active: false,
          start: moment(new Date()).startOf('min').format('h:mm a'),
          end: moment(new Date()).startOf('min').format('h:mm a') },
        { id: 4,
          day: 'Thursday',
          active: false,
          start: moment(new Date()).startOf('min').format('h:mm a'),
          end: moment(new Date()).startOf('min').format('h:mm a') },
        { id: 5,
          day: 'Friday',
          active: false,
          start: moment(new Date()).startOf('min').format('h:mm a'),
          end: moment(new Date()).startOf('min').format('h:mm a') },
        { id: 6,
          day: 'Saturday',
          active: false,
          start: moment(new Date()).startOf('min').format('h:mm a'),
          end: moment(new Date()).startOf('min').format('h:mm a') }
      ]
    }
  }
  activateDay (e, daySelected, dayID) {
    e.preventDefault()
    let { days } = this.state
    let foundDay = days.find(day => day.day === daySelected)
    foundDay['active'] = !foundDay.active
    let otherDays = days.filter(day => day.day !== daySelected)
    otherDays.splice(dayID, 0, foundDay)
    this.setState({ days: otherDays })
  }

  render () {
    return (
      <div className='container'>
        <form>
          <h1>Add your work schedule for the week</h1>
          <h2>Remember to consider travel time to and from work</h2>
          <div>
            {this.state.days.map((day) =>
              <div className='proBtnCtnr' key={day.day}>
                <Button value={`${day.day}`} type='button' id='weekDay-mon' className='weekday' isColor={day.active ? 'success' : ''} onClick={e => { this.activateDay(e, day.day, day.id) }}>{day.day}</Button>
                <div className={day.active === true ? 'active' : 'unactive'}>
                  <input placeholder={day.start} />
                  <input placeholder={day.end} />
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    )
  }
}
export default Profile
