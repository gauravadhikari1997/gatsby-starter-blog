import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

function IndexPage() {
  return (
    <Layout>
      <Head title="Home" />
      <h1 style={{ color: "#003" }}>Hello.</h1>
      <h2 style={{ color: "#003" }}>
        I'm Gaurav, React developer living in beautiful India.
      </h2>
      <p>This is a gatsby web app.</p>
      <h4>Concepts covered in this app:</h4>
      <ol>
        <li>Bootstrapped gatsby app using gatsby-cli</li>
        <li>Created Pages and used Link for routing</li>
        <li>Used couple of gatsby plugins like gatsby-plugin-sass</li>
        <li>Created header, footer, and layout and styled app</li>
        <li>Created blog page and added some markdown posts</li>
        <li>Modified gatsby-node.js to create pages for posts</li>
        <li>
          Implemented fetching of posts from a wordpress website using
          gatsby-source-wordpress
        </li>
      </ol>
    </Layout>
  )
}
export default IndexPage
