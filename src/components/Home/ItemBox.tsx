import { UrlImage } from 'api/Urls';
import { IitemBox, Imovie, ImovieResults, ItvShow, ItvShowResults } from 'global/Home/Interfaces'
import React from 'react'

export default function ItemBox(props :{movies?:ImovieResults,tvShows?:ItvShowResults}) {
    console.log(props.movies,'props');
    
    return (
        <div className='itemBox'>
            <img className='itemBox_img' 
            src= {props.movies?.backdrop_path ? `${UrlImage.POSTER}${props.movies?.backdrop_path}` :''}/>
        </div>
    )
}
