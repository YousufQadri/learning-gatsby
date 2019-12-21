const PATH = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    // console.log(JSON.stringify(node, undefined, 4))
    const slug = PATH.basename(node.fileAbsolutePath, ".md")
    console.log("@@@@@@@@", slug)
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemplate = PATH.resolve("./src/templates/blog.js")
  const res = await graphql(`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  console.log("@@@:", res.data)

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    // console.log(res.data.)
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
