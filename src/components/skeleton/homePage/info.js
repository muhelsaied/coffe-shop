import React from "react"
import { Link } from "gatsby"

import Title from "../title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title=" our stories" />
        <div className="row">
          <div className="col-10 col-sm-8 p-3 text-center mx-auto">
            <p className="lead text-muted mb-5 ">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintocka Latin professor
              at Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections
              1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
              Extremes of Good and Evil) by Cicero, written in 45 BC. This book
              is a treatise on the theory of ethics, very popular during the
              Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
              amet..", comes from a line in section 1.10.32 The standard chunk
              of Lorem Ipsum used since the 1500s is reproduced below for those
              interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum
              et Malorum" by Cicero are also reproduced in their exact original
              form, accompanied by English versions from the 1914 translation by
              H. Rackham.
            </p>
            <Link to="/about" className="btn about-btn text-uppercase p-2">
              about page
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
