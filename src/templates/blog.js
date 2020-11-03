import React from "react"
import { graphql } from "gatsby"

import blogStyles from "./blog.module.scss"
import Layout from "../components/layout"
import Head from "../components/head"

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

export const query = graphql`
  query($slug: String!) {
    wpPost(slug: { eq: $slug }) {
      date(formatString: "MMMM Do, YYYY")
      title
      content
    }
  }
`

function Blog(props) {
  return (
    <Layout heading={props.data.wpPost.title}>
      <Head title={props.data.wpPost.title} />
      <p>{props.data.wpPost.date}</p>
      <div
        className={blogStyles.blogContent}
        dangerouslySetInnerHTML={{ __html: props.data.wpPost.content }}
      />
    </Layout>
  )
}

export default Blog
