import React from "react"
import Head from "../components/head"

import Layout from "../components/layout"

function ContactPage() {
  return (
    <Layout heading="Contact">
      <Head title="Contact" />
      <p>
        I am available at{" "}
        <a href="mailto:gaurav.adhikari1997@gmail.com">
          gaurav.adhikari1997@gmail.com
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
