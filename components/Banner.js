import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import shape1 from "../public/img/banner/shaps1.png";
import shape2 from "../public/img/banner/shaps2.png";
import shape3 from "../public/img/banner/shaps3.png";
import shape4 from "../public/img/banner/shaps4.png";
import shape5 from "../public/img/banner/shaps5.png";
import shape6 from "../public/img/banner/shaps6.png";
import shape7 from "../public/img/banner/shaps7.png";

import bannerMoc from "../public/img/banner/hero_image.jpg";
import Image from "next/image";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <div className="banner-area-inner">
      <div className={`banner-inner-area banner-area1`}>
        <Container>
          <Row className="align-items-center">
            <Col md={8} lg={6} xl={5}>
              <div className="banner-text-inner">
                <div className="banner-shape-wrap">
                  <div className="banner-shape-inner">
                    <Image
                      src={shape1}
                      alt=""
                      className="shape shape1 rotate3d"
                    />
                    <Image
                      src={shape2}
                      alt=""
                      className="shape shape2 rotate2d"
                    />
                    <Image
                      src={shape3}
                      alt=""
                      className="shape shape3 rotate-2d"
                    />
                    <Image
                      src={shape4}
                      alt=""
                      className="shape shape4 rotate3d"
                    />
                    <Image
                      src={shape5}
                      alt=""
                      className="shape shape5 rotate2d"
                    />
                    <Image
                      src={shape6}
                      alt=""
                      className="shape shape6 rotate-2d"
                    />
                    <Image
                      src={shape7}
                      alt=""
                      className="shape shape7 rotate3d"
                    />
                  </div>
                </div>

                <h1>Turn your photos into stunning wall art</h1>
                <p>
                  Design beautiful walls filled with memories using your
                  favorite photos
                </p>
                <p>Free worldwide shipping!</p>
                {/* <a href="#" className="btn">
                  Download App
                </a> */}
                {/* <Link href="/review"> */}
                <a href="/review" className="btn">
                  Lets Go
                </a>
                {/* </Link> */}
              </div>
            </Col>
            <Col md={4} lg={5} className="offset-lg-1  offse-xl-2">
              <div className="banner-image">
                <Image src={bannerMoc} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
