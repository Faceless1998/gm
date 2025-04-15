import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './SwiperOverrides.css'; // for Swiper-specific global styles

import styles from './Slider.module.css';

const Slider = () => {
  const slides = [
    {
      image: 'z1.jpg',
      title: 'Card One',
      description: 'Description for the first card',
    },
    {
      image: 'z2.jpg',
      title: 'Card Two',
      description: 'Description for the second card',
    },
    {
      image: 'z3.jpg',
      title: 'Card Three',
      description: 'Description for the third card',
    },
    {
      image: 'z4.jpg',
      title: 'Card Four',
      description: 'Description for the fourth card',
    },
    {
      image: 'z5.jpg',
      title: 'Card Five',
      description: 'Description for the fifth card',
    },
  ];

  return (
    <div className={styles.sliderContainer}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        slidesPerGroup={1}
        navigation
        pagination={{ clickable: true }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={styles.card}>
              <img
                src={require(`../assets/${slide.image}`)}
                alt={slide.title}
                className={styles.cardImage}
              />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{slide.title}</h3>
                <p className={styles.cardDescription}>{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
