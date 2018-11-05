import React, { Component } from 'react'
import { Label, Input } from 'bloomer'

class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      workStartTime: '',
      workEndTime: '',
      workDays: ''
    }
  }
  render () {
    return (<div>
      <form>
        <Label>Enter Your Work Schedule</Label>
        <Input placeholder='What time of day do you leave for work' />
        <Input placeholder='What time of day do you get home from work' />
        <div className='weekDay-selector'>
          <Input value='Sunday' type='checkbox' id='weekDay-sun' class='weekday' />
          <Label for='weekDay-sun'>S</Label>
          <Input value='Monday' type='checkbox' id='weekDay-mon' class='weekday' />
          <Label for='weekDay-mon'>M</Label>
          <Input value='Tuesday' type='checkbox' id='weekDay-tue' class='weekday' />
          <Label for='weekDay-tue'>T</Label>
          <Input value='Wednesday' type='checkbox' id='weekDay-wed' class='weekday' />
          <Label for='weekDay-wed'>W</Label>
          <Input value='Thursday' type='checkbox' id='weekDay-thu' class='weekday' />
          <Label for='weekDay-thur'>T</Label>
          <Input value='Friday' type='checkbox' id='weekDay-fri' class='weekday' />
          <Label for='weekDay-fri'>F</Label>
          <Input value='Saturday' type='checkbox' id='weekDay-sat' class='weekday' />
          <Label for='weekDay-sat'>S</Label>
        </div>
      </form>
    </div>)
  }
}
export default Profile
