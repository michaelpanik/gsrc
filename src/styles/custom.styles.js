import { css } from "@emotion/react"

export const custom = css`
  body {
    background-image: linear-gradient(#fff, lightblue);
  }

  .box {
    border: 5px solid black;
    box-shadow: 5px 5px 0 black;
    margin-bottom: 2em;
    padding: 1em;

    *:first-child {
      margin-top: 0;
    }

    &:hover {
      color: blue;
      border-color: blue;
      box-shadow: 5px 5px 0 blue;
    }
  }

  .music-embed {
    position: fixed;
    top: 2em;
    right: 2em;
    max-width: 400px;
    background: linear-gradient(lightblue, white);
    padding: 2em;
  }

  @media (max-width: 1176px) {
    .music-embed {
      position: static;
    }
  }
`
