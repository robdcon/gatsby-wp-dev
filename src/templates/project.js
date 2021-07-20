import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import parse from "html-react-parser"

// We're using Gutenberg so we need the block styles
import "@wordpress/block-library/build-style/style.css"
import "@wordpress/block-library/build-style/theme.css"

import Bio from "../components/bio"
import Layout from "./layout"
import Seo from "../components/seo"

const ProjectTemplate = ({ data: { previous, next, project } }) => {
  const featuredImage = {
    image: project?.localFile?.childImageSharp?.gatsbyImageData,
    alt: project?.node?.alt || ``,
  }

  return (
    <Layout>
      <Seo title={project.title} />

      <article
        className="project"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{parse(project.title)}</h1>

          <p>{project.date}</p>

          {/* if we have a featured image for this project let's display it */}
          {featuredImage?.image && (
            <GatsbyImage
              image={featuredImage.image}
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
              <Link to={`/projects/${previous.slug}`} rel="prev">
                ← {parse(previous.title)}
              </Link>
            )}
          </li>

          <li>
            {next && (
              <Link to={`/projects/${next.slug}`} rel="next">
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
    project: wpPersonalProject(id: { eq: $id }) {
      id
      content
      title
      date(formatString: "MMMM DD, YYYY")

      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                  width: 1000
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }

    # this gets us the previous project by id (if it exists)
    previous: wpPersonalProject(id: { eq: $previousProjectId }) {
      uri
      title
      slug
    }

    # this gets us the next project by id (if it exists)
    next: wpPersonalProject(id: { eq: $nextProjectId }) {
      uri
      title
      slug
    }
  }
`
