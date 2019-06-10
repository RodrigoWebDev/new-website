import React from "react"
import Layout from "../components/layout"
import CompaniesJson from "../data/companies.json"

console.log(CompaniesJson);

export default () => {
    return(
        <Layout>
            <div className="portfolio">
                {CompaniesJson.map((item) => {
                    return(
                        <div className="card">
                            <a href={item.url} rel="noopener noreferrer" target="_blank">
                                <img src={`${require('../img/companies/' + item.thumb)}`} className="portfolio-card__img"/>
                            </a>
                            <h3 className="portfolio-card__name">{item.name}</h3>
                            <a href={item.url} target="_blank" className="button dark">Ver</a>
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
}