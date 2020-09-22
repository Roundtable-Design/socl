import { createBreakpoint } from 'styled-components-breakpoint'

const breakpoints = {
  xs: 0,
  md: 800,
  lg: 1024
}

export default {
  breakpoint: createBreakpoint(breakpoints),
  color: {
    forrest: "#003c3b",
    light: "#868686",
    cloudgrey: "#f6f6f6",
    standard: "black",
    clear: "rgba(246, 246, 246, 0.4)"
  },
  font: {
    standard: "garamond-premier-pro",
    sans: "neue-haas-unica"
  },
  size: {
    small: '0.556rem',
    standard: '1rem',
    medium: '1.222rem',
    large: '1.333rem',
    larger: '1.667rem',
    title: '2.667rem'
  },
  view: {
    mobile: "500px",
    desktop: "1200px"
  }
}
