//import from package.json
var moment = require("moment");

//Returns true if date is older than the current date
function compareDate(item) {
  let currentDate = moment().format("YYYY-MM-DD");
  let itemDate = moment(item, "MMMM DD YYYY").format("YYYY-MM-DD");
  return itemDate < currentDate;
}

//Sorts a list of dates and outputs them in an array contain two arrays, one of past and one of future dates
function sortEvents(events) {
  var upcoming = [];
  var previous = [];
  const sorted = events.sort((a, b) => new Date(b.date) - new Date(a.date));
  sorted.forEach((event) => {
    const { date } = event;

    console.log(Date.now(), new Date(date), Date.now() < new Date(date));

    if (Date.now() < new Date(date)) upcoming.push(event);
    else previous.push(event);
  });

  return [upcoming, previous];
}
export default sortEvents;
