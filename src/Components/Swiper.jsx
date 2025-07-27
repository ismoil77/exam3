import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import card1 from '../assets/case-card.png'
import card2 from '../assets/hover.png'
import card3 from '../assets/case-card (1).png'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../Components/styles.css'
export default function MySwiper() {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      navigation={true}
      
      modules={[Navigation]}
      className="mySwiper"
      
    >
      <SwiperSlide><img src={card1} className='dark:invert' alt="" /></SwiperSlide>
      <SwiperSlide><img src={card2} alt="" className='dark:invert'/></SwiperSlide>
      <SwiperSlide><img src={card3} alt="" className='dark:invert' /></SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
     
    </Swiper>
  );
}
