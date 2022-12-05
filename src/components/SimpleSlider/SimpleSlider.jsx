import React, { Component } from "react";
import Slider from "react-slick";

import Testimonial from "../testimonial/Testimonial";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./SimpleSlider.scss"

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

function NextArrow(props) {
  const { onClick} = props;
  return (
    <div className="arrow arrow-right" onClick={onClick}>
      <IoIosArrowForward />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="arrow arrow-left" onClick={onClick}>
      <IoIosArrowBack />
    </div>
  );
}

export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };
      return (
        <div>
          <Slider {...settings}>
            <Testimonial/>
            <Testimonial/>
            <Testimonial/>
          </Slider>
        </div>
      );
    }
  }