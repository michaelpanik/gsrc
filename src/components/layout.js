import { Global } from "@emotion/react"
import React from "react"

import { reset } from "../styles/reset.styles"
import { typography } from "../styles/typography.styles"
import { layout } from "../styles/layout.styles"
import { home } from "../styles/home.styles"
import { custom } from "../styles/custom.styles"

const Layout = ({ children }) => {
  return (
    <>
      <Global styles={[reset, typography, layout, home, custom]} />
      {children}
    </>
  )
}

export default Layout
