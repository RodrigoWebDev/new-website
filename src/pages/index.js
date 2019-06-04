import React from "react"
import Layout from "../components/layout"
import Carousel from "../components/carousel/carousel"
import CarouselPort from "../components/carousel/carousel-port"
import { graphql } from 'gatsby';
import Whatsapp from "../img/whatsapp.svg"
import {Link} from "gatsby"

export default ({data}) => {
    return(
        <Layout>
            <section className="services">
              <h2 className="section-title">💼 Serviços</h2>
              <Carousel/>
            </section>

            <section className="portfolio-home">
              <h2 className="section-title">💻 Portfólio</h2>
              <CarouselPort/>
            </section>

            <section className="contact">
              <div className="contact-inner">
                <h2 className="section-title">📞 Contato</h2>
                <a className="contact-icon" target="_blank" href="https://api.whatsapp.com/send?1=pt_BR&phone=556192191727"><img src={Whatsapp}/> 61992191727</a>
                <a href="mailto:rodrigo.queiroz.chagas@gmail.com"><span>📧</span> rodrigo.queiroz.chagas@gmail.com</a>
              </div>
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
