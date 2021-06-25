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
import { useInView } from "react-intersection-observer";
import {motion} from 'framer-motion'
import Heading from "../components/Heading"
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
//images
export default function Home() {

  const  CardInView = useInView({
    threshold:0.5
  })

  const  AboutInView = useInView({
    threshold:0.5
  })


  const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      ease:"linear"
    }
  }
};

const card = {
  hidden: { opacity: 0,y:100 },
  show: { opacity: 1 ,y:0}
};

  return (
    <Layout>
      <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{delay:0.2}}} className="home">
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
                  <button className="button">Send Inquery</button>
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
                  <button className="button">Send Inquery</button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </motion.div>
      <div className="container mt-2">
        <Heading text="products"/>
        <motion.div
          ref={CardInView.ref}
          variants={container}
          initial="hidden"
          animate={CardInView.inView ? "show":"hidden"}
          className="row "
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <motion.div variants={card}   className="col-lg-4 col-11 text-center">
            <CategoryCard CardInView={CardInView}  url={imagecat1} name="Seat Covers" />
          </motion.div>
          <motion.div variants={card}  className="col-lg-4 col-11">
            <CategoryCard CardInView={CardInView} url={imagecat2} name="Flush tanks" />
          </motion.div>
          <motion.div variants={card} className="col-lg-4 col-11 text-center">
            <CategoryCard CardInView={CardInView} url={imagecat3} name="Flush valve and Accessories" />
          </motion.div>
        </motion.div>
      </div>
      <div className="container" style={{ margin: "5rem auto" }}>
        <Heading text="about us" />
        <div className="row" style={{ margin: "5rem 0" }}>
          <motion.div
          ref={AboutInView.ref}
          transition={{ease:"linear"}}
          initial={{x:-100,opacity:0}}
          animate={AboutInView.inView?{x:0,opacity:1}:{x:-100,opacity:0}}
            className="col-lg-6 col-12 "
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2rem",
            }}
          >
            <img src={company} alt="" width="90%" />
          </motion.div>
          <div
            className="col-lg-6 col-12"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2rem",
            }}
          >
            <motion.div
            transition={{ease:"linear"}}
             initial={{x:100,opacity:0}}
          animate={AboutInView.inView?{x:0,opacity:1}:{x:100,opacity:0}}
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
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
