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
