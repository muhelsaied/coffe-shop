import React from "react"
import styled from "styled-components"
import { socialIcons } from "../../links/socialicons"

// import { icons } from "react-icons/lib/cjs"
export default function Footer() {
  return (
    <FooterWrapper className="py-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-sm-10 mx-auto text-capitalize">
            <h4>
              all rights reversed &copy; {new Date().getFullYear().toString()}
            </h4>
            <h6>D muhamed elsaied</h6>
          </div>
          <div className="col-lg-6 col-sm-10 mx-auto footer">
            {socialIcons.map(item => (
              <div className="footer-div" key={item.id}>
                <a className="footer-icon" href={item.link} target="_blank">
                  {item.icon}
                </a>
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
  line-height: 1.5;
  h4,
  h6 {
    text-align: center;
  }
  .footer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .footer-div:hover {
    transform: scale(1.5);
  }
  .footer-icon {
    margin: 0.65rem;
    padding: 0.5rem;
    color: var(--mainYellow);
    transition: (--mainTranisition);
  }
  .footer-icon:hover {
    color: var(--mainWhite);
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
