import React, { Component } from 'react'
import { Label, Input, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownContent, DropdownItem } from 'bloomer'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'

class AddTodo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      startDate: new Date(),
      durationHours: 0,
      durationMinutes: 0
    }
    this.onNewTodo = this.onNewTodo.bind(this)
    this.onSaveTodo = this.onSaveTodo.bind(this)
  }

  onNewTodo (event) {
    this.setState({ value: event.target.value })
  }
  onSaveTodo (event) {
    event.preventDefault()
    let { onSaveTodo } = this.props
    let { value, startDate, duration } = this.state
    onSaveTodo(value, startDate, duration)
    this.setState({ value: '',
      startDate: new Date(),
      endDate: duration })
  }
  changeStartDate (date) {
    this.setState({ startDate: date })
  }
  activateDropdown (e, field) {
    e.preventDefault()
    if (field === 'hour') {
      this.setState(state => ({ dropDownHour: !state.dropDownHour }))
    } else {
      this.setState(state => ({ dropDownMin: !state.dropDownMin }))
    }
  }
  setStateOfHour (e, value) {
    e.preventDefault()
    this.setState({ durationHours: value })
    this.setDuration()
    this.activateDropdown(e, 'hour')
  }
  setStateOfMinute (e, value) {
    e.preventDefault()
    this.setDuration()
    this.setState({ durationMinutes: value })
    this.activateDropdown(e, 'minute')
  }
  setDuration () {
    let { durationHours, durationMinutes } = this.state
    let duration = (durationHours * 60) + durationMinutes
    this.setState({ duration: duration })
  }
  durationsHoursButtonText () {
    let { durationHours } = this.state
    return (
      durationHours === undefined ? 'Hours' : this.pluralize('Hour', durationHours)
    )
  }
  durationMinutesButtonText () {
    let { durationMinutes } = this.state
    console.log(durationMinutes, 'minutes')
    return (
      durationMinutes === undefined ? 'Minutes' : this.pluralize('Minute', durationMinutes)
    )
  }
  pluralize (text, integer) {
    return (integer !== 1
      ? `${integer} ${text}s` : `${integer} ${text}`)
  }
  render () {
    let { startDate, duration, hour } = this.state
    return (
      <div className='container addTodo'>
        {console.log(hour, 'hour in render')}
        <Label className='title'>Add new To do item</Label>
        <Input value={this.state.value} onChange={this.onNewTodo} className='input' />
        <div className='datePickerContainer'>
          <div className='datePickerBlock'>
            <div>Start</div>
            <DatePicker className='datePicker addTodoBtn'
              selected={startDate}
              value={startDate}
              onChange={e => { this.changeStartDate(e) }}
              withPortal
              useShortMonthInDropdown
              showTimeSelect
              changeEndDate
              timeFormat='h:mma'
              timeIntervals={15}
              dateFormat='MMMM d, yyyy h:mm aa'
              timeCaption='time' />
          </div>
          <div className='datePickerBlock'>
            <Dropdown isActive={this.state.dropDownHour} className='btn' >
              <DropdownTrigger>
                {/* {this.checkPluralization(hour, duration)} */}
                <Button aria-haspopup='true' isAlign='left' value={duration ? duration / 60 : 'Hour'} aria-controls='dropdown-menu' onClick={e => this.activateDropdown(e, 'hour')} className='hourBtn dropDownBtn'> { this.durationsHoursButtonText() }
                </Button>
              </DropdownTrigger>
              <DropdownMenu >
                <DropdownContent >
                  <DropdownItem className='dropDownItem' onClick={e => { this.setStateOfHour(e, 0) }}>0 Hours</DropdownItem>
                  <DropdownItem className='dropDownItem' onClick={e => { this.setStateOfHour(e, 1) }}>1 Hour</DropdownItem>
                  <DropdownItem className='dropDownItem' onClick={e => { this.setStateOfHour(e, 2) }}>2 Hours</DropdownItem>
                  <DropdownItem className='dropDownItem' onClick={e => { this.setStateOfHour(e, 3) }}>3 Hours</DropdownItem>
                  <DropdownItem className='dropDownItem' onClick={e => { this.setStateOfHour(e, 4) }}>4 Hours</DropdownItem>
                  <DropdownItem className='dropDownItem' onClick={e => { this.setStateOfHour(e, 5) }}>5 Hours</DropdownItem>
                  <DropdownItem className='dropDownItem' onClick={e => { this.setStateOfHour(e, 6) }}>6 Hours</DropdownItem>
                </DropdownContent>
              </DropdownMenu>
            </Dropdown>
            <Dropdown isActive={this.state.dropDownMin} className='btn'>
              <DropdownTrigger>
                <Button aria-haspopup='true' value='min' aria-controls='dropdown-menu' onClick={e => this.activateDropdown(e)} className='minBtn dropDownBtn'>
                  {this.durationMinutesButtonText()}
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownContent>
                  <DropdownItem className='dropDownItem' onClick={e => { this.setStateOfMinute(e, 0) }}>00 Mins</DropdownItem>
                  <DropdownItem className='dropDownItem' onClick={e => { this.setStateOfMinute(e, 15) }}>15 Mins</DropdownItem>
                  <DropdownItem className='dropDownItem' onClick={e => { this.setStateOfMinute(e, 30) }}>30 Mins</DropdownItem>
                  <DropdownItem className='dropDownItem' onClick={e => { this.setStateOfMinute(e, 45) }}>45 Mins</DropdownItem>
                </DropdownContent>
              </DropdownMenu>
            </Dropdown>
          </div>
          <Button type='submit' onClick={this.onSaveTodo} className='saveBtn addTodoBtn'>Save</Button>
        </div>
      </div>
    )
  }
}
export default AddTodo
