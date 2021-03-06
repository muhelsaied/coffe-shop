import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackGround from "../components/skeleton/backGround"
import Info from "../components/skeleton/homePage/info"
import Menu from "../components/skeleton/homePage/menu"
import Products from "../components/skeleton/homePage/products"
import Contact from "../components/skeleton/homePage/contact"
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackGround
      img={data.img.childImageSharp.fluid}
      title="Hot coffe Make's your day"
      styleClass="homepage-background"
    />
    <Info path='/about' name='about page'/>
    <Menu items={data.menu} />
    <Products />
    <Contact />
  </Layout>
)
export const query = graphql`
  {
    img: file(relativePath: { eq: "bg.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu: allContentfulCoffeeItem {
      edges {
        node {
          id
          title
          price
          description
          category
          image {
            fixed(width: 75, height: 75) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
