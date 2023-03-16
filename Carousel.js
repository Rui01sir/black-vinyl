import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Carousel() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/img/img1.jpg"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/img2.jpg"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/img3.jpg"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/img4.jpg"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/img5.jpg"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/img6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/img7.jpg"/>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}