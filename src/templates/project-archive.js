import React from "react";
import { graphql } from "gatsby";

import Bio from "../components/bio"
import Layout from "./layout"
import Seo from "../components/seo"

const ProjectIndex = ({
    data,
    pageContext: { nextPagePath, previousPagePath },
  }) => {
    const projects = data.allWpPersonalProject.edges;
    console.log('ProjectIndex Data:', data)
    return(
        <Layout>
            <Seo title="All projects" />
            <Bio />
            <h1>All Projects</h1>
            <div>
                {projects.map((project, i) => {
                    return(
                        <div key={i}>
                         <h2>{project.node.title}</h2>
                        </div>
                    )
                })}
            </div>
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