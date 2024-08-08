import React from 'react'
import './Industry.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Industry = () => {
  const SliderData = [
    {
      Image: "/Images/education.webp",
      Heading: "Education & eLearning",
      background: "#DF826C"
    },
    {
      Image: "/Images/sports.webp",
      Heading: "Sports & Gaming",
      background: "#F8FFD2"

    },
    {
      Image: "/Images/ecommerce.webp",
      Heading: "eCommerce & Retail",
      background: "#D0F288"

    },
    {
      Image: "/Images/food.webp",
      Heading: "Food & Beverages",
      background: "#8ADAB2"
    },
    {
      Image: "/Images/travel.webp",
      Heading: "Travel & Hospitality",
      background: "#8ADAB2"
    },
    {
      Image: "/Images/automation.webp",
      Heading: "Automotive Industry",
      background: "#8ADAB2"
    },
    {
      Image: "/Images/bank.png",
      Heading: " Banking & Finance",
      background: "#8ADAB2"
    },
    {
      Image: "/Images/media.webp",
      Heading: "Media & Entertainment",
      background: "#8ADAB2"
    },
    {
      Image: "/Images/health.webp",
      Heading: "Healthcare & Fitness",
      background: "#8ADAB2"
    },
    {
      Image: "/Images/estate.webp",
      Heading: "Real Estate",
      background: "#8ADAB2"
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Animation speed
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Time between slides
    responsive: [
        {
          breakpoint: 600, // Medium devices (tablets, 768px and up)
          settings: {
    dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        
      ],
  };

  return (
    <div className='Industry-container'>
      <h2 className='industry-heading'>Our Serving<span> INDUSTRIES</span></h2>
       
      <Slider className='Industry-slider' {...settings}>
        {SliderData.map((item, index) => (
          <div className="Industry-item" key={index}>
            <img src={item.Image} alt={`Slide ${index + 1}`} />
            <h4>{item.Heading}</h4>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Industry