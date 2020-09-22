import styled, { css } from "styled-components";

import Grid from "@component/Grid";
import { ReactComponent as MenuToggle1 } from "@animation/menuToggle/1.svg";
import { ReactComponent as MenuToggle2 } from "@animation/menuToggle/2.svg";
import React from "react";
import SCL from "@asset/scl.svg";
import Text from "@component/Text";
import fadeScreen from "@helper/overlay";
import theme from "@/theme";

const breakpoint = theme.breakpoint;

export const NavLink = styled(Text.Sans)`
  font-size: 0.6rem;
  text-transform: uppercase;
  color: ${theme.color.forrest};
  font-weight: 800;
  padding: 0.6rem 0;
  display: flex;
  justify-content: flex-end;
`;

export const NavWrapper = styled(Grid)`
  z-index: 10;
  padding-top: 1.4rem !important;
  padding-bottom: 5.5rem !important;

  ${breakpoint("md")`
    padding-top: 2.2rem !important;
  `}

  display: grid;
  align-items: center;
  position: relative;
`;

export const A = styled.a`
  text-decoration: none;
`;

export const Logo = styled.a`
  grid-row: 1 / 2;
  grid-column: 1 / -1;
  display: block;
  margin: 0 auto;
  height: 85px;
  width: 133px;
  background-image: url(${SCL});
  background-size: contain;
  background-repeat: no-repeat;

  ${breakpoint("md")`
    ${({ large }) =>
      large
        ? `
      width: 398px;
      height: 238px;
    ` : `
      width: 146px;
      height: 98px;
    `}
    
  `}
`;

// Nav drop-down wrapper
// Note: we should replace these animations with styled-component keyframes objects
// then insert them using { }.

const ToggleWrapper = styled.span`
  min-width: 4rem;
  grid-row-start: 1;
  grid-column-start: 6;
  grid-column-end: 6;

  ${breakpoint("md")`
    grid-column-start: 13;
    grid-column-end: 13;
    width: 1.4rem;
    height: 1.4rem
  `};

  cursor: pointer;
  display: inline-block;
  height: 1rem;
  position: relative;
  width: 1rem;
  padding-bottom: 1rem;

  /* burger menu animation */

  @keyframes rotate_in_cw {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(45deg);
    }
  }
  @keyframes rotate_out_cw {
    0% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  @keyframes rotate_in_ccw {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-45deg);
    }
  }
  @keyframes rotate_out_ccw {
    0% {
      transform: rotate(-45deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  @keyframes draw_in {
    50% {
      stroke-dashoffset: 100%;
    }
    100% {
      stroke-dashoffset: 0%;
    }
  }
  @keyframes draw_out {
    50% {
      stroke-dashoffset: 0%;
    }
    100% {
      stroke-dashoffset: 100%;
    }
  }

  .svg-1 {
    animation: ${(props) =>
        props.status === "open" ? `rotate_in_cw` : `rotate_out_cw`}
      0.4s;
    animation-fill-mode: forwards;

    .line-1 {
      animation: ${(props) =>
          props.status === "open" ? `draw_out` : `draw_in`}
        0.4s;
      animation-fill-mode: forwards;
    }

    .line-3 {
      animation: ${(props) =>
          props.status === "open" ? `draw_out` : `draw_in`}
        0.4s;
      animation-fill-mode: forwards;
    }
  }

  .svg-2 {
    animation: ${(props) =>
        props.status === "open" ? `rotate_in_ccw` : `rotate_out_cw`}
      0.4s;
    animation-fill-mode: forwards;
    stroke-dashoffset: ${(props) => (props.status === "open" ? `0%` : `100%`)};
  }

  .svg-1 {
    .line-1,
    .line-3 {
      stroke-dashoffset: ${(props) =>
        props.status === "open" ? `0%` : `100%`};
    }

    .line-2 {
      stroke-dashoffset: ${(props) =>
        props.status === "open" ? `0%` : `100%`};
    }
  }

  /* nav drop-down links animation */

  opacity: 0.9;

  .home {
    transition: opacity 1.2s;
  }
  .about {
    transition: opacity 1s;
  }
  .podcasts {
    transition: opacity 0.8s;
  }
  .blogs {
    transition: opacity 0.6s;
  }
  .guides {
    transition: opacity 0.4s;
  }
  .events {
    transition: opacity 0.2s;
  }
  .story {
    transition: opacity 0s;
  }

  a {
    display: none;
  }

  ${(props) =>
    props.status === "open" &&
    css`
      &&& {
        a {
          display: initial;
        }

        .home {
          transition: opacity 0s;
        }

        .about {
          transition: opacity 0.2s;
        }

        .podcasts {
          transition: opacity 0.4s;
        }

        .blogs {
          transition: opacity 0.6s;
        }

        .guides {
          transition: opacity 0.8s;
        }

        .events {
          transition: opacity 1s;
        }

        .story {
          transition: opacity 1.2s;
        }
      }
    `}

  h1 {
    ${(props) =>
      props.status === "open"
        ? `
      opacity 1;`
        : `opacity 0;
    `}
  }

  svg {
    height: 100%;
    overflow: visible;
    width: 100%;
    position: absolute;
    top: 0px;
    left: 50px;

    path {
      stroke: #000;
      stroke-dasharray: 100%;
      stroke-linecap: round;
      stroke-miterlimit: 10;
      stroke-width: 20px;
    }
  }
`;

export const LinkWrapper = styled.div`
  padding-top: 2.5rem;
  min-width: 3rem;
`;

// Wrapper for the entire drop-down

export const MenuWrapper = styled.div`
  grid-row: 1 / 2;
  grid-column-start: 5;
  ${breakpoint("md")`grid-column-start: 12 `};
  align-items: right;
  justify-content: right;
`;

// drop-down

export const MenuToggle = () => {
  const [iconStatus, setIconStatus] = React.useState("default");

  const toggle = () => {
    iconStatus === "default" ? setIconStatus("open") : setIconStatus("default");

    fadeScreen();
  };

  return (
    <ToggleWrapper onClick={() => toggle()} status={iconStatus}>
      <MenuToggle1 className="svg-1" style={{ height: 25, width: 25 }} />
      <MenuToggle2 className="svg-2" style={{ height: 25, width: 25 }} />

      <LinkWrapper>
        <A href="/">
          <NavLink className="home">Home</NavLink>
        </A>
        <A href="/about">
          <NavLink className="about">About</NavLink>
        </A>
        <A href="/podcast">
          <NavLink className="podcasts">Podcast</NavLink>
        </A>
        <A href="/blog">
          <NavLink className="blogs">Blog</NavLink>
        </A>
        <A href="/guides">
          <NavLink className="guides">Guides</NavLink>
        </A>
        <A href="/events">
          <NavLink className="events">Events</NavLink>
        </A>
        <A href="/story">
          <NavLink className="story">Story</NavLink>
        </A>
      </LinkWrapper>
    </ToggleWrapper>
  );
};
