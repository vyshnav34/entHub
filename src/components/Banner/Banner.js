import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
      <div className="content">
        <h1 className='title'>Title</h1>
        <div className="banner_button">
            <button className='button'>Play</button>
            <button className='button'>My list</button>
        </div>
        <h1 className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, fugit aperiam. Alias, quasi nesciunt ducimus
         cumque illum voluptatem id aperiam debitis ea sapiente deserunt saepe tenetur doloribus consequuntur facere praesentium odit magni? 
         Cumque similique sunt eos repudiandae unde? Odit, voluptatum!</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}
 
export default Banner
