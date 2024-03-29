import React from "react"
import styled from "styled-components"
import ContentWrapper from "../styles/ContentWrapper"
import Layout from "../components/layout"
import SEO from "../components/seo"

const StyledSection = styled.section`
  width: 100%;
  max-width: 62.5rem;
  margin: 0 auto;
  padding: 0 2.5rem;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
  p {
    text-transform: none;
  }
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
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
  }
  .videoWrapper iframe {
    margin-top: 1rem;
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

const Respawn = () => {
  return (
    <Layout splashScreen={false}>
      <SEO
        title="alma yan | project - respawn"
        meta={[{ name: "robots", content: "noindex" }]}
      />
      <StyledSection>
        <StyledContentWrapper>
          <h1>Respawn</h1>
          <h2>Interactive Short Film</h2>
          <p>Inspired by Bandersnatch, RESPAWN is an interactive adventure film following Adam, a young gamer trapped between realities of the present day and the gaming world.</p>
          <p>I was the runner of the project and took some responsibilities of the assistant director. </p>
          <div className="videoWrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/x47pG1IV1vo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          {/* <MDXRenderer>test</MDXRenderer> */}
        </StyledContentWrapper>
      </StyledSection>
    </Layout>
  )
}


export default Respawn