import React, { useState, useEffect } from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import image1 from "../assests/1.jpg";
import image2 from "../assests/2.jpg";
import imagecat1 from "../assests/cardimage.png";
import imagecat2 from "../assests/cardimage1.png";
import imagecat3 from "../assests/cardimage2.png";
import company from "../assests/company.png";

import Layout from "../components/Layout";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
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
        <div className="text-center category-header">Products</div>
        <div
          className="row "
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <div className="col-lg-4 col-11 text-center">
            <CategoryCard url={imagecat1} name="Seat Covers" />
          </div>
          <div className="col-lg-4 col-11">
            <CategoryCard url={imagecat2} name="Flush tanks" />
          </div>
          <div className="col-lg-4 col-11 text-center">
            <CategoryCard url={imagecat3} name="Flush valve and Accessories" />
          </div>
        </div>
      </div>
      <div className="container" style={{ margin: "5rem auto" }}>
        <div className="text-center category-header">About us</div>
        <div className="row" style={{ margin: "5rem 0" }}>
          <div
            className="col-lg-6 col-12 "
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2rem",
            }}
          >
            <img src={company} alt="" width="90%" />
          </div>
          <div
            className="col-lg-6 col-12"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2rem",
            }}
          >
            <div
              className=""
              style={{
                width: "80%",
                fontSize: "1.3rem",
                lineHeight: "2.2rem",
                textAlign: "justify",
              }}
            >
              Flowtech boasts an team of first class talents and advance
              technology which keeps more steady and more perfect high
              performance products to global customers by pursuing spirit of
              innovation followed by Flowtech, as well as an R&D center
              furnished with top notch research and development equipments
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
