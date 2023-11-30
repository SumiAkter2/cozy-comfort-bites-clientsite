import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import slider1 from "../../assets/home/slide1.jpg";
import slider2 from "../../assets/home/slide2.jpg";
import slider3 from "../../assets/home/slide3.jpg";
import slider4 from "../../assets/home/slide4.jpg";
import slider5 from "../../assets/home/slide5.jpg";
import HeadingTitle from "../Shared/HeadingTitle";

const Category = () => {
  return (
    <div className="max-w-5xl mx-auto my-24">
      <HeadingTitle heading={"order online"} subtitle={"from 10AM to 10PM "} />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className=" m-12 p-12 "
      >
        <SwiperSlide>
          <img src={slider1} alt="slider-img" />
          <h3 className="md:text-4xl text-2xl  uppercase text-center -mt-16 text-white font-bold">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="slider-img" />
          <h3 className="md:text-4xl text-2xl uppercase text-center -mt-16 font-bold text-white">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="slider-img" />
          <h3 className="md:text-4xl text-2xl uppercase text-center -mt-16 font-bold text-white">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="slider-img" />
          <h3 className="md:text-4xl text-2xl uppercase text-center -mt-16 text-white font-bold">
            Desserts
          </h3>
        </SwiperSlide>

        <SwiperSlide className="mb-24">
          <img src={slider5} alt="slider-img" />
          <h3 className="md:text-4xl text-2xl uppercase text-center -mt-16 text-white font-bold">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
