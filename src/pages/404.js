import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackGround from "../components/skeleton/backGround"

const NotFoundPage = ({ data }) => (
  <Layout>
    <SEO title="404: Not found" />
    <BackGround
      img={data.img.childImageSharp.fluid}
      title="404 not found"
      styleClass="not-found-bg"
    >
      <h3 className="text-uppercase text-center text-danger my-3 text-weight-bold">
        could not found your page
      </h3>
      <Link
        to="/"
        className="text-uppercase text-center btn btn-light btn-outline-danger mx-auto m-2 px-3"
      >
        back to home page
      </Link>
    </BackGround>
  </Layout>
)
export const query = graphql`
  {
    img: file(relativePath: { eq: "bg-not-found.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default NotFoundPage
