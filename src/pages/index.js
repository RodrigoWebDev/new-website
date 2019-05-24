import React from "react"
import Layout from "../components/layout"
import Title from "../components/title"
import { graphql } from 'gatsby';
import Img from "gatsby-image"
import portfolioCSS from "../styles/portfolio.css";

export default ({data}) => {
    return(
        <Layout>
            <Title>Portfólio</Title>
            <div className="portfolio container">
                {data.allProjectsJson.edges.map(project =>(
                    <div className="portfolio-card hvr-bob">
                        <a target="_blank" href={project.node.url}>
                            <Img fluid={project.node.thumb.childImageSharp.fluid} className="portfolio-card__img"/>
                        </a>
                        <h3 className="portfolio-card__name">{project.node.nome}</h3>
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
