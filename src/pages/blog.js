import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"

function BlogPost() {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             date
  //           }
  //           html
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  const data = useStaticQuery(graphql`
    query {
      allWpPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            title
            # date
            # date( fromNow: true)
            # check on momentjs doc
            date(formatString: "MMMM Do, YYYY")
            slug
          }
        }
      }
    }
  `)

  return (
    <Layout heading="Blog">
      <Head title="Blog" />
      <ol className={blogStyles.posts}>
        {data &&
          data.allWpPost.edges.map((post, index) => (
            <li className={blogStyles.post} key={index}>
              <Link to={`/${post.node.slug}`}>
                <h2>{post.node.title}</h2>
                <p>{post.node.date}</p>
              </Link>
            </li>
          ))}
      </ol>
    </Layout>
  )
}

export default BlogPost
