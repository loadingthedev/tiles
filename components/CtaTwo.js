import Image from "next/image";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import img1 from "../public/img/feature/user-interact.png";
import img2 from "../public/img/icons/teamwork.svg";

const CtaTwo = () => {
  return (
    <section className="bg-2 pt-120 pb-120">
      <Container>
        <Row>
          <Col lg={7} sm={7}>
            <div className="user-interact-image">
              <Image src={img1} alt="" />
            </div>
          </Col>
          <Col lg={5} sm={5}>
            <div className="user-interact-inner">
              <div className="interact-icon">
                <Image src={img2} className="svg" alt="" />
              </div>
              <h2>Interact With Your Users On Every Single Platform</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour.
              </p>
              <a href="#" className="btn">
                Get Started
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CtaTwo;
