import React, { Component } from "react";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div >
        
        <Slider {...settings}>
          <div className="box1">
            
          </div>
          <div className="box2">
            
          </div>
          <div className="box3">
            
          </div>
          <div className="box4">
        
          </div>
          <div className="box5">
            
          </div>
          <div className="box6">
            
          </div>
          <div className="box7">
            
          </div>
          <div className="box8">
            
          </div>
          <div className="box9">
            
          </div>
          <div className="box10">
            
          </div>
          
          

          
        </Slider>
      </div>
    );
  }
}
