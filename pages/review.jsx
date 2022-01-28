import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useRecoilState, useRecoilValue } from "recoil";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import MobileMenu from "../components/MobileMenu";
import Upload from "../components/Upload";
import Images from "../components/Images";
import { filesAtom, frameAtom } from "../lib/recoil-atoms";
import Image from "next/image";

const tileThumb = [
  {
    name: "classic",
    path: "/img/title-thumb/classic-thumb.png",
  },
  {
    name: "bold",
    path: "/img/title-thumb/classic-thumb.png",
  },
];

export default function review() {
  const files = useRecoilValue(filesAtom);
  const [previews, setPreviews] = useState([]);
  const [frame, setFrame] = useRecoilState(frameAtom);

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
          <Col md={3} sm={6}>
            <div className="h-100">
              {tileThumb.map((id, idx) => (
                <div
                  className="TiteThumb"
                  key={idx}
                  onClick={() => setFrame(id.name)}
                >
                  <Image src={id.path} alt={id.name} width={65} height={65} />
                  <span>{id.name}</span>
                </div>
              ))}

              {/* <Card>
                <Card.Body>This is some text within a card body.</Card.Body>
              </Card>
              <Card>
                <Card.Body>This is some text within a card body.</Card.Body>
              </Card>
              <Card>
                <Card.Body>This is some text within a card body.</Card.Body>
              </Card> */}
            </div>
          </Col>
          <Col
            md={9}
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
        </Row>
      </section>
    </Layout>
  );
}
