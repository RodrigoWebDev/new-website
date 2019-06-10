import React from "react"
import Layout from "../components/layout"
import ProjectsJson from "../data/projects.json"

export default () => {
    return(
        <Layout>
            <div className="portfolio">
                {ProjectsJson.map((item, index) => {
                    return(
                        <div className="card">
                            <a href={item.url} rel="noopener noreferrer" target="_blank">
                                <img src={`${require('../img/portfolio/' + item.thumb)}`} className="portfolio-card__img"/>
                            </a>
                            <h3 className="portfolio-card__name">{item.nome}</h3>
                            <a href={item.url} target="_blank" className="button dark">Ver</a>
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
}