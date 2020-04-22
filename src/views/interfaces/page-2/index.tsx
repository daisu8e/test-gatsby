import React, { FC } from "react"
import { Link } from "gatsby"

import Layout from "views/components/layout"
import SEO from "views/components/seo"
import FontAwesome from "views/components/icons/font-awesome"
import { StyledDiv } from "./index.styled"

const Page2: FC = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <FontAwesome />
    <StyledDiv />
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Page2
