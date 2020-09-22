//Formats data from prismic for events
export default event => ({
  author: event.data.organiser[0].text || 'anonymous',
  date: event.data.date || 'unknown',
  link: event.data.link.url || '#',
  name: event.data.name[0].text || 'untitled',
})
