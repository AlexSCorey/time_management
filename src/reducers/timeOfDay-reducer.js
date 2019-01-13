import moment from 'moment'

let cells = []
let hours = ['00', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']

hours.map((hour) => {
  let mins = ['00', '15', '30', '45']
  mins.map((min) => {
    let startTime = moment().hour(hour).minute(min)
    let endTime = moment().hour(hour).minute(min).add(15, 'minute')

    cells.push({
      'startTime': startTime,
      'endTime': endTime
    })

    return cells
  })
})
export default function timeOfDayReducer (state = cells) {
  return state
}
