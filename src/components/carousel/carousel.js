import React from "react"
import slickCSS from "./slick.css"
import slickThemeCSS from "./slick-theme.css"
import Slider from "react-slick";

export default class Carousel extends React.Component{
    render(){
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                        autoplay: true,
                        autoplaySpeed: 2000,
                      }
                }
            ]
        };
        return(
            <div className="carousel">
                <Slider {...settings}>
                    <div className="carouselCell">
                        <span className="carousel__icon">📱</span>
                        <h2 className="carousel__title">PWA</h2>
                        <p>Desenvolvo web apps que funcionam offline, e quando acessados pelo celular simulam funções de app nativo</p>
                    </div>
                    <div className="carouselCell">
                        <span className="carousel__icon">💻</span>
                        <h2 className="carousel__title">SPA</h2>
                        <p>Desenvolvo aplicações web de pagina unica super rápidas, que não necessitam de carregamento constante para funcionar</p>
                    </div>
                    <div className="carouselCell">
                        <span className="carousel__icon">🏪</span>
                        <h2 className="carousel__title">e-commerce</h2>
                        <p>Desenvolvo e-commerce usando plataformas conhecidas como : Shopfy, Tray, Linx, Wordpress e muitas outras</p>
                    </div>
                    <div className="carouselCell">
                        <span className="carousel__icon">⌨</span>
                        <h2 className="carousel__title">Websites</h2>
                        <p>Sites instucionais, Landing pages, Hotsites, Blogs</p>
                    </div>
                    <div className="carouselCell">
                        <span className="carousel__icon">📃</span>
                        <h2 className="carousel__title">Email Marketing</h2>
                        <p>Desenvolvo templates personalizados para ações de email marketing</p>
                    </div>
                </Slider>
            </div>
        )
    }   
} 