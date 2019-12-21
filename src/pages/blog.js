import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"

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
      <h1>Blogs</h1>
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map((edge, index) => {
          return (
            <li key={index} className={blogStyles.post}>
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
