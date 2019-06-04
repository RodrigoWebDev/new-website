import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby';
import Img from "gatsby-image"

export default ({data}) => {
    return(
        <Layout>
            <div className="portfolio">
                {data.allProjectsJson.edges.map(project =>(
                    <div className="card">
                        <a target="_blank" rel="noopener noreferrer" href={project.node.url}>
                            <Img fluid={project.node.thumb.childImageSharp.fluid} className="portfolio-card__img"/>
                        </a>
                        <h3 className="portfolio-card__name">{project.node.nome}</h3>
                        <a href={project.node.url} target="_blank" className="button dark">Ver</a>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export const projectsQuery = graphql`
    query {
        allProjectsJson {
            edges {
              node {
                nome
                url
                thumb {
                  childImageSharp {
                    fluid(maxWidth: 1200) {
                        ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
    }
`;
