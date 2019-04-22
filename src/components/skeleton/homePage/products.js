import React from "react"
import Title from "../title"
import Product from "./product"
import { StaticQuery, graphql } from "gatsby"

export default function Products() {
  return (
    <StaticQuery
      query={getProduct}
      render={data => {
        return (
          <section className="py-5">
            <div className="container">
              <Title title="our product" />
              <div className="row m-0">
                {data.products.edges.map(({ node: product }) => {
                  return <Product key={product.id} product={product} />
                })}
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}

const getProduct = graphql`
  {
    products: allContentfulCoffeeProduct {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxHeight: 400) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
