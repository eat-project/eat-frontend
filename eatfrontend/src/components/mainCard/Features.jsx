import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCube, Autoplay } from "swiper";
import { Icon } from "@iconify/react";
import "./Main.css";
import SwiperImg1 from "../../assets/swiper.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cube";

const Features = () => {
  return (
    <div className="features">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube, Autoplay]}
        effect={"cube"}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        grabCursor={true}
        loop={true}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        //autoplay={{
            //delay: 2500,
            //disableOnInteraction: false,
         // }}
      >
        <SwiperSlide>
        <div className="featuresSwiper">
        
        <h1>
        <Icon icon="material-symbols:phonelink-lock" />
        Assessment Integrity
        </h1>
        <hr className="featuresHr" />
            <p className="pLarge ">
            Our systems guarantee’s the integrity of the assessment. We achieve
            this through our robust AI features like in-app authentication
            attached to the automated proctoring.{" "}
          </p>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
            <div className="featuresSwiper">
            <p className="featuresText">
            Our systems guarantee’s the integrity of the assessment. We achieve
            this through our robust AI features like in-app authentication
            attached to the automated proctoring.{" "}
          </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="featuresSwiper">
            <p className="featuresText">
            Our systems guarantee’s the integrity of the assessment. We achieve
            this through our robust AI features like in-app authentication
            attached to the automated proctoring.{" "}
          </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="featuresSwiper">
            <p className="featuresText">
            Our systems guarantee’s the integrity of the assessment. We achieve
            this through our robust AI features like in-app authentication
            attached to the automated proctoring.{" "}
          </p>
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default Features;
