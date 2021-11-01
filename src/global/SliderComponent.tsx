import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faChevronLeft,faChevronRight } from '@fortawesome/free-solid-svg-icons'
function SampleNextArrow(props?: any) {
    const { className, style, onClick } = props;
    return (
        <Icon className='arrow' size='2x' onClick={onClick} icon={faChevronRight} />
    );
}

function SamplePrevArrow(props?: any) {
    const { className, style, onClick } = props;
    return (
        <Icon className='arrow' size='2x' onClick={onClick} icon={faChevronLeft} />
    );
}


export default function SliderComponent({ Component }: any) {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: true,
        draggable: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Slider {...settings}>
            {Component}
        </Slider>
    )
}
