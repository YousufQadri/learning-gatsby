import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      <ol>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li>
              <h3>{edge.node.frontmatter.title}</h3>
              <small>{edge.node.frontmatter.date}</small>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
