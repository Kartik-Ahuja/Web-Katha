import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Portfolio.css';

const Portfolio = () => {
  const SliderData = [
    {
      Image: "image1",
      Heading: "Web Development 1",
      Para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas non suscipit cupiditate odit laudantium iure?"
    },
    {
      Image: "image2",
      Heading: "Web Development 2",
      Para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas non suscipit cupiditate odit laudantium iure?"
    },
    {
      Image: "image3",
      Heading: "Web Development 3",
      Para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas non suscipit cupiditate odit laudantium iure?"
    },
    {
      Image: "image4",
      Heading: "Web Development 4",
      Para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas non suscipit cupiditate odit laudantium iure?"
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Animation speed
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Time between slides
    responsive: [
        {
          breakpoint: 600, // Medium devices (tablets, 768px and up)
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        
      ],
  };

  return (
    <>
    
      <h2 id='Portfolio' style={{marginTop:"50px" , fontSize:"1.6rem" , textShadow: "2px 4px 3px rgba(204, 204, 204, 1)"}}>Our <span>Portfolio</span></h2>

      <Slider className='slider-container'{...settings}>
        {SliderData.map((item, index) => (
          <div className="Slider-item" key={index}>
            <img src={item.Image} alt={`Slide ${index + 1}`} />
            <h3>{item.Heading}</h3>
            <p>{item.Para}</p>
            <button className="Learn-more-button">Learn more</button>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Portfolio;
