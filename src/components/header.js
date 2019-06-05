import React from "react"
import {Link} from "gatsby"
import perfilImg from "../img/rodrigo-queiroz.jpg"
import $ from "jquery"

export default class Header extends React.Component { 
    componentDidMount(){
        console.log("jQuery");
        $(".tabs > a").click(function(){
            if($(this).attr("href") === window.location.pathname){
                this.addClass("active");
            }
        });

        $( window ).scroll(function() {
            if($(window).scrollTop() > 412.79998779296875){
                $(".nav").css({
                    "position" : "fixed",
                });
            }else{
                $(".nav").css({
                    "position" : "static",
                });
            }
        });
    }

    render(){
        return(
            <header className="header container" id="top">
                <Link to="/">
                    <img title="Clique para ir para a home" className="perfil-img" src={perfilImg}/>
                    <h1 className="perfil-name">Rodrigo Queiroz</h1>
                </Link>
                <nav className="nav is-center">
                    <ul className="tabs">
                        <Link to="/portfolio">💻Portfólio</Link>
                        <Link to="/sobre">😀Sobre</Link>
                        <Link to="/empresas">🏢Empresas</Link>
                    </ul>
                </nav>
            </header>
        )
    }
}