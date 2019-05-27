import React from "react"
import {Link} from "gatsby"
import headerCSS from "../styles/header.css"
import Logo from "../img/logo.svg"

export default() => (
    <header className="header">
        <div className="container">
        <div className="logo-container">
            <Link to="/"><img className="logo" src={Logo} alt="Logo"/></Link>
        </div>
        <h1 className="header__siteName">RQueiroz</h1>
        <nav class="header__nav">
            <ul className="header__nav-list">
                <li><Link to="/">Portfólio</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/empresas">Empresas</Link></li>
            </ul>
        </nav>
        </div>
    </header>
)