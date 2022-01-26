import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useRecoilState, useRecoilValue } from "recoil";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import MobileMenu from "../components/MobileMenu";
import Upload from "../components/Upload";
import Images from "../components/Images";
import { filesAtom } from "../lib/recoil-atoms";

export default function review() {
  const files = useRecoilValue(filesAtom);
  const [previews, setPreviews] = useState([]);

  useEffect(() => {
    if (files) {
      files.forEach((file) => {
        if (!file) return;
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviews([...previews, reader.result]);
        };
        reader.readAsDataURL(file);
      });
    } else {
      setPreviews(null);
    }
    // console.log(previews);
    // console.log("files", files);
  }, [files]);

  return (
    <Layout pageTitle="Robin Tiles">
      <Header />
      <MobileMenu />
      <section className="pt-100">
        <Row className="tilesContainer">
          <Col
            md={8}
            sm={6}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            {previews.length > 0 ? (
              <div className="TilesConatiner">
                {previews.map((i, id) => (
                  <Images url={i} key={id} />
                ))}
                <Upload width={200} height={200} />
              </div>
            ) : (
              // <Upload />
              <>
                <h4>Pick some photos to get started</h4>
                <Upload />
              </>
            )}
          </Col>
          <Col md={4} sm={6}></Col>
        </Row>
      </section>
    </Layout>
  );
}
