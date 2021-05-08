import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"

// We're using Gutenberg so we need the block styles
import "@wordpress/block-library/build-style/style.css"
import "@wordpress/block-library/build-style/theme.css"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectTemplate = ({ data: { previous, next, project } }) => {
  const featuredImage = {
    fluid: project.featuredImage?.node?.localFile?.childImageSharp?.fluid,
    alt: project.featuredImage?.node?.alt || ``,
  }

  return (
    <Layout>
      <SEO title={project.title} />

      <article
        className="project"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{parse(project.title)}</h1>

          <p>{project.date}</p>

          {/* if we have a featured image for this project let's display it */}
          {featuredImage?.fluid && (
            <Image
              fluid={featuredImage.fluid}
              alt={featuredImage.alt}
              style={{ marginBottom: 50 }}
            />
          )}
        </header>

        {!!project.content && (
          <section itemProp="articleBody">{parse(project.content)}</section>
        )}

        <hr />

        <footer>
          <Bio />
        </footer>
      </article>

      <nav className="project-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.uri} rel="prev">
                ← {parse(previous.title)}
              </Link>
            )}
          </li>

          <li>
            {next && (
              <Link to={next.uri} rel="next">
                {parse(next.title)} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
    $previousProjectId: String
    $nextProjectId: String
  ) {
    # selecting the current project by id
    project: wpProject(id: { eq: $id }) {
      id
      content
      title
      date(formatString: "MMMM DD, YYYY")

      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }

    # this gets us the previous project by id (if it exists)
    previous: wpProject(id: { eq: $previousProjectId }) {
      uri
      title
    }

    # this gets us the next project by id (if it exists)
    next: wpProject(id: { eq: $nextProjectId }) {
      uri
      title
    }
  }
`
