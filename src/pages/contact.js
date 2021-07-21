import React from "react";
import { graphql } from "gatsby";
import HeroSection from "../components/organisms/HeroSection";
import Button from "../components/atoms/Button";
import Form from "../components/organisms/Form";
import Seo from 'gatsby-plugin-wpgraphql-seo';

import Layout from "../templates/layout";

const ContactPage = ({
    data: {
        wpPage: page,
        wpPage: {
            HeroDetails: {
                heading,
                ctaText,
                subheading
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
                <section>
                    <Form />
                </section>
            </Layout>
        </>
    )
}

export default ContactPage;

export const pageQuery = graphql`
    query contactPageQuery {
        wpPage(title: {eq: "Contact Me"}) {
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