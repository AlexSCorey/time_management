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
        <div />
        <Input placeholder='What time of day do you leave for work' />
        <div />
        <Input placeholder='What time of day do you get home from work' />
        <div className='weekDay-selector'>
          <Input value='Sunday' type='checkbox' id='weekDay-sun' className='weekday' />
          <Label htmlFor='weekDay-sun'>S</Label>
          <Input value='Monday' type='checkbox' id='weekDay-mon' className='weekday' />
          <Label htmlFor='weekDay-mon'>M</Label>
          <Input value='Tuesday' type='checkbox' id='weekDay-tue' className='weekday' />
          <Label htmlFor='weekDay-tue'>T</Label>
          <Input value='Wednesday' type='checkbox' id='weekDay-wed' className='weekday' />
          <Label htmlFor='weekDay-wed'>W</Label>
          <Input value='Thursday' type='checkbox' id='weekDay-thu' className='weekday' />
          <Label htmlFor='weekDay-thur'>T</Label>
          <Input value='Friday' type='checkbox' id='weekDay-fri' className='weekday' />
          <Label htmlFor='weekDay-fri'>F</Label>
          <Input value='Saturday' type='checkbox' id='weekDay-sat' className='weekday' />
          <Label htmlFor='weekDay-sat'>S</Label>
        </div>
      </form>
    </div>)
  }
}
export default Profile
