import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }

      html
    }
  }
`

const Blog = props => {
  return <div>This is blog template</div>
}

export default Blog
