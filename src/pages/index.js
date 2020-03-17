import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Contact from "../components/sections/contact"
import About from "../components/sections/about"
import Home from "../components/sections/home"
import Projects from "../components/sections/projects"
import MainHeader from "../components/sticky-header"

import "bootstrap/dist/css/bootstrap.min.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <MainHeader />

    <Home />
    <About />
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
