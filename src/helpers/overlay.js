//Used to create a white overlay when the menu toggle button is clicked
function createOverlay(color, opacity)
{
  let overlay = document.createElement('div')

  Object.assign(overlay.style, {
    'width': '100vw',
    'height': '100vh',
    'position': 'fixed',
    'z-index': 6,
    'background': color,
    'transition': 'opacity 1.2s ease-in',
    'opacity': opacity,
    'top': 0,
    'left': 0
  })

  overlay.id = 'app-overlay'
  document.body.append(overlay)
  document.body.style.overflowY = 'hidden'
  document.querySelector('.nav-logo').style.opacity = 1 - opacity
}


//linking the white overlay to the menu-toggle
function fadeScreen() {
  let overlay = document.querySelector('#app-overlay')

  // if already showning
  if (overlay)
  {
    if (document.body.style.overflowY === 'hidden') {
      overlay.style.opacity = 0
      document.body.style.overflowY = 'scroll'
      document.querySelector('.nav-logo').style.opacity = 1

      overlay.style.display = 'none'
    }

    else {
      overlay.style.display = 'block'
      overlay.style.opacity = 0.96
      document.body.style.overflowY = 'hidden'
      document.querySelector('.nav-logo').style.opacity = 0.1
    }
  }

  else
  {
    createOverlay('white', 0.9)
  }
}

export default fadeScreen
