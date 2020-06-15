import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Contact from "../components/sections/contact"
import About from "../components/sections/about"
import Home from "../components/sections/home"
import Projects from "../components/sections/projects"
import Masthead from "../components/masthead"

import "bootstrap/dist/css/bootstrap.min.css"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <Header siteTitle={"SkyyLife"} />
    <Masthead />
    <Home />
    <About />
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
