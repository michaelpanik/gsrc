import React from "react"

import '../scss/main.scss'

const Layout = ({ children }) => {
  return (
    <div className="container">
      {children}
    </div>
  )
}

export default Layout
