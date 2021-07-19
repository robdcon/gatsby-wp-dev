import React from "react";
import { graphql } from "gatsby";
import HeroSection from "../components/organisms/HeroSection";
import Button from "../components/atoms/Button";
import CardContainer from "../components/organisms/CardContainer";
import Form from "../components/organisms/Form";
import Seo from 'gatsby-plugin-wpgraphql-seo';

// We're using Gutenberg so we need the block styles
import "@wordpress/block-library/build-style/style.css";
import "@wordpress/block-library/build-style/theme.css";

import Layout from "../templates/layout";

const HomePage = ({
    data: {
        wpPage: page,
        wpPage: {
            HeroDetails: {
                heading,
                ctaText
            }
        },
        allWpService: {
            edges
        }
    }
    }) => {
    // console.log('Data:', page)
    return (
        <>
            <Seo post={page} />
            <Layout>
                <HeroSection>
                    <h1>{heading}</h1>
                    <p>{heading}</p>
                    <Button text={ctaText} action={() => {console.log('clicked')}} />
                </HeroSection>
                <CardContainer
                    heading="Services"
                    cards={edges}
                />
                <section>
                    <Form />
                </section>
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

        allWpService {
            edges {
                card: node {
                  details: ServiceDetails {
                    title: serviceName
                    linkText: serviceLinkText
                    linkUrl: serviceLink {
                      target
                      title
                      url
                    }
                    image: serviceImage {
                        localFile {
                          childImageSharp {
                            gatsbyImageData
                          }
                        }
                      }
                    description: serviceDescription
                  }
                }
            }
        }
    }
`;