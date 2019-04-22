import React from "react"
import styled from "styled-components"
import { socialIcons } from "../../links/socialicons"
import { icons } from "react-icons/lib/cjs"
export default function Footer() {
  return (
    <FooterWrapper className="py-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-sm-10 mx-auto text-capitalize">
            <p>
              {" "}
              all rights reversed &copy; {new Date().getFullYear().toString()}
            </p>
          </div>
          <div className="col-lg-6 col-sm-10 mx-auto footer">
            {socialIcons.map(item => (
              <div className="footer-icon" key={item.id}>
                {item.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
  background: var(--mainColor);
  color: var(--mainYellow) !important;
  font-size: 1.5rem;
  align-content: color-interpolation-filters;
  .footer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .footer-icon {
    margin: 0.65rem;
    padding: 0.5rem;
  }
  .footer-icon:hover {
    color: var(--mainWhite);
    transform: scale(1.3);
    transition: (--mainTranisition);
  }

  @media (max-width: 310px) {
    .footer {
      flex-direction: column;
    }
    .footer-icon {
      margin: 0.5rem auto;
      font-size: 2.5rem;
    }
  }
`
