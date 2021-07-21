import React from "react";
import { graphql } from "gatsby";
import Layout from "./layout";
import Seo from "../components/seo";
import Link from "../components/atoms/Link";
import Row from "../components/molecules/Row";

const ProjectIndex = ({
    data,
    pageContext: { nextPagePath, previousPagePath },
  }) => {
    const projects = data.allWpPersonalProject.edges;
    console.log('ProjectIndex Data:', data)
    return(
        <Layout>
            <Seo 
                title="All projects" 
                meta={[{description: "My projects"}]}
            />
            <Row>
                <h1>All Projects</h1>
                <div>
                    {projects.map((project, i) => {
                        return(
                            <div key={i}>
                            <h2>{project.node.title}</h2>
                            <Link href={`/projects/${project.node.slug}`} text={`View Project >`} />
                            </div>
                        )
                    })}
                </div>
            </Row>
        </Layout>
    )
}

export default ProjectIndex

export const allProjectQuery = graphql`
    query personalProjectsQuery {
        allWpPersonalProject {
            edges {
                node {
                    title
                    link
                    slug
                }
            }
        }
    }
`;