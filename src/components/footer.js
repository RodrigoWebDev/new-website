import React from "react"
import footerCSS from "../styles/footer.css"
import github from "../img/github-logo.svg"
import linkedin from "../img/linkedin.svg"
import instagram from "../img/instagram.svg"

export default() => (
    <footer className="footer is-text-center">
        <div className="container">
            <p><a href="#top">🔝 voltar para o topo</a></p>
            Desenvolvido por mim <span>&#128102;</span>, na força do ódio! &#128127;
            <div className="footer-social">
                <a href="https://github.com/RodrigoWebDev" target="_blank"><img src={github}/></a>
                <a href="https://www.linkedin.com/in/rodrigo-queiroz-chagas/" target="_blank"><img src={linkedin}/></a>
                <a href="https://www.instagram.com/rodrigo.queiroz.chagas/" target="_blank"><img src={instagram}/></a>
            </div>
        </div>
    </footer>
)