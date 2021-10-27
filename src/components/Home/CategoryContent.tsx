import { IcategoryContent, IitemBox } from 'global/Home/Interfaces'
import React from 'react'
import Item from './ItemBox'
export default function CategoryContent({title,movies,tvShows}:IcategoryContent) {
    const test = movies?.results
    const adu = test && test[0]
    console.log(adu, 'adu');
    
    
    return (
        <div className="home__category">
            <div className="container">
                <div className="home__category-content">
                    <div className="home__category-header">{title}</div>
                    <Item movies={adu}/>
                </div>
            </div>
        </div>
    )
}
