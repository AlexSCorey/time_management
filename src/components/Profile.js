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
            hour: undefined,
            min: undefined,
            AM_PM: undefined },
          end: { active: false,
            hour: undefined,
            min: undefined,
            AM_PM: undefined } },
        { id: 1,
          day: 'Monday',
          active: false,
          start: { active: false,
            hour: undefined,
            min: undefined,
            AM_PM: undefined },
          end: { active: false,
            hour: undefined,
            min: undefined,
            AM_PM: undefined } },
        { id: 2,
          day: 'Tuesday',
          active: false,
          start: { active: false,
            hour: undefined,
            min: undefined,
            AM_PM: undefined },
          end: { active: false,
            hour: undefined,
            min: undefined,
            AM_PM: undefined } },
        { id: 3,
          day: 'Wednesday',
          active: false,
          start: { active: false,
            hour: undefined,
            min: undefined,
            AM_PM: undefined },
          end: { active: false,
            hour: undefined,
            min: undefined,
            AM_PM: undefined } },
        { id: 4,
          day: 'Thursday',
          active: false,
          start: { active: false,
            hour: undefined,
            min: undefined,
            AM_PM: undefined },
          end: { active: false,
            hour: undefined,
            min: undefined,
            AM_PM: undefined } },
        { id: 5,
          day: 'Friday',
          active: false,
          start: { active: false,
            hour: undefined,
            min: undefined,
            AM_PM: undefined },
          end: { active: false,
            hour: undefined,
            min: undefined,
            AM_PM: undefined } },
        { id: 6,
          day: 'Saturday',
          active: false,
          start: { active: false,
            hour: undefined,
            min: undefined,
            AM_PM: undefined },
          end: { active: false,
            hour: undefined,
            min: undefined,
            AM_PM: undefined } }
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
  onSaveProfile (e) {
    e.preventDefault()
    let { days } = this.state
    let { onSaveProfile } = this.props
    onSaveProfile(days)
  }
  render () {
    return (
      <div className='container'>
        <form>
          <h1>Add your work schedule for the week</h1>
          <h2>Remember to consider travel time to and from work</h2>
          <div className='profileContainer'>
            {this.state.days.map((day) =>
              <div className='proBtnCtnr' key={day.day}>
                <div className='proBtnCtnrChild'>
                  <Button value={`${day.day}`} type='button' id='weekDay-mon' isSize='medium' className='weekday' isColor={day.active ? 'success' : ''} onClick={e => { this.activateDay(e, day.day, day.id) }}>{day.day}</Button>
                </div>
                <div className='proBtnCtnrChild'>
                  <div className={day.active === true ? 'active' : 'unactive'}>
                    <table className='startEndContainer'>
                      <thead>
                        <tr>
                          <th className='profileHeader fadeIn'>Start of the workday</th>
                        </tr>
                      </thead>
                      <tbody className='dropdownBody container'>
                        <tr>
                          <td>
                            <select className='dropdown fadeIn' value={day.start.hour} onChange={e => { this.setTime(e, day.day, day.id, 'hour', 'start') }}>
                              <option>--</option>
                              {hours.map((hour) =>
                                <option key={Math.random() * 12} value={hour}>{hour}</option>)}
                            </select>
                          </td>
                          <td>
                            <select className='dropdown fadeIn' value={day.start.min} onChange={e => { this.setTime(e, day.day, day.id, 'min', 'start') }}>
                              <option>--</option>
                              {mins.map((min) =>
                                <option key={Math.random() * 12}value={min}>{min}</option>)}
                            </select>
                          </td>
                          <td>
                            <select className='dropdown fadeIn' onChange={e => { this.setTime(e, day.day, day.id, 'AM_PM', 'start') }}>
                              <option>00</option>
                              <option value='AM'>AM</option>
                              <option value='PM'>PM</option>
                            </select>
                          </td>
                        </tr>
                      </tbody>
                      <thead>
                        <tr>
                          <th className='profileHeader fadeIn'>End of the workday</th>
                        </tr>
                      </thead>
                      <tbody className='dropdownBody container'>
                        <tr>
                          <td>
                            <select className='dropdown fadeIn' value={day.end.hour} onChange={e => { this.setTime(e, day.day, day.id, 'hour', 'end') }}>
                              <option>--</option>
                              {hours.map((hour) =>
                                <option key={Math.random() * 12} value={hour} >{hour}</option>)}
                            </select>
                          </td>
                          <td>
                            <select className='dropdown fadeIn' value={day.end.min} onChange={e => { this.setTime(e, day.day, day.id, 'min', 'end') }}>
                              <option>--</option>
                              {mins.map((min) =>
                                <option key={Math.random() * 12} value={min}>{min}</option>)}
                            </select>
                          </td>
                          <td>
                            <select className='dropdown fadeIn' onChange={e => { this.setTime(e, day.day, day.id, 'AM_PM', 'end') }}>
                              <option>00</option>
                              <option value='AM'>AM</option>
                              <option value='PM'>PM</option>
                            </select>
                          </td>
                          <td>
                            <button className='clearBtn fadeIn' type='reset'>clear</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Button type='submit' onClick={e => this.onSaveProfile(e)}>Save</Button>
        </form>
      </div>
    )
  }
}
export default Profile
