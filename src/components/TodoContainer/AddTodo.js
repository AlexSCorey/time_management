import React, { Component } from 'react'
import { Label, Input, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownContent, DropdownItem } from 'bloomer'

class AddTodo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      duration: undefined,
      dropDownHour: false,
      dropDownMin: false
    }
    this.onNewTodo = this.onNewTodo.bind(this)
    this.onSaveTodo = this.onSaveTodo.bind(this)
  }

  onNewTodo (event) {
    this.setState({ value: event.target.value })
  }
  onSaveTodo (event) {
    event.preventDefault()
    let { onSaveTodo, onAddDuration } = this.props
    let { value, duration } = this.state
    onSaveTodo(value, duration)
    onAddDuration(duration)
    this.setState({ value: '',
      duration: undefined })
  }

  activateDropdown (e, field) {
    e.preventDefault()
    if (field === 'hour') {
      this.setState(state => ({ dropDownHour: !state.dropDownHour }))
    } else {
      this.setState(state => ({ dropDownMin: !state.dropDownMin }))
    }
  }
  changeHour (e, value) {
    e.preventDefault()
    let time = value * 60
    if (value === 0) {
      this.setState(state => ({ duration: undefined,
        dropDownHour: !state.dropDownHour }))
    } else if (this.state.duration) {
      this.setState(state => ({ duration: state.duration + time,
        dropDwonHour: !state.dropDownHour }))
    } else {
      this.setState(state => ({ duration: time,
        dropDownHour: !state.dropDownHour }))
    }
  }
  changeMin (e, value) {
    e.preventDefault()
    if (this.state.duration) {
      this.setState(state => ({ duration: state.duration + value,
        dropDownMin: !state.dropDownMin }))
    } else {
      this.setState(state => ({ duration: value,
        dropDownMin: !state.dropDownMin }))
    }
  }
  render () {
    let { duration } = this.state
    return (
      <div className='container addTodo'>
        <Label className='title'>Add new To do item</Label>
        <Input value={this.state.value} onChange={this.onNewTodo} className='input' />
        <Dropdown isActive={this.state.dropDownHour} className='btn' >
          <DropdownTrigger>
            <Button aria-haspopup='true' isAlign='left' value={duration ? duration / 60 : 'Hour'} aria-controls='dropdown-menu' onClick={e => this.activateDropdown(e, 'hour')} className='hourBtn dropDownBtn'> <i className='fas fa-angle-down' />{duration ? duration / 60 : 'Hour'}
            </Button>
          </DropdownTrigger>
          <DropdownMenu >
            <DropdownContent >
              <DropdownItem className='dropDownItem' value={0} onClick={e => { this.changeHour(e, 0) }}>0 Hours</DropdownItem>
              <DropdownItem className='dropDownItem' value={1} onClick={e => { this.changeHour(e, 1) }}>1 Hour</DropdownItem>
              <DropdownItem className='dropDownItem' onClick={e => { this.changeHour(e, 2) }}>2 Hours</DropdownItem>
              <DropdownItem className='dropDownItem' onClick={e => { this.changeHour(e, 3) }}>3 Hours</DropdownItem>
              <DropdownItem className='dropDownItem' onClick={e => { this.changeHour(e, 4) }}>4 Hours</DropdownItem>
              <DropdownItem className='dropDownItem' onClick={e => { this.changeHour(e, 5) }}>5 Hours</DropdownItem>
              <DropdownItem className='dropDownItem' onClick={e => { this.changeHour(e, 6) }}>6 Hours</DropdownItem>
            </DropdownContent>
          </DropdownMenu>
        </Dropdown>
        <Dropdown isActive={this.state.dropDownMin} className='btn'>
          <DropdownTrigger>
            <Button aria-haspopup='true' value='min' aria-controls='dropdown-menu' onClick={e => this.activateDropdown(e)} className='minBtn dropDownBtn'>
              {this.state.min} <i className='fas fa-angle-down' />Minutes
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownContent>
              <DropdownItem className='dropDownItem' onClick={e => { this.changeMin(e, 15) }}>15 Mins</DropdownItem>
              <DropdownItem className='dropDownItem' onClick={e => { this.changeMin(e, 30) }}>30 Mins</DropdownItem>
              <DropdownItem className='dropDownItem' onClick={e => { this.changeMin(e, 45) }}>45 Mins</DropdownItem>
            </DropdownContent>
          </DropdownMenu>
        </Dropdown>
        <Button type='submit' onClick={this.onSaveTodo} className='saveBtn'>Save</Button>
      </div>
    )
  }
}
export default AddTodo
