// Formats Prismic dates nicely.into a 'month day year' format,
var moment = require('moment');

export default function(stamp) {
   var date = moment(stamp, 'YYYY-MM-DD').format('MMMM DD YYYY')
  return date
}
