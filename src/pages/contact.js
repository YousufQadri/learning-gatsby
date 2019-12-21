import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
const Contact = () => {
  return (
    <Layout>
      <h1>Contact Me</h1>
      <p>Yousuf Qadri</p>
      <p>Phone : 03123456798</p>
      <Link to="/about">Click to learn more about me!</Link>
    </Layout>
  )
}

export default Contact
