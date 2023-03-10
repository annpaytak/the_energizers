import { useState, useEffect } from "react";
import styled from "@emotion/styled";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import { breakpointsNums, colors } from "../variables";
import { SectionHeadlineSmall } from "../mixins";

import { LeftArrowIcon } from "../assets/icons/icons";
import Gallery1 from "../assets/gallery_1.png";
import Gallery2 from "../assets/gallery_2.png";
import Gallery3 from "../assets/gallery_3.png";
import Gallery4 from "../assets/gallery_4.png";
import Gallery5 from "../assets/gallery_5.png";
import Gallery6 from "../assets/gallery_6.png";
import Gallery7 from "../assets/gallery_7.png";
import Gallery8 from "../assets/gallery_8.png";

export function Gallery() {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < breakpointsNums.md) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const gallery = [
    Gallery1,
    Gallery2,
    Gallery3,
    Gallery4,
    Gallery5,
    Gallery6,
    Gallery7,
    Gallery8,
  ];

  return (
    <GallerySection id="gallery">
      <GalleryHeadlineWrapper>
        <GalleryArrowButton
          ref={(node) => setPrevEl(node)}
          className="swiper-button-prev"
        >
          <LeftArrowIcon />
        </GalleryArrowButton>
        <SectionHeadlineSmall content="03">Gallery</SectionHeadlineSmall>
        <GalleryArrowButton
          ref={(node) => setNextEl(node)}
          className="swiper-button-next"
        >
          <RightArrowIcon />
        </GalleryArrowButton>
      </GalleryHeadlineWrapper>
      <Swiper
        slidesPerView={isMobile ? 2 : 4}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{ prevEl, nextEl }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        spaceBetween={0}
      >
        {gallery.map((image) => (
          <SwiperSlide key={image}>
            <GallerySlide src={image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </GallerySection>
  );
}

const GallerySection = styled.section`
  position: relative;
  background-color: ${colors.black};

  color: ${colors.white};

  .swiper-button-next,
  .swiper-button-prev {
    svg {
      height: 100px;
    }
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    content: "";
  }
`;

const GalleryArrowButton = styled.button`
  display: none;
  height: 100%;
  position: static;
  margin: 0;
  width: 3rem;

  &:first-of-type {
    margin-left: 1.5rem;
  }
  &:last-of-type {
    margin-right: 1.5rem;
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;

const RightArrowIcon = styled(LeftArrowIcon)`
  position: static;
  transform: rotate(180deg);
`;

const GallerySlide = styled.img`
  width: 50vw;
  height: auto;

  @media (min-width: 768px) {
    width: 25vw;
  }
`;

const GalleryHeadlineWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
