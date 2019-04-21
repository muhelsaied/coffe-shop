import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

// import bootstrap
import BootStrap from "bootstrap/dist/css/bootstrap.min.css"
import "./layout.css"

// import navbar

import NavBar from "./skeleton/navbar"
const Layout = ({ children }) => (
  <>
    <NavBar />
    {children}
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
