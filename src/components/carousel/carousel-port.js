import React from "react"
import slickCSS from "./slick.css"
import slickThemeCSS from "./slick-theme.css"
import Slider from "react-slick";
import {Link} from "gatsby"

//Deve ser removido depois
import img1 from "../../img/portfolio/biotwo.jpg"
import img2 from "../../img/portfolio/react-watch.jpg"
import img3 from "../../img/portfolio/artcoco.jpg"

export default class CarouselPort extends React.Component{
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
                        <a href="https://codepen.io/RodrigoWebDev/full/xNyMzM" target="_blank">
                            <span className="carousel__icon"><img src={img2}/></span>
                            <h2 className="carousel__title">React Watch App</h2>
                        </a>
                    </div>
                    <div className="carouselCell">
                        <a href="https://www.biotwo.com.br/" target="_blank">
                            <span className="carousel__icon"><img src={img1}/></span>
                            <h2 className="carousel__title">Biotwo</h2>
                        </a>
                    </div>
                    <div className="carouselCell">
                        <a href="https://www.artcocojoias.com.br" target="_blank">
                            <span className="carousel__icon"><img src={img3}/></span>
                            <h2 className="carousel__title">Loja Artcoco</h2>
                        </a>
                    </div>
                </Slider>
                <Link className="button dark" to="/portfolio">👀 Ver portfólio completo</Link>
            </div>
        )
    }   
} 