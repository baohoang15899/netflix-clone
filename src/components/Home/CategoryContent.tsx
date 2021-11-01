import { IcategoryContent, IitemBox } from 'global/Home/Interfaces'
import Slider from "react-slick";
import React from 'react'
import Item from './ItemBox'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CategoryType } from 'global/Home/Type';
import SliderComponent from 'global/SliderComponent'
export default function CategoryContent({ title, movies, tvShows, type }: IcategoryContent) {
    return (
        <div className="home__category">
            <div className="container">
                <div className="home__category-content">
                    <div className="home__category-header">{title}</div>
                    {type === CategoryType.MOVIE &&
                        <SliderComponent Component={
                            movies?.results?.map(item => {
                                return <Item type={type} key={item.id} data={item} />
                            })
                        } />
                    }
                    {type === CategoryType.TV &&
                        <SliderComponent Component={
                            tvShows?.results?.map(item => {
                                return <Item type={type} key={item.id} data={item} />
                            })
                        } />
                    }
                </div>
            </div>
        </div>
    )
}
