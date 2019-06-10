import React from "react"
import slickCSS from "./slick.css"
import slickThemeCSS from "./slick-theme.css"
import Slider from "react-slick";
import {Link} from "gatsby"
import ProjectsJson from "../../data/projects.json"

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
                    {this.props.data.map((item, index) => {
                        if(index < 4){
                            return(
                                <div className="carouselCell">
                                    <a href={item.url} target="_blank">
                                        <span className="carousel__icon"><img src={`${require('../../img/portfolio/' + item.thumb)}`}/></span>
                                        <h2 className="carousel__title">{item.nome}</h2>
                                    </a>
                                </div>
                            )
                        }
                    })}
                </Slider>
                <Link className="button dark" to="/portfolio">👀 Ver portfólio completo</Link>
            </div>
        )
    }   
} 