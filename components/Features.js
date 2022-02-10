import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Pagination, Autoplay]);

import SectionTitle from "./SectionTitle";
import FeatureCard from "./FeatureCard";

import nail from "../public/img/nail.svg";
import box from "../public/img/boxAndPlane.svg";
import medal from "../public/img/medal.svg";

const FEATURES_DATA = [
  {
    title: "No nails needed",
    text: "TOur frames stick to any wall.",
    image: nail,
  },
  {
    title: "Free worldwide shipping!",
    text: "At your doorstep in a week.",
    image: box,
  },
  {
    title: "Satisfaction guaranteed",
    text: "Not satisfied? Get a full refund.",
    image: medal,
  },
];

const Features = () => {
  const swiperParams = {
    slidesPerView: 3,
    slidesPerGroup: 3,
    centeredSlides: true,
    spaceBetween: 30,
    // autoplay: {
    //   delay: 3000,
    // },
    pagination: {
      el: "#features-paginations",
      type: "bullets",
      clickable: true,
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
      575: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerGroup: 2,
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      992: {
        slidesPerGroup: 3,
        slidesPerView: 3,
      },
    },
  };
  return (
    <section className="pb-50" id="features">
      <Container>
        {/* <Row className="justify-content-center">
          <Col md={12} lg={8}>
            <SectionTitle
              title="App Advance Features"
              text="Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt    mollit lorem ipsum anim id est laborum perspiciatis unde."
            />
          </Col>
        </Row> */}
        <Row className="justify-content-center mt-4">
          {/* <Col xl={10} lg={12} className="flex"> */}
          {/* <Swiper className="feature-carousel" {...swiperParams}> */}
          {FEATURES_DATA.map((feature, index) => (
            // <SwiperSlide key={`feature-post-${index}`}>
            <Col md={4} sm={12} key={{ index }}>
              <FeatureCard
                key={index}
                title={feature.title}
                text={feature.text}
                image={feature.image}
              />
            </Col>
            // </SwiperSlide>
          ))}
          {/* </Swiper> */}
          {/* <div
              id="features-paginations"
              className="swiper-pagination d-flex justify-content-center align-items-center"
            /> */}
          {/* </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
