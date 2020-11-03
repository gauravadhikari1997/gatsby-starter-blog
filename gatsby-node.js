const path = require("path")

// we are creating nodes to get slug for local markdowns

// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions
//   // Transform the new node here and create a new node or
//   // create a new node field.

//   if (node.internal.type === "MarkdownRemark") {
//     const slug = path.basename(node.fileAbsolutePath, ".md")
//     createNodeField({
//       name: "slug",
//       node,
//       value: slug,
//     })
//   }
// }

// module.exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const blogPostTemplate = path.resolve(`src/templates/blog.js`)
//   // Query for markdown nodes to use in creating pages.
//   // You can query for whatever data you want to create pages for e.g.
//   // products, portfolio items, landing pages, etc.
//   // Variables can be added as the second function parameter
//   const result = await graphql(`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)

//   // Create blog post pages.
//   result.data.allMarkdownRemark.edges.forEach(edge => {
//     createPage({
//       // Path for this page — required
//       path: `/blog/${edge.node.fields.slug}`,
//       component: blogPostTemplate,
//       context: {
//         slug: edge.node.fields.slug,
//         // Add optional context data to be inserted
//         // as props into the page component..
//         //
//         // The context data can also be used as
//         // arguments to the page GraphQL query.
//         //
//         // The page "path" is always available as a GraphQL
//         // argument.
//       },
//     })
//   })
// }

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog.js`)
  const result = await graphql(`
    query {
      allWpPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  // Create wordpress blog post pages.
  result.data.allWpPost.edges.forEach(edge => {
    createPage({
      // Path for this page — required
      path: `/${edge.node.slug}`,
      component: blogPostTemplate,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
