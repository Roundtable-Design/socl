
//import from package.json
var moment = require('moment');

//Returns true if date is older than the current date
function compareDate(item) {
  let currentDate = moment().format('YYYY-MM-DD')
  let itemDate = moment(item, 'MMMM DD YYYY').format('YYYY-MM-DD')
  return (itemDate < currentDate);
}

//Sorts a list of dates and outputs them in an array contain two arrays, one of past and one of future dates
function sortDate(array) {
  var upcomingEvents = [];
  var pastEvents = [];
  array.sort((a, b) => moment(a.date).isAfter(b.date) ? -1 : 1)
  array.map((values, index) => {
    if (compareDate(array[index].date) == false) {
      upcomingEvents.push(array[index])
    } else {
      pastEvents.push(array[index])
    }
  })

  return [upcomingEvents, pastEvents]
}
export default sortDate
