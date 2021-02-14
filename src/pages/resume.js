import React from "react"
import resumefile from "../../content/almayan-cv.pdf"
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
  background: ${({ theme }) => theme.colors.background};
  h1 {
      font-size: 1.5rem;
  }
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    max-width: 36rem;
    margin: 0;
    padding: 0;
    height: 100%;
  }
`

const ResumePage = () => (
  <Layout splashScreen={false}>
    <SEO title="Alma Yan | CV" meta={[{ name: 'robots', content: 'noindex'}]} />
    <StyledSection>
      <StyledContentWrapper>
        <h1>CV</h1>
        <a href={resumefile} doanload>download</a>
      </StyledContentWrapper>
    </StyledSection>
  </Layout>
)

export default ResumePage
