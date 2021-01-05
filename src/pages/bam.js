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

const Bam = () => {
  return (
    <Layout splashScreen={false}>
      <SEO
        title="alma yan | project - bournemouth aviation museum"
        meta={[{ name: "robots", content: "noindex" }]}
      />
      <StyledSection>
        <StyledContentWrapper>
          <h1>Bournemouth Aviation Museum</h1>
          <h2>Media Solution</h2>
          <p>Acting as a media agency, me and my university group worked towards a breif given by rea-life clients at Bournemouth Aviation Museum (BAM) to bring awareness to the museum.</p>
          <p>To our clients' satisfaction, we provided a media solution comprising of a sleek <a href="https://projects.lipingyan.com/" target="_blank">
          <Underlining color="tertiary" hoverColor="secondary">
            website
          </Underlining></a>, two promotional videos (below), and improved social media engagement.</p>
          <p>I was the content producer of the team and took main responsibility for the website, audio recording and social media elements.</p>
          <div className="videoWrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/VEFHeh0g-0Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="videoWrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/LKVo75MPzPw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          {/* <MDXRenderer>test</MDXRenderer> */}
        </StyledContentWrapper>
      </StyledSection>
    </Layout>
  )
}


export default Bam