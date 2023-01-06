import React, { useEffect, useState } from 'react'
import { API_KEY ,imageUrl} from '../../constants'
import './Banner.css'
import axios from '../../axios'

function Banner() {
  const[movie,setMovie]=useState([])
  useEffect(()=>{
    axios.get(`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate `).then((response)=>{
      console.log(response.data.results[0])
      setMovie(response.data.results[0])
    })
  },[])

  
  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : " "})` }} className='banner'>
      <div className="content">
        <h1 className='title'>{movie  ? movie.title : ""}</h1> 
        <div className="banner_button">
            <button className='button'>Play</button>
            <button className='button'>My list</button>
        </div>
        <h1 className='description'>{movie ? movie.overview : " "}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}
 
export default Banner
