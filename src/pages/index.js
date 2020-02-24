import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
import ContactForm from "../components/form"
import About from "../components/sections/about"

import "bootstrap/dist/css/bootstrap.min.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header siteTitle={"SkyyLife"} />
    <About />

    <ContactForm />
  </Layout>
)

export default IndexPage
