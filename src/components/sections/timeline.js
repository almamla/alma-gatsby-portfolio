import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import VisibilitySensor from "react-visibility-sensor"
import { motion } from "framer-motion"

import { useOnScreen } from "../../hooks"
import ContentWrapper from "../../styles/ContentWrapper"
import Underlining from "../../styles/Underlining"
import Button from "../../styles/Button"
import Icon from "../icons"

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
  margin-top: 6rem;
  .cta-btn {
    display: block;
    text-align: center;
    margin: 2rem auto;
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      margin: 0 auto;
    }
  }
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 0;
    padding-left: 0;
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      padding-right: 2.5rem;
      padding-left: 2.5rem;
    }
    .section-title {
      padding-right: 2.5rem;
      padding-left: 2.5rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        padding-right: 0;
        padding-left: 0;
      }
    }
    p {
      text-transform: none;
    }
    .projects {
      display: flex;
      flex-direction: row;
      margin-top: -2.5rem;
      padding: 2.5rem 2.5rem;
      overflow-x: scroll;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;
      &::-webkit-scrollbar {
        display: none;
      }
      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        flex-direction: column;
        margin-top: 0;
        padding: 0;
        overflow: visible;
      }
      /* Show scrollbar if desktop and wrapper width > viewport width */
      @media (hover: hover) {
        &::-webkit-scrollbar {
          display: block;
          -webkit-appearance: none;
        }

        &::-webkit-scrollbar:horizontal {
          height: 0.8rem;
        }

        &::-webkit-scrollbar-thumb {
          border-radius: 8px;
          border: 0.2rem solid white;
          background-color: rgba(0, 0, 0, 0.5);
        }

        &::-webkit-scrollbar-track {
          background-color: #fff;
          border-radius: 8px;
        }
      }
    }
    .counter {
      position: absolute;
      top: 2.2rem;
      right: 2.5rem;
      font-size: 1.125rem;
      font-weight: 500;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        display: none;
      }
    }
  }
`

const StyledProject = styled(motion.div)`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  align-items: center;
  margin-top: 0;
  margin-bottom: 2rem;
  flex-shrink: 0;
  padding-right: 2.5rem;
  max-width: 20rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    max-width: 25rem;
    margin-top: 2rem;
    padding-right: 5rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: space-between;
    flex-shrink: 1;
    max-width: 62.5rem;
    margin-bottom: 10rem;
    padding-right: 0;
    /* Positioning of image and details should vary */
    flex-direction: ${({ position }) =>
      position % 2 !== 0 ? "row" : "row-reverse"};
  }
  .details {
    width: 100%;
    max-width: 25rem;
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      margin-top: 0;
    }
    .category {
      font-size: 0.875rem;
      line-height: 1rem;
      // text-transform: uppercase;
      letter-spacing: +1px;
    }
    .title {
      display: flex;
      align-items: center;
      margin-top: 0.625rem;
      margin-bottom: 0.625rem;
      font-size: 1.375rem;
      line-height: 1.625rem;
      font-weight: 700;
      text-transform: none;
    }
    .tags {
      display: flex;
      flex-wrap: wrap;
      margin-top: 1.5rem;
      line-height: 1.2rem;
      color: ${({ theme }) => theme.colors.random};
      span {
        margin-right: 1rem;
        margin-bottom: 1rem;
      }
    }
    .logo {
      margin-right: 0.5rem;
      transition: all 0.3s ease-out;
      &:hover {
        transform: translate3d(0px, -0.125rem, 0px);
      }
    }
    .links {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      margin-top: 1rem;
      a {
        display: inline-block;
        margin-right: 1.5rem;
      }
      .icon {
        // border: red solid 1px;
        padding: 1px;

        // width: 1.3rem;
        // height: 1.3rem;
        transition: all 0.3s ease-out;
        filter: grayscale(100%) contrast(1) brightness(90%);
      }
      .icon:hover {
        filter: grayscale(0%) contrast(1) brightness(100%);
      }
    }
  }

  .screenshot {
    width: inherit;
    height: inherit;
    border-radius: inherit;
    box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.16);
    transition: all 0.3s ease-out;
    filter: grayscale(20%) contrast(1) brightness(90%);
  }
  .screenshot-container {
    // overflow: hidden;
    max-width: 25rem;
    height: 15rem;
    position: relative;
    width: 100%;
    border-radius: ${({ theme }) => theme.borderRadius};
    transition: all 0.3s ease-out;
    &:hover .screenshot {
      filter: grayscale(0%) contrast(1) brightness(100%);
      box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.32);
    }
    &:hover ${Underlining} {
      box-shadow: inset 0 -1rem 0 ${({ theme }) => theme.colors.random};
    }
    &:hover {
      transform: translate3d(0px, -0.125rem, 0px);
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      height: 18.75rem;
    }
  }
  .name {
    position: absolute;
    left: 5px;
    bottom: 0;
    color: ${({ theme }) => theme.colors.background}; 
    font-weight: 500;
  }
