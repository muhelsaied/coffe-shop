import React, { Component } from "react"
import Title from "../title"
import Img from "gatsby-image"

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.edges,
      tempItems: props.items.edges,
    }
  }
  render() {
    if (this.state.items.length > 0) {
      return (
        <section
          className="menu py-5"
          style={{ background: "var(--secBrown)" }}
        >
          <div className="container">
            <Title title="best product " />
            {/* catergory */}
            {/* items */}
            <div className="row m-0">
              {this.state.tempItems.map(({ node }) => {
                // console.log(node.image.fixed)
                return (
                  <div
                    key={node.id}
                    className="col-12 col-md-8 d-flex mx-auto rounded py-3"
                    style={{ fontSize: "25px" }}
                  >
                    <div>
                      <Img fixed={node.image.fixed} />
                    </div>
                    <div className="flex-grow-1 px-3">
                      <div className="d-flex justify-content-between mb-1 text-capitalize">
                        <h6 className="mb-0 text-muted">{node.title}</h6>
                        <h6 className="mb-0 text-danger  rounded  text-center">
                          ${node.price}
                        </h6>
                      </div>
                      <p className="text-secondary">
                        <small>{node.description}</small>
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )
    } else {
      return (
        <section className="menu py-5 ">
          <div className="container">
            <Title title="best product" />
            <div className="row">
              <div className="col-10 col-sm-6 mx-auto text-capitalize text-center text-danger my-3">
                <h1>No items to display</h1>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}
