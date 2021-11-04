import React from 'react'
import SwiperCore, { Navigation, Lazy, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
// import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
// import { faChevronLeft,faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function SliderComponent({ Component }: any) {
    const setting = {
        navigation: true,
        spaceBetween: 2,
        watchOverflow: true,
        lazy: true,
        enabled: true,
        pagination: {
            "clickable": false
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 0,
            },
            400: {
                slidesPerView: 1.9,
                slidesPerGroup: 2,
            },
            800: {
                slidesPerView: 4.45,
                slidesPerGroup: 4,
            },
            992: {
                slidesPerView: 5.45,
                slidesPerGroup: 5,
                noSwiping: true,
                noSwipingClass: 'swiper-slide',
            }
        }
    }
    SwiperCore.use([Navigation, Lazy, Pagination]);
    return (
        <Swiper {...setting} >
            {Component}
        </Swiper>
    )
}