`

const Timeline = ({ content, interests }) => {
  const sectionDetails = content[0].node
  const timeline = content.slice(1, content.length)

  // visibleProject is needed to show which project is currently
  // being viewed in the horizontal slider on mobile and tablet
  const [visibleProject, setVisibleProject] = useState(1)

  // projects don't track the visibility by using the onScreen hook
  // instead they use react-visibility-sensor, therefore their visibility
  // is also stored differently
  const [onScreen, setOnScreen] = useState({})
  const handleOnScreen = el => {
    if (!onScreen[el]) {
      const updatedOnScreen = { ...onScreen }
      updatedOnScreen[el] = true
      setOnScreen(updatedOnScreen)
    }
  }
  const pVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  useEffect(() => {
    // mobile and tablet only: set first project as visible in the
    // horizontal slider
    setVisibleProject(1)
    // required for animations: set visibility for all projects to
    // "false" initially
    let initial = {}
    timeline.forEach(project => {
      initial[project.node.frontmatter.position] = false
    })
    setOnScreen(initial)
  }, [])

  // Required for animating the title
  const tRef = useRef()
  const tOnScreen = useOnScreen(tRef)
  const tVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  // Required for animating the button
  const bRef = useRef()
  const bOnScreen = useOnScreen(bRef)
  const bVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <StyledSection id="timeline">
      <StyledContentWrapper>
        <motion.div
          ref={tRef}
          variants={tVariants}
          animate={tOnScreen ? "visible" : "hidden"}
        >
          <h3 className="section-title">{sectionDetails.frontmatter.title}</h3>
          <div className="counter">
            {visibleProject} / {timeline.length}
          </div>
        </motion.div>
        <div className="projects">
          {timeline.map(project => {
            const { body, frontmatter } = project.node
            return (
              <VisibilitySensor
                key={frontmatter.position}
                onChange={() => handleOnScreen(frontmatter.position)}
                partialVisibility={true}
                minTopValue={100}
              >
                <StyledProject
                  position={frontmatter.position}
                  variants={pVariants}
                  animate={
                    onScreen[frontmatter.position] ? "visible" : "hidden"
                  }
                >
                  <div className="details">
                    <div className="title">
                      <a
                       href={frontmatter.logoLink}
                       target="_blank"
                       rel="nofollow noopener noreferrer"
                       aria-label="External Link">
                        <Img className="logo" fixed={frontmatter.logo.childImageSharp.fixed} />
                       </a>
                      {frontmatter.title}
                    </div>
                    <div className="category">
                      {/* {frontmatter.emoji} */}
                       {frontmatter.category}
                    </div>
                    <MDXRenderer>{body}</MDXRenderer>
                    <div className="tags">
                      {frontmatter.tags.map(tag => (
                        <span key={tag}>
                        {tag}
                        </span>
                        // <Underlining
                        //   key={tag}
                        //   color="secondary"
                        //   hoverColor="random"
                        // >
                        //   {tag}
                        // </Underlining>
                      ))}
                    </div>
                    <div className="links">
                      {frontmatter.icons.map((icon, i) => {
                        return (
                            <a
                            href={frontmatter.iconLinks[i]}
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            aria-label="External Link"
                            key={icon}
                          >
                          <Img className="icon" fixed={icon.childImageSharp.fixed} />
                          </a>
  
                        )
                      }
                      )
                      }
                      {/* {frontmatter.github && (
                        <a
                          href={frontmatter.github}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          aria-label="External Link"
                        >
                          <Icon name={frontmatter.iconname} color="#888888" />
                        </a>
                      )}
                      {frontmatter.external && (
                        <a
                          href={frontmatter.external}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          aria-label="External Link"
                        >
                          <Icon name="external" color="#888888" />
                        </a>
                      )} */}
                    </div>
                  </div>
                  {/* If image in viewport changes, update state accordingly */}  
                
                  <VisibilitySensor
                    onChange={() => setVisibleProject(frontmatter.position)}
                  >
                    <a className="screenshot-container"
                    href={frontmatter.screenshotLink}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    aria-label="External Link"
                    >
                    <Img
                      className="screenshot"
                      fluid={frontmatter.screenshot.childImageSharp.fluid}
                    /> 
                    <span className="name">
                      <Underlining color="secondary" hoverColor="secondary">
                          {frontmatter.screenshotName}
                    </Underlining>
                    </span>
                    </a>
                  </VisibilitySensor>
                </StyledProject>
              </VisibilitySensor>
            )
          })}
        </div>
      </StyledContentWrapper>
      {sectionDetails.frontmatter.buttonVisible === "true" && (
        <motion.a
        ref={bRef}
        variants={bVariants}
        animate={bOnScreen ? "visible" : "hidden"}
        className="cta-btn"
        href={sectionDetails.frontmatter.buttonUrl}
        target="_blank"
        rel="nofollow noopener noreferrer"
        aria-label="External Link"
      >
        <Button type="button" textAlign="center" color="primary" center>
          {sectionDetails.frontmatter.buttonText}
        </Button>
      </motion.a>
      )}

    </StyledSection>
  )
}
Timeline.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        body: PropTypes.string.isRequired,
        frontmatter: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
}

export default Timeline
