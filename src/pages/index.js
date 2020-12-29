import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/sections/hero"
import Projects from "../components/sections/projects"
import About from "../components/sections/about"
import Interests from "../components/sections/interests"
import Timeline from "../components/sections/timeline"
import Contact from "../components/sections/contact"
import { splashScreen, seoTitleSuffix } from "../../config"

const IndexPage = ({ data }) => {
  const { seoTitle, useSeoTitleSuffix } = data.index.edges[0].node.frontmatter
  const withSuffix = useSeoTitleSuffix === "true"
  return (
    <Layout splashScreen={splashScreen}>
      <SEO
        title={withSuffix ? `${seoTitle} - ${seoTitleSuffix}` : `${seoTitle}`}
      />
      <Hero content={data.hero.edges} />
      <About content={data.about.edges} />
      <Interests content={data.interests.edges} />
      <Timeline content={data.timeline.edges}/>
       {/* Articles is populated via Medium RSS Feed fetch */}
      <Projects content={data.projects.edges}/>
      <Contact content={data.contact.edges} />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const pageQuery = graphql`
  {
    index: allMdx(filter: { fileAbsolutePath: { regex: "/index/index/" } }) {
      edges {
        node {
          frontmatter {
            seoTitle
            useSeoTitleSuffix
          }
        }
      }
    }
    hero: allMdx(filter: { fileAbsolutePath: { regex: "/index/hero/" } }) {
      edges {
        node {
          body
          frontmatter {
            greetings
            title
            subtitlePrefix
            subtitle
            icon {
              childImageSharp {
                fluid(maxWidth: 60, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            profile {
              childImageSharp {
                fluid(maxWidth: 300, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    about: allMdx(filter: { fileAbsolutePath: { regex: "/index/about/" } }) {
      edges {
        node {
          body
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 400, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    interests: allMdx(
      filter: { fileAbsolutePath: { regex: "/index/interests/" } }
    ) {
      edges {
        node {
          exports {
            shownItems
            interests {
              name
              icon {
                childImageSharp {
                  fixed(width: 20, height: 20, quality: 90) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
          frontmatter {
            title
          }
        }
      }
    }
    timeline: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/index/timeline/" }
        frontmatter: { visible: { eq: "true" } }
      }
      sort: { fields: [frontmatter___position], order: ASC }
    ) {
      edges {
        node {
          body
          frontmatter {
            title
            company
            logo {      
              childImageSharp {
              fixed(width: 50, quality: 90) {
                ...GatsbyImageSharpFixed
              }
            }
            }
            logoLink
            category
            emoji
            external
            github
            screenshot {
              childImageSharp {
                fluid(maxWidth: 400, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            screenshotName
            screenshotLink
            tags
            icons {
              childImageSharp {
                fixed(width: 30, quality: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            iconLinks
            position
            buttonVisible
            buttonUrl
            buttonText
          }
        }
      }
    }

    projects: allMdx(
      filter: { 
        fileAbsolutePath: { regex: "/index/projects/" } }
        sort: { fields: [frontmatter___position], order: ASC }
    ) {
      edges {
        node {
          body
          frontmatter {
            name
            overview
            link
            image {
              childImageSharp {
                fluid(maxWidth: 400, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            position
            title
          }
        }
      }
    }
  
    contact: allMdx(
      filter: { fileAbsolutePath: { regex: "/index/contact/" } }
    ) {
      edges {
        node {
          body
          frontmatter {
            title
            name
            email
            profileImage {
              childImageSharp {
                fluid(maxWidth: 400, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
