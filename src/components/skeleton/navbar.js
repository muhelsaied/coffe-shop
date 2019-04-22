import React, { Component } from "react"
import { Link } from "gatsby"

import logo from "../../images/logo.png"

export default class NavBar extends Component {
  state = {
    navBarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "home",
      },
      {
        id: 2,
        path: "/about",
        text: "about",
      },
    ],
  }
  navBarHandle = () => {
    this.state.navBarOpen
      ? this.setState({
          navBarOpen: false,
          css: "collapse navbar-collapse ",
        })
      : this.setState({
          navBarOpen: true,
          css: "collapse navbar-collapse show",
        })
  }
  render() {
    return (
      <nav
        className="navbar navbar-expand-md nav-bar navbar-dark "
        style={{ background: "#1b2127" }}
      >
        <Link to="/" className="">
          {/* https://www.iconfinder.com/icons/71188/coffee_cup_mug_icon */}
          <img
            src={logo}
            alt="logo"
            style={{ width: "60px", margin: "20px" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          onClick={this.navBarHandle}
          style={{ outlineColor: "var(--mainColor)" }}
          type="button"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={this.state.css}>
          <ul className="navbar-nav mx-auto">
            {this.state.links.map(link => {
              return (
                <li
                  className="nav-item px-3 mx-3"
                  style={{ fontSize: "1.5rem" }}
                  key={link.id}
                >
                  <Link className="nav-link text-uppercase" to={link.path}>
                    {link.text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    )
  }
}
