import React from "react"
import resumefile from "../../content/almayan-cv.pdf"
import cvmockup from "../../content/cv-mockup.png"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentWrapper from "../styles/ContentWrapper"

const StyledSection = styled.section`
  width: 100%;
  max-width: 62.5rem;
  margin: 0 auto;
  padding: 0 2.5rem;
  height: auto;
  border: pink solid 2px;
  background: ${({ theme }) => theme.colors.background};
  h1 {
      font-size: 1.5rem;
  }
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    border: blue solid 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
    }
    .imageContainer {
        position: absolute;
        border: 2px solid red;
        width : 80vw;
        overflow: none;
        z-index: 1;
        top: -10%;
        right: -10%;
    }
    a {
        position: relative;
        text-align: center;
        width: 10rem;
        padding: 10px;
        border-radius: 10px;
        border: 2px solid ${({ theme }) => theme.colors.random};
        z-index: 2;
    }
    width: 100%;
    // max-width: 36rem;
    margin: 0;
    padding: 0;
    height: 60vh;
  }
`

const ResumePage = () => (
  <Layout splashScreen={false}>
    <SEO title="Alma Yan | CV" meta={[{ name: 'robots', content: 'noindex'}]} />
    <StyledSection>
      <StyledContentWrapper>
        <a href={resumefile} download>download cv</a>
        <img src = {cvmockup} className ="imageContainer" ></img>
      </StyledContentWrapper>
      
    </StyledSection>
  </Layout>
)

export default ResumePage
