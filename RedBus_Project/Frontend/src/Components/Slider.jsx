import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import card1 from "../assets/img/Vote_card_2026.png";
import card2 from "../assets/img/primo.webp";
import card3 from "../assets/img/rap.webp";
import card4 from "../assets/img/btt_app_card.webp";
import card5 from "../assets/img/lightning_fast_refund.webp";
import card6 from "../assets/img/Free_Cancellation_New1.webp";
import card7 from "../assets/img/referAndEarn.webp";

const cards = [
  { id: 1, image: card1 },
  { id: 2, image: card2 },
  { id: 3, image: card3 },
  { id: 4, image: card4 },
  { id: 5, image: card5 },
  { id: 6, image: card6 },
  { id: 7, image: card7 },
];

const Slider = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      <h2 className="text-3xl font-bold mb-5">What's New</h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={18}
        slidesPerView={4}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {cards.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="overflow-hidden rounded-2xl shadow-md cursor-pointer bg-gray-100">
              <img src={item.image}  alt={`Card ${item.id}`}
                className="w-full h-[155px] object-fit" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;



