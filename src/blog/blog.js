import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

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
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      <ol>
        {data.allMarkdownRemark.edges.map((edge, index) => {
          console.log(edge.node.fields)
          return (
            <li key={index}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h3>{edge.node.frontmatter.title}</h3>
                <small>Date: {edge.node.frontmatter.date}</small>
              </Link>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
