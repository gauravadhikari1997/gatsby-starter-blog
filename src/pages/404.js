import { Link } from "gatsby"
import React from "react"
import Head from "../components/head"

import Layout from "../components/layout"

function NotFound() {
  return (
    <Layout heading="Page not found">
      <Head title="Not Found" />
      <p>
        Go to <Link to="/">home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
