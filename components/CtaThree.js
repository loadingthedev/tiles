import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import img1 from "../public/img/icons/solution1.svg";
import img2 from "../public/img/feature/user-interact2.png";
import Image from "next/image";

const CtaThree = () => {
  return (
    <section className="pt-120 pb-120">
      <Container>
        <Row>
          <Col lg={7} sm={7}>
            <div className="user-interact-inner">
              <div className="interact-icon">
                <Image src={img1} className="svg" alt="" />
              </div>
              <h2>The magic frame that sticks to any surface</h2>
              <p>
                Get your photos in stylish frames that stick directly to your
                wall and leave no damage behind!
              </p>
              {/* <a href="#" className="btn">
                Get Started
              </a> */}
            </div>
          </Col>
          <Col lg={5} sm={5}>
            <div>
              {/* <Image src={img2} alt="" /> */}
              <video autoPlay loop muted>
                <source type="video/mp4" src="/video/unbox-reel.mp4" />
              </video>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CtaThree;
