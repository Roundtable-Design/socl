// extract the domain name from a URL.

export default url => {
  let anchor = document.createElement('a')
  anchor.href = url
  let domain = anchor.hostname
  return domain
}
