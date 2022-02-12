import React, { useEffect, useState } from "react";
import { Button, Card, Col, Modal, Offcanvas, Row } from "react-bootstrap";
import { useRecoilState, useRecoilValue } from "recoil";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import MobileMenu from "../components/MobileMenu";
import Upload from "../components/Upload";
import Images from "../components/Images";
import { filesAtom, frameAtom, pFilesAtom } from "../lib/recoil-atoms";
import Image from "next/image";

const tileThumb = [
  {
    name: "classic",
    path: "/img/title-thumb/classic-thumb.png",
  },
  {
    name: "bold",
    path: "/img/title-thumb/bold-thumb.png",
  },
  {
    name: "ever",
    path: "/img/title-thumb/ever-thumb.png",
  },
  {
    name: "clean",
    path: "/img/title-thumb/clean-thumb.png",
  },
  {
    name: "edge",
    path: "/img/title-thumb/clean-thumb.png",
  },
];

export default function review() {
  const files = useRecoilValue(filesAtom);
  const pfiles = useRecoilValue(pFilesAtom);
  const [previews, setPreviews] = useState([]);
  const [frame, setFrame] = useRecoilState(frameAtom);

  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    if (files) {
      files.forEach((file) => {
        if (file.uri) {
          setPreviews([...previews, { id: file.id, file: file.uri }]);
        } else {
          if (!file) return;
          const reader = new FileReader();
          reader.onloadend = () => {
            setPreviews([...previews, { id: file.id, file: reader.result }]);
            // setPreviews([...previews, { id: file.id, file: file.dataUrl }]);
          };
          reader.readAsDataURL(file.file);
        }
      });
    } else {
      setPreviews(null);
    }
    // console.log(previews);
    // console.log("files", files);
  }, [files]);

  return (
    <Layout pageTitle="Robin Tiles">
      <Header extraClassName="color" page="review" />
      <MobileMenu />

      <section style={{ paddingTop: 74 }}>
        <Row className="tilesContainer">
          <Col md={3} sm={6}>
            <div className="h-100  TileSelectDrawer">
              {tileThumb.map((id, idx) => (
                <div
                  className={`TiteThumb ${frame === id.name && "activeTile"}`}
                  key={idx}
                  onClick={() => setFrame(id.name)}
                >
                  <Image src={id.path} alt={id.name} width={65} height={65} />
                  <span className="tileText">{id.name}</span>
                </div>
              ))}
            </div>
          </Col>
          <Col
            md={9}
            sm={6}
            style={{ backgroundColor: "#eee" }}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            {previews.length > 0 ? (
              <div className="TilesConatiner">
                {previews.map((i, index) => (
                  <Images url={i} key={index} />
                ))}
                <Upload width={200} height={200} setPreviews={setPreviews} />
              </div>
            ) : (
              // <Upload />
              <>
                <h4>Pick some photos to get started</h4>
                <Upload setPreviews={setPreviews} />
              </>
            )}
          </Col>
        </Row>
      </section>
    </Layout>
  );
}
