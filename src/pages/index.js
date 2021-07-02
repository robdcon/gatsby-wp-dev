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

const HomePage = ({data}) => {
    console.log('Data:', data)
    return (
        <Layout>
            <h1>{data.wpPage.HeroDetails.heading}</h1>
            <p>{data.wpPage.HeroDetails.heading}</p>
            <button>{data.wpPage.HeroDetails.ctaText}</button>
        </Layout>
    )
}

export default HomePage;

export const pageQuery = graphql`
    query wpPageQuery {
        wpPage(id: {eq: "cG9zdDo0OTI="}) {
            title
            uri
            HeroDetails {
              ctaText
              heading
              subheading
            }
          }
    }
`;