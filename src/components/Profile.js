import React, { Component } from 'react'
import { Button } from 'bloomer'
// import moment from 'moment'
const hours = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
const mins = ['00', '15', '30', '45']
class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      days: [
        { id: 0,
          day: 'Sunday',
          active: false,
          start: { active: false,
            hour: 1,
            min: '00',
            AM_PM: 'AM' },
          end: { active: false,
            hour: '',
            min: '',
            AM_PM: 'AM' } },
        { id: 1,
          day: 'Monday',
          active: false,
          start: { hour: 1,
            min: '00',
            AM_PM: 'AM' },
          end: { hour: '',
            min: '',
            AM_PM: 'AM' } },
        { id: 2,
          day: 'Tuesday',
          active: false,
          start: { hour: 1,
            min: '00',
            AM_PM: 'AM' },
          end: { hour: '',
            min: '',
            AM_PM: 'AM' } },
        { id: 3,
          day: 'Wednesday',
          active: false,
          start: { hour: 1,
            min: '00',
            AM_PM: 'AM' },
          end: { hour: '',
            min: '',
            AM_PM: 'AM' } },
        { id: 4,
          day: 'Thursday',
          active: false,
          start: { hour: 1,
            min: '00',
            AM_PM: 'AM' },
          end: { hour: '',
            min: '',
            AM_PM: 'AM' } },
        { id: 5,
          day: 'Friday',
          active: false,
          start: { hour: 1,
            min: '00',
            AM_PM: 'AM' },
          end: { hour: '',
            min: '',
            AM_PM: 'AM' } },
        { id: 6,
          day: 'Saturday',
          active: false,
          start: { hour: 1,
            min: '00',
            AM_PM: 'AM' },
          end: { hour: '',
            min: '',
            AM_PM: 'AM' } }
      ]
    }
  }
  activateTime (e, daySelected, dayID, active, startEnd) {
    e.preventDefault()
    let { days } = this.state
    let foundDay = days.find(day => day.day === daySelected)
    foundDay[`${startEnd}`][`${active}`] = !foundDay[`${startEnd}`][`${active}`]
    let otherDays = days.filter(day => day.day !== daySelected)
    otherDays.splice(dayID, 0, foundDay)

    this.setState({ days: otherDays })
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
  setTime (e, daySelected, dayID, type, startEnd) {
    e.preventDefault()
    let { days } = this.state
    let foundDay = days.find(day => day.day === daySelected)
    foundDay[`${startEnd}`][`${type}`] = e.target.value

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
                  <table>
                    <thead>
                      <tr>
                        <th>Start of the workday</th>
                      </tr>
                    </thead>
                    <tbody className='dropdownBody container'>
                      <tr>
                        <td>
                          <select className='dropdown' onChange={e => { this.setTime(e, day.day, day.id, 'hour', 'start') }}>
                            {hours.map((hour) =>
                              <option key={Math.random() * 12} value={hour} >{hour}</option>)}
                          </select>
                        </td>
                        <td>
                          <select className='dropdown' onChange={e => { this.setTime(e, day.day, day.id, 'min', 'start') }}>
                            {mins.map((min) =>
                              <option key={Math.random() * 12}value={min}>{min}</option>)}
                          </select>
                        </td>
                        <td>
                          <select className='dropdown' onChange={e => { this.setTime(e, day.day, day.id, 'AM_PM', 'start') }}>
                            <option value='AM'>AM</option>
                            <option value='PM'>PM</option>
                          </select>
                        </td>
                      </tr>
                    </tbody>
                    <thead>
                      <tr>
                        <th>End of the workday</th>
                      </tr>
                    </thead>
                    <tbody className='dropdownBody container'>
                      <tr>
                        <td>
                          <select className='dropdown' onChange={e => { this.setTime(e, day.day, day.id, 'hour', 'end') }}>
                            {hours.map((hour) =>
                              <option key={Math.random() * 12} value={hour} >{hour}</option>)}
                          </select>
                        </td>
                        <td>
                          <select className='dropdown' onChange={e => { this.setTime(e, day.day, day.id, 'min', 'end') }}>
                            {mins.map((min) =>
                              <option key={Math.random() * 12} value={min}>{min}</option>)}
                          </select>
                        </td>
                        <td>
                          <select className='dropdown' onChange={e => { this.setTime(e, day.day, day.id, 'AM_PM', 'end') }}>
                            <option value='AM'>AM</option>
                            <option value='PM'>PM</option>
                          </select>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
