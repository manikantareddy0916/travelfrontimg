import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
//import img1 from '../public/heart-1192662_1280.jpg'

export function Materialuiex(props)
{
  const data = [
    {image: '/heart-1192662_1280.jpg' },// Path relative to the public directory
    {image:'/hi-res-sky-wallpaper-0gpzmedkpjg4zm2x.jpg'},
    {image: '/IMG_20230426_164334.jpg'}
    
  ];
  
    return (
        <div>
            {/* <h1>hii</h1>
            {data.map((ele, index) => (
        <img key={index} src={ele.image} alt={`Image ${index}`} />
      ))} */}

<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      {data.map((ele,i)=>{
              <img key={i} className="d-block w-100" src={ele.image} alt="First slide"/>
      })}
  </div>
    
  </div>
  {/* <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a> */}
</div>




            {/* <img src={data.image} alt='ok'/>
            <img src='/IMG_20230426_164334.jpg' alt='ok'/> */}
           
        </div>
       
    )
}
