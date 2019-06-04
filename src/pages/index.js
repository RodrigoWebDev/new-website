import React from "react"
import Layout from "../components/layout"
import Carousel from "../components/carousel/carousel"
import { graphql } from 'gatsby';

export default ({data}) => {
    return(
        <Layout>
            <section className="services">
                <h2 className="section-title">Serviços</h2>
                <Carousel/>
            </section>
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
