import React, { Component } from "react"
import styled from "styled-components"
import Img from "gatsby-image"

export default function Product({ product }) {
  return (
    <CardWrapper className="col-11 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <div className="card" style={{ minHeight: "100%" }}>
        <Img
          fluid={product.image.fluid}
          className="card-img-top img-container"
        />
        <div className="card-body text-center rounded">
          <h6 className="my-2 text-primary">{product.title}</h6>
          <h6 className="my-2 text-danger"> $ {product.price}</h6>
          <button className="btn btn-warning text-capitalize text-center px-4">
            add to cart
          </button>
        </div>
      </div>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  .card:hover {
    box-shadow: 5px 7px 15px var(--mainBrown);
    transition: var(--mainTransition);
    border-radius: 10px;
    z-index: 100;
    cursor: pointer;
  }
  .card:hover .card-img-top {
    /* transform: matrix(1.1); */
    width: 100%;
    opacity: 0.6;
  }
`
