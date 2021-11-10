import { IcategoryContent, IitemBox } from 'global/Home/Interfaces'
import Slider from "react-slick";
import React from 'react'
import Item from './ItemBox'
import { Swiper, SwiperSlide } from "swiper/react";
import { CategoryType } from 'global/Home/Type';
import SliderComponent from 'global/SliderComponent'
export default function CategoryContent({ title, movies, tvShows, type }: IcategoryContent) {
    return (
        <div className="home__category">
            <div className="container">
                <div className="home__category-header">{title}</div>
                <div className="home__category-content">
                    {type === CategoryType.MOVIE &&
                        <SliderComponent Component={
                            movies?.results?.map(item => {
                                if (item.backdrop_path && item.poster_path) {
                                    return <SwiperSlide key={item.id}>
                                        <Item mediaType={type} key={item.id} data={item} />
                                    </SwiperSlide>
                                }
                            })
                        } />
                    }
                    {type === CategoryType.TV &&
                        <SliderComponent Component={
                            tvShows?.results?.map(item => {
                                if (item.backdrop_path && item.poster_path) {
                                    return <SwiperSlide key={item.id}>
                                        <Item mediaType={type} key={item.id} data={item} />
                                    </SwiperSlide>
                                }
                            })
                        } />
                    }
                </div>
            </div>
        </div>
    )
}
