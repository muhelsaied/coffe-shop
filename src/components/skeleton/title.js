import React from "react"
import styled from "styled-components"

export default function Title({ title }) {
  return (
    <div className="row">
      <TitleWrapper className="col-10 col-sm-8 p-3 text-center mx-auto">
        <h1 className="text-uppercase display-4 font-weight-blod"> {title}</h1>
        <div className="solid-down mx-auto" />
      </TitleWrapper>
    </div>
  )
}

const TitleWrapper = styled.div`
  h1 {
    text-shadow: 2px 2px 2px var(--mainYellow);
  }
  .solid-down {
    height: 5px;
    max-width: 250px;
    width: 100%;
    background: var(--mainDark);
    border: 2px solid var(--mainDark);
    border-radius: 50%;
    box-shadow: 2px 2px 2px var(--mainYellow);
  }
`
