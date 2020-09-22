//Formats the data from prismic for a post
export default post => ({
  author: post.data.author[0].text || 'anonymous',
  date: post.data.date || 'unknown',
  image: post.data.image.url || '#',
  link: post.data.link.url || '#',
  name: post.data.name[0].text || 'untitled',
  purpose: post.data.purpose[0].text || ''
})
