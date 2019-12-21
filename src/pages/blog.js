import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"

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
    <Layout>
      <ol>
        {data.allMarkdownRemark.edges.map((edge, index) => {
          return (
            <li
              key={index}
              style={{
                padding: 10,
                backgroundColor: "lightgrey",
                border: "1px solid grey",
                borderRadius: 5,
                marginBottom: 20,
              }}
            >
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h3>{edge.node.frontmatter.title}</h3>
                <small>Date: {edge.node.frontmatter.date}</small>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}
