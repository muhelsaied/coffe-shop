import React, { Component } from "react"
import Title from "../title"
import Img from "gatsby-image"

const storeCatergory = items => {
  let tempItems = items.map(items => {
    return items.node.category
  })
  //prevent repeat catergory
  let tempCategories = new Set(tempItems)
  let categories = Array.from(tempCategories)
  categories = ["all", ...categories]
  return categories
}
export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.edges,
      tempCoffeeItems: props.items.edges,
      catergories: storeCatergory(props.items.edges),
    }
  }
  handleChange = item => {
    //   // console.log(this.state.items, item)
    let tempItems = [...this.state.items]
    if (item === "all") {
      this.setState(() => {
        return {
          tempCoffeeItems: tempItems,
        }
      })
    } else {
      let items = tempItems.filter(({ node }) => node.category === item)
      this.setState(() => {
        return {
          tempCoffeeItems: items,
        }
      })
    }
  }
  render() {
    // console.log(this.state.catergories)

    if (this.state.items.length > 0) {
      return (
        <section
          className="menu py-5"
          style={{ background: "var(--secBrown)" }}
        >
          <div className="container">
            <Title title="best product " />
            {/* catergory */}
            <div className="row m-0 mb-5">
              <div className="col-12 mx-auto text-center">
                {this.state.catergories.map((item, index) => {
                  return (
                    <button
                      className="btn btn-warning btn-outline-danger m-3 text-uppercase product-btn"
                      style={{ maxWidth: "150px", width: "100%" }}
                      key={index}
                      onClick={() => this.handleChange(item)}
                    >
                      {item}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* items */}
            <div className="row m-0">
              {this.state.tempCoffeeItems.map(({ node }) => {
                // console.log(node.image.fixed)
                return (
                  <div
                    key={node.id}
                    className="col-12 col-md-6 d-flex mx-auto  py-3 text-weight-bold product-section"
                    style={{ fontSize: "25px" }}
                  >
                    <div>
                      <Img fixed={node.image.fixed} className="rounded" />
                    </div>
                    <div className="flex-grow-1 px-3">
                      <div className="d-flex justify-content-between mb-1 text-capitalize section-menu">
                        <h6 className="mb-0 text-danger">{node.title}</h6>
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
