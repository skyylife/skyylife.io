import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
import ContactForm from "../components/form"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header siteTitle={"SkyyLife"} />
    <ContactForm />
  </Layout>
)

export default IndexPage
