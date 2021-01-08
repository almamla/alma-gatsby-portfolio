import React, { useRef, useState, useEffect, useContext } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import SkeletonLoader from "tiny-skeleton-loader-react"
import { motion, useAnimation } from "framer-motion"
import { useOnScreen } from "../../hooks/"

import Context from "../../context"
import config from "../../../config"
import { parseDate } from "../../utils"
import ContentWrapper from "../../styles/ContentWrapper"
import Underlining from "../../styles/Underlining"

// const { mediumRssFeed, shownArticles } = config

const StyledSection = motion.custom(styled.section`
  width: 100%;
  height: auto;
  overflow-x: hidden;
  background: ${({ theme }) => theme.colors.background};
`)

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    padding-right: 0;
    padding-left: 0;
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      padding-right: 2.5rem;
      padding-left: 2.5rem;
    }
    .section-title {
      padding-right: 2.5rem;
      padding-left: 2.5rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        padding-right: 0;
        padding-left: 0;
      }
    }
    .articles {
      display: flex;
      justify-content: space-between;
      overflow-x: scroll;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;
      margin: -2rem 1rem 0 -2rem;
      padding: 0 1rem;
      &::-webkit-scrollbar {
        display: none;
      }
      @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
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
    .info {
      // background-color: white;
      position: absolute;
      left: 5px;
      bottom: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: ${({ theme }) => theme.colors.background};
      @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        .category {
          color: ${({ theme }) => theme.colors.background};
          // letter-spacing: +1px;
          // font-weight: 700;
        }
        .title {
          color: ${({ theme }) => theme.colors.background};
          margin-top: 0.25rem;
          margin-bottom: 0.25rem;
        }
        .date {
          font-size: 0.75rem;
          color: #555555;
          letter-spacing: +0.5px;
        }
      }
    }
    .project-image {
      filter: grayscale(20%) contrast(1) brightness(90%);
      width: inherit;
      height: inherit;
      transition: all 0.3s ease-out;
      border-radius: inherit;
    }
    .card {
      position: relative;
      width: 16.25rem;
      height: 12rem;
      // padding: 3rem;
      margin: 2rem;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.16);
      border-radius: ${({ theme }) => theme.borderRadius};
      // transition: box-shadow 0.3s ease-out;
      transition: all 0.3s ease-out;
      &:hover {
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.32);
        transform: translate3d(0px, -0.125rem, 0px);
      }
      &:hover .project-image {
        filter: grayscale(0%) contrast(1) brightness(100%);
      }
      &:hover ${Underlining} {
        box-shadow: inset 0 -1rem 0 ${({ theme }) => theme.colors.random};
      }
      @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        margin: 2rem 2.5rem 2rem 0;;
      }
    }
  }
`

const Projects = ({ content }) => {
  // const { frontmatter, body } = content[0].node
  const sectionDetails = content[0].node
  const projects = content.slice(1, content.length)

  // shownArticles is set in config.js, due to the rss feed loader
  // it is currently limited to max 3
  // const MAX_ARTICLES = shownArticles
  
  const { isIntroDone } = useContext(Context).state
  const articlesControls = useAnimation()

  const articlesRef = useRef()
  const articlesOnScreen = useOnScreen(articlesRef)

  // const [articles, setArticles] = useState()
  
  // Load and display articles after the splashScreen sequence is done
  // useEffect(() => {
  //   const loadArticles = async () => {
  //     if (isIntroDone) {
  //       await articlesControls.start({ opacity: 1, y: 0, transition: { delay: 1 } })
  //       // MediumRssFeed is set in config.js
  //       // fetch(mediumRssFeed, { headers: { Accept: "application/json" } })
  //       // .then(res => res.json())
  //       // Feed also contains comments, therefore we filter for articles only
  //       // .then(data => data.items.filter(item => item.categories.length > 0))
  //       // .then(newArticles => newArticles.slice(0, MAX_ARTICLES))
  //       // .then(articles => setArticles(articles))
  //       // .catch(error => console.log(error))
  //     }
  //   }
  //   loadArticles()
  // },[isIntroDone, articlesControls, MAX_ARTICLES])

  useEffect(() => {
    if (isIntroDone) {
      if (articlesOnScreen) articlesControls.start({ opacity: 1, y: 0 })
    }
  }, [isIntroDone, articlesControls, articlesOnScreen])

  return (
    <StyledSection
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      animate={articlesControls}
    >
      {/* <StyledContentWrapper>
        <h3 className="section-title">Projects</h3>
        <div className="articles">
          {articles
            ? articles.map(item => (
                <a
                  href={item.link}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  title={item.title}
                  aria-label={item.link}
                  key={item.link}
                >
                  <div className="card">
                    <span className="category">
                      <Underlining color="tertiary" hoverColor="secondary">
                        {item.categories[2]}
                      </Underlining>
                    </span>
                    <h4 className="title">{item.title}</h4>
                    <span className="date">{parseDate(item.pubDate)}</span>
                  </div>
                </a>
              ))
            : [...Array(MAX_ARTICLES)].map((i, key) => (
              <div className="card" key={key}>
                <SkeletonLoader 
                  background="#f2f2f2"
                  height="1.5rem" 
                  style={{ marginBottom: ".5rem" }}
                />
                <SkeletonLoader 
                  background="#f2f2f2" 
                  height="4rem"
                />
                <SkeletonLoader 
                  background="#f2f2f2" 
                  height=".75rem" 
                  width="50%" 
                  style={{ marginTop: ".5rem" }}
                />
              </div>
            ))}
        </div>
      </StyledContentWrapper> */}
       <StyledContentWrapper>
        <h3 className="section-title">{sectionDetails.frontmatter.title}</h3>
        <motion.div
              ref={articlesRef}
              initial={{ opacity: 0, x: 20 }}
              animate={articlesControls}
            >
        <div className = "articles">
          {projects.map(project => {
            const { frontmatter, body } = project.node
            return (
                <a
                href={frontmatter.link}
                // target="_blank"
                rel="nofollow noopener noreferrer"
                title={frontmatter.name}
                aria-label={frontmatter.link}
                key={frontmatter.link}
              >
                  <div className="card">
                    <Img
                      className="project-image"
                      fluid={frontmatter.image.childImageSharp.fluid}
                    />
                    <div className="info">
                    <span className="category">
                        <Underlining color="random" hoverColor="secondary">
                            {frontmatter.name}
                        </Underlining>
                    </span>
                    </div>
                </div>
              </a>
            )
          })}
        </div>
        </motion.div>
      </StyledContentWrapper>
    </StyledSection>
  )
}

Projects.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        body: PropTypes.string.isRequired,
        frontmatter: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
}

export default Projects
