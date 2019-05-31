import React from "react"
import Layout from "../components/layout"
import Title from "../components/title"
import Accordion from "../components/accordion"

export default () => {
    return(
        <Layout>
            <Title>Sobre mim</Title>
            <div className="container">
                <div className="about">
                    <p>Sou desnevolvedor front end, com foco em na criação de aplicações javascript de alto nível</p>
                </div>
                <div className="skills">
                    <Accordion />
                </div>
            </div>
        </Layout>
    )
}
