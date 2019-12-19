import React from "react"
import { graphql, useStaticQuery } from "gatsby"

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
      <h1>{data.site.siteMetadata.title}</h1>
    </div>
  )
}
