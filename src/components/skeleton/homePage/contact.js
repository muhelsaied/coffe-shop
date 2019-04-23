import React from "react"
import Title from "../title"
import styled from "styled-components"

export default function Contact() {
  return (
    <ContactWrapper className="py-5">
      <div className="conatiner m-0">
        <Title title="your suggestion" />
        <div className="form-group col-10 col-md-8 col-lg-6 mx-auto">
          <form
            action="POST"
            name="contact"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
          >
            {/* name */}
            <div className="form-group">
              <label htmlFor="name">Name :</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Muh Elsaied"
                required
              />
            </div>
            {/* email */}
            <div className="form-group">
              <label htmlFor="email">Email address :</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="example@example.com"
                required
              />
            </div>
            {/* message  */}
            <div className="form-group">
              <label htmlFor="name">Message :</label>
              <textarea
                type="text"
                className="form-control"
                id="message"
                rows="5"
                placeholder="your suggestion & requests "
                required
              />
            </div>
            {/* submit  */}
            <div className="form-group">
              <input
                type="Submit"
                className="btn btn-outline-light mx-auto  d-block submit-btn"
                value="Submit"
              />
            </div>
            <div className="form-group" data-netlify-recaptcha />
            <small className="form-text text-muted text-center my-2">
              We'll never share your email with anyone else.
            </small>
          </form>
        </div>
      </div>
    </ContactWrapper>
  )
}

const ContactWrapper = styled.section`
  background: var(--mainCoffee);
  label {
    color: var(--mainWhite);
    padding: 10px 0;
  }
  input {
    outline-color: var(--mainYellow) !important;
  }
  .submit-btn {
    width: 40%;
    margin-top: 30px !important;
    margin-bottom: 30px !important;
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 35px;
      color: var(--mainWhite);
    }
  }
  @media (max-width: 300px) {
    h1 {
      font-size: 25px !important;
    }
  }
`
