import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const SlideShow = () => {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true,

      autoplaySpeed: 2000,
      slidesToScroll: 1,
    };
  return (
    <div className="mx-auto max-w-7xl mt-4 ">
      <Carousel {...settings}>
        <Wrap>
          <img
            src="https://res.cloudinary.com/seeders/image/upload/v1677925956/tv_m0ac8n.png"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://res.cloudinary.com/dq4fj9ops/image/upload/v1677925956/headset_hhg3wy.png"
            alt=""
          />
        </Wrap>

        <Wrap>
          <img
            src="https://res.cloudinary.com/seeders/image/upload/v1677925956/laptop_b2bnnv.png"
            alt=""
          />
        </Wrap>
      </Carousel>
    </div>
  );
}

export default SlideShow

const Carousel = styled(Slider)`
     
     ul li button{
        position: absolute;
      top:50%;
     }
  ul li button {
    &:before {
      font-size: 20px;
      color: #d2caca;
      
      
    }
  }
  li.slick-active button::before {
    color: #0043c6;
  }
`;
const Wrap = styled.div`
    img{
      max-height:450px;
    }
`