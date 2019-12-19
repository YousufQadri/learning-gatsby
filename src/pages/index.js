import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Blog from "./blog/blog"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  console.log(data.site.siteMetadata.title)
  return (
    <div>
      <h3>{data.site.siteMetadata.title}</h3>
      <h1>BLOGS</h1>
      <Blog />
    </div>
  )
}
