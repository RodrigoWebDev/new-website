import React from "react"
import $ from "jquery"
import slickCSS from "./slick.css"
import slickThemeCSS from "./slick-theme.css"
import Slick from "./slick"

export default class Carousel extends React.Component{

    componentDidMount(){
        $(".carousel").slick();
    }

    render(){
        return(
            <div className="carousel">
                <div>
                    <span className="carousel__icon">📱</span>
                    <h2 className="carousel__title">PWA</h2>
                    <p>Desenvolvo web apps que funcionam offline, e quando acessados pelo celular simulam funções de app nativo</p>
                </div>
                <div>
                    <span className="carousel__icon">💻</span>
                    <h2 className="carousel__title">SPA</h2>
                    <p>Desenvolvo aplicações web de pagina unica super rápidas, que não necessitam de carregamento constante para funcionar</p>
                </div>
                <div>
                    <span className="carousel__icon">🏪</span>
                    <h2 className="carousel__title">e-commerce</h2>
                    <p>Desenvolvo e-commerce usando plataformas conhecidas como : Shopfy, Tray, Linx, Wordpress e muitas outras</p>
                </div>
                <div>
                    <span className="carousel__icon">⌨</span>
                    <h2 className="carousel__title">Websites</h2>
                    <p>Sites instucionais, Landing pages, Hotsites, Blogs</p>
                </div>
                <div>
                    <span className="carousel__icon">📃</span>
                    <h2 className="carousel__title">Email Marketing</h2>
                    <p>Desenvolvo templates personalizados para ações de email marketing</p>
                </div>
            </div>
        )
    }   
} 