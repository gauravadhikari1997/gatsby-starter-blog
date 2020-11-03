import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

function AboutPage() {
  return (
    <Layout heading="About">
      <Head title="About" />
      <p>I craft, create, and build modern web apps.</p>
      <p>
        Let's make something together <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
