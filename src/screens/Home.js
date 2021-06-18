import React, { useState, useEffect } from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import image1 from "../assests/1.jpg";
import image2 from "../assests/2.jpg";

import Layout from "../components/Layout";
import CategoryCard from "../components/CategoryCard";
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
//images

export default function Home() {
  return (
    <Layout>
      <div className="home">
        <div className="hero-container">
          <Swiper
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
          >
            <SwiperSlide>
              <div className="slider-image-container">
                <img src={image1} alt="" width="100%" />
                <div className="image-text-container">
                  <div className="heading-1">Luxury Faucets Collections</div>
                  <div className="heading-2">
                    FLAT 60% For first 30 customer{" "}
                  </div>
                  <button className="button">Shop Now</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-image-container">
                <img src={image2} alt="" width="100%" />
                <div className="image-text-container">
                  <div className="heading-1">Luxury Faucets Collections</div>
                  <div className="heading-2">
                    FLAT 60% For first 30 customer{" "}
                  </div>
                  <button className="button">Shop Now</button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="container mt-2">
        <div className="row">
          <div className="col-lg-4">
            <CategoryCard
              url="http://webaashi.com/TF/html/aashi-faucets/assets/img/collection/1-xs.jpg"
              name="Designer Faucets"
            />
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
    </Layout>
  );
}
