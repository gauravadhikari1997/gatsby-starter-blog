import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import layoutStyles from "./footer.module.scss"

function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={layoutStyles.footer}>
      <p>Created by {data.site.siteMetadata.author} &#169;2020</p>
    </footer>
  )
}

export default Footer
