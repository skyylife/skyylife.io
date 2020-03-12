import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Contact from "../components/form"
import About from "../components/sections/about"
import Home from "../components/sections/home"

import "bootstrap/dist/css/bootstrap.min.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header siteTitle={"SkyyLife"} />
    <Home />
    <About />
    <Contact />
  </Layout>
)

export default IndexPage
