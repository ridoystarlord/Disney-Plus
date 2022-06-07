import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from 'react-bootstrap';
import "./ImageSlider.css"
import sliderimg1 from "../../images/slider-badging.jpg"
import sliderimg2 from "../../images/slider-scale.jpg"
import sliderimg3 from "../../images/slider-badag.jpg"
import sliderimg4 from "../../images/slider-scales.jpg"

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        arrows:false
      };
    return (
        <Container>
            <Slider {...settings}>
                <div className='img-slider-border'>
                    <img src={sliderimg1} alt="" srcset="" width="100%" />
                </div>
                <div className='img-slider-border'>
                    <img src={sliderimg2} alt="" srcset="" width="100%" />
                </div>
                <div className='img-slider-border'>
                    <img src={sliderimg3} alt="" srcset="" width="100%"/>
                </div>
                <div className='img-slider-border'>
                    <img src={sliderimg4} alt="" srcset=""  width="100%"/>
                </div>
                
            </Slider>
        </Container>
    );
};

export default ImageSlider;