import React, {useEffect,useState} from 'react'
import './Itemlist.css'
import {imageUrl} from '../../constants'
import axios from '../../axios'


function ItemList(props) {

  const[movies,setMovies] =useState([])

  useEffect(()=>{
    
    axios.get(props.url).then((response)=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      alert('Network Error')
    })
  },[props])

  return (
    <div className='row'>

      <h2 className='title_1'>{props.title}</h2>

      <div className="posters">
        {movies.map((obj)=>
          <img  className={props.isSmall ? 'smallPoster' : "poster" } src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
        )}
      </div>

    </div>
  )
}

export default ItemList
