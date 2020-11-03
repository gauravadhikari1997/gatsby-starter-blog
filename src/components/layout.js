import React from "react"

import Footer from "./footer"
import Header from "./header"

import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

function Layout({ heading, children }) {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        <h1 className={layoutStyles.heading}>{heading}</h1>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
