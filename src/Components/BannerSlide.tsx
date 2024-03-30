import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

const BannerSlide = () => {
  const frontUrl = window.location.origin;

  const slidesPC = [`${frontUrl}/carousel/딸기_PC.jpg`, `${frontUrl}/carousel/MD_PC.jpg`];

  const slidesMO = [`${frontUrl}/carousel/딸기_MO.jpg`, `${frontUrl}/carousel/MD_MO.jpg`];

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getSlideComponent = (): string[] => {
    if (screenWidth <= 768) {
      return slidesMO;
    } else if (screenWidth > 768) {
      return slidesPC;
    }
    return [];
  };

  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        speed={300}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
      >
        <Arrow className="swiper-button-prev">
          <IoIosArrowDropleftCircle />
        </Arrow>
        {getSlideComponent().map(slide => (
          <SwiperSlide key={slide}>
            <SlideImg src={slide} />
          </SwiperSlide>
        ))}
        <Arrow className="swiper-button-next">
          <IoIosArrowDroprightCircle />
        </Arrow>
      </Swiper>
    </>
  );
};

const SlideImg = styled.img`
  width: 100%;
`;

const Arrow = styled.div`
  position: absolute;
  z-index: 2;
  cursor: pointer;
  font-size: 20px;
  width: 40px;
  height: 40px;

  &.swiper-button-prev svg {
    left: 10px;
    fill: black;
  }

  &.swiper-button-next svg {
    right: 10px;
    fill: black;
  }

  &::after {
    display: none;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export default BannerSlide;
