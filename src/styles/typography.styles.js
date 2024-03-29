import { css } from "@emotion/react"

export const typography = css`
  body {
    font-family: "Georgia", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 20px;
    line-height: 1.25em;
    letter-spacing: 0.01em;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: bold;
    font-style: italic;
    letter-spacing: -0.05em;
    line-height: 1.5em;
    margin: 0.8em 0 0.35em 0;

    &:first-child {
      margin-top: 0;
    }
  }

  h1 {
    font-size: 5em;
    color: #fff;
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000,
      2px 2px 0 #000, 6px 6px 0 #000;
  }

  h2 {
    font-size: 4rem;
  }

  h3 {
    font-size: 3rem;
  }

  h4 {
    font-size: 2rem;
  }

  h5 {
    font-size: 1rem;
  }

  p,
  ul,
  ol {
    margin-bottom: 1em;
  }

  ul,
  ol {
    list-style: default;
  }

  a {
    border-bottom: 2px solid;

    &:hover {
      text-decoration: none;
      color: orangered;
    }
  }
`
