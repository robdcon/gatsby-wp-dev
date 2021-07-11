import React from "react";
import { graphql } from "gatsby";
import HeroSection from "../components/organisms/HeroSection";
import Button from "../components/atoms/Button";
import Seo from 'gatsby-plugin-wpgraphql-seo';

// We're using Gutenberg so we need the block styles
import "@wordpress/block-library/build-style/style.css";
import "@wordpress/block-library/build-style/theme.css";

import Layout from "../templates/layout";

const HomePage = ({data}) => {
    console.log('Data:', data)
    return (
        <>
            <Seo post={data.wpPage} />
            <Layout>
                <HeroSection>
                    <h1>{data.wpPage.HeroDetails.heading}</h1>
                    <p>{data.wpPage.HeroDetails.heading}</p>
                    <Button text={data.wpPage.HeroDetails.ctaText} action={() => {console.log('clicked')}} />
                </HeroSection>
            </Layout>
        </>
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

            seo {
                title
                metaDesc
            }
        }
    }
`;