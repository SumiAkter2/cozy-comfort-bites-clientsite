import HeadingTitle from "../../Shared/HeadingTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "@smastrom/react-rating/style.css";
import img from "../../../assets/comma-comma.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import { Rating } from "@smastrom/react-rating";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get("reviews.json")
      .then((response) => {
        console.log(response.data);
        setReviews(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <section>
      <HeadingTitle
        subtitle={"What Our Clients Say"}
        heading={"Testimonials"}
      />
      <div>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id} review={review}>
              <div className="text-center mb-12 flex flex-col  items-center gap-y-4">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <img className="w-24 my-4" src={img} alt="comma-img" />
                <p>{review.details}</p>
                <h1 className="text-2xl text-yellow-600">{review.name}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
