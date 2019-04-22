import React from "react"
import Bcg from "gatsby-background-image"

export default function BackGround({ img, styleClass, title, children }) {
  return (
    <Bcg className={styleClass} fluid={img}>
      <h1 className="text-center text-uppercase font-weight-bold text-warning title display-4">
        {title}
      </h1>
      {children}
    </Bcg>
  )
}

// set default variables to Bcg
BackGround.defaultProps = {
  title: "Deafult title",
  styleClass: "default-background",
}
