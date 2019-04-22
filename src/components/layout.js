import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

// import bootstrap
import BootStrap from "bootstrap/dist/css/bootstrap.min.css"
import "./layout.css"

// import navbar

import NavBar from "./skeleton/navbar"
import Footer from "./skeleton/footer"
// import pop cart
import PopCart from "./skeleton/popCart"

const Layout = ({ children }) => (
  <>
    <NavBar />
    <PopCart />
    {children}
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
