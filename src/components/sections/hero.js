import React, { useEffect, useContext } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { motion, useAnimation } from "framer-motion"

import Context from "../../context/"
import ContentWrapper from "../../styles/ContentWrapper"
import Underlining from "../../styles/Underlining"
import Social from "../social"
import SplashScreen from "../splashScreen"
import Theme from "../../styles/Theme"

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    // border: pink 2px solid;
    width: 100%;
    height: 100%;
    min-height: 60vh;
    display: flex;
    flex-direction: row;
    margin-bottom: 6rem;
    justify-content: space-between;
    align-items: center;
    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      margin-bottom: 4rem;
    }

    .hero-left {
      // border: blue 2px solid;
      display:flex;
      flex-direction: column;
      align-items: left;
      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        width: 100%;
        height: 100%;
      }
    }

    .hero-right {
      display: hidden;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        width: 12rem;
        // border: yellow 2px solid;
        display:flex;
        justify-content: flex-end;
        align-items: center;
        margin-right: 4rem
      }
    }
    .greetings {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .emoji {
      margin-left: 0.75rem;
      width: 2.2rem;
      height: 2.2rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-left: 1rem;
        width: 3rem;
        height: 3rem;
      }
    }
    .title {
      margin-bottom: 1.5rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-bottom: 0;
      }
    }
    .subtitle {
      margin-top: -0.75rem;
      color: ${({ theme }) => theme.colors.random};
    }
    .description {
      font-size: 1.125rem;
      margin-bottom: 2rem;
    }
    .profile {
     display: hidden;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.16);
        border: 3px solid ${({ theme }) => theme.colors.random};
        border-radius: 50%;
        display:flex;
        width: 8rem;
        height: 8rem;
        transition: all 0.3s ease-out;
        filter: grayscale(20%) contrast(1) brightness(90%);
        &:hover {
          filter: grayscale(0%) contrast(1) brightness(100%);
          transform: translate3d(0px, -0.125rem, 0px);
          box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.32);
        }
      }
  }
`

const AnimatedUnderlining = motion.custom(Underlining)

const Hero = ({ content }) => {
  const { frontmatter, body } = content[0].node
  const { isIntroDone } = useContext(Context).state

  // Controls to orchestrate animations of greetings, emoji, social profiles, underlining
  const gControls = useAnimation()
  const eControls = useAnimation()
  const sControls = useAnimation()
  const uControls = useAnimation()
  const pControls = useAnimation()

  // Start Animations after the splashScreen sequence is done
  useEffect(() => {
    const pageLoadSequence = async () => {
      if (isIntroDone) {
        eControls.start({
          rotate: [0, -10, 12, -10, 9, 0, 0, 0, 0, 0, 0],
          transition: { duration: 2.5, loop: 3, repeatDelay: 1 },
        })
        await gControls.start({
          opacity: 1,
          y: 0,
          transition: { delay: 0.4 },
        })
        await sControls.start({
          opacity: 1,
          x: 0,
        })
        await pControls.start({
          opacity: 1,
          x: 0,
        })
        // Animate underlining to hover state
        await uControls.start({
          boxShadow: `inset 0 -2rem 0 ${Theme.colors.secondary}`,
          transition: { delay: 0.4, ease: "circOut" },
        })
      }
    }
    pageLoadSequence()
  }, [isIntroDone, eControls, gControls, sControls, uControls, pControls])
  
  return (
    <StyledSection id="hero">
      {!isIntroDone && <SplashScreen />}
      <StyledContentWrapper>

        <div className="hero-left">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={gControls}>
          <h1 className="title">
            <div className="greetings">
              {frontmatter.greetings}
              <motion.div animate={eControls} style={{ originX: 0.7, originY: 0.7 }}>
                <Img className="emoji" fluid={frontmatter.icon.childImageSharp.fluid} />
              </motion.div>
            </div>
            {frontmatter.title}
          </h1>
          <h2 className="subtitle">
            {frontmatter.subtitlePrefix}{" "}
            {/* Hover state color can be set in useEffect hook */}
            <AnimatedUnderlining animate={uControls} color="tertiary" big>
              {frontmatter.subtitle}
            </AnimatedUnderlining>
          </h2>
          <div className="description">
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={sControls}>
          <Social fontSize=".95rem" padding=".3rem 1.25rem" width="auto" withIcon/>
        </motion.div>
        </div>

        <div className="hero-right">
          {/* <motion.div initial={{ opacity: 0, x: 20 }} animate={pControls}>
          <Img className="profile" fluid={frontmatter.profile.childImageSharp.fluid} />
          </motion.div> */}
        </div>

      </StyledContentWrapper>
    </StyledSection>
  )
}

Hero.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        body: PropTypes.string.isRequired,
        frontmatter: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
}

export default Hero
