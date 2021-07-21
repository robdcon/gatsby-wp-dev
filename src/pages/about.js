import React from "react";
import { graphql } from "gatsby";
import HeroSection from "../components/organisms/HeroSection";
import Button from "../components/atoms/Button";
import Seo from 'gatsby-plugin-wpgraphql-seo';

import Layout from "../templates/layout";

const AboutPage = ({
    data: {
        wpPage: page,
        wpPage: {
            HeroDetails: {
                heading,
                subheading,
                ctaText
            }
        }
    }
    }) => {
    return (
        <>
            <Seo post={page} />
            <Layout>
                <HeroSection>
                    <h1>{heading}</h1>
                    <p>{subheading}</p>
                    <Button text={ctaText} action={() => {console.log('clicked')}} />
                </HeroSection>
            </Layout>
        </>
    )
}

export default AboutPage;

export const pageQuery = graphql`
    query aboutPageQuery {
        wpPage(title: {eq: "About"}) {
            title
            uri
            content
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