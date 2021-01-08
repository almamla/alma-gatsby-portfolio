import React from "react"
import styled from "styled-components"
import ContentWrapper from "../styles/ContentWrapper"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Underlining from "../styles/Underlining"

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
  h2 {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.random};
  }
  h3 {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  .videoWrapper {
    margin-top: 1rem;
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
    margin-top: 2rem;
  }
  .videoWrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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

const Insidewestworld = () => {
  return (
    <Layout splashScreen={false}>
      <SEO
        title="alma yan | project - inside westworld"
        meta={[{ name: "robots", content: "noindex" }]}
      />
      <StyledSection>
        <StyledContentWrapper>
          <h1>inside westworld</h1>
          <h2>video essay</h2>
          <p>A video essay on the TV series Westworld: exploring its relationship with ideology and authenticity.</p>
          <p>I worked independently on this university project: researching, narrating, editing, and presenting it on a <a href="https://insidewestworld.lipingyan.com/" target="_blank">  
          <Underlining color="tertiary" hoverColor="secondary">
          website
          </Underlining></a>.</p>
          <div className="videoWrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/rMjJXmMh-2I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          {/* <MDXRenderer>test</MDXRenderer> */}
        </StyledContentWrapper>
      </StyledSection>
    </Layout>
  )
}


export default Insidewestworld