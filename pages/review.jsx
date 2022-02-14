import React, { useEffect, useState } from "react";
import { Button, Card, Col, Modal, Offcanvas, Row } from "react-bootstrap";
import { useRecoilState, useRecoilValue } from "recoil";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import MobileMenu from "../components/MobileMenu";
import Upload from "../components/Upload";
import Images from "../components/Images";
import {
  filesAtom,
  frameAtom,
  OrderAtom,
  pFilesAtom,
} from "../lib/recoil-atoms";
import Image from "next/image";
import { useRouter } from "next/router";

const tileThumb = [
  {
    name: "classic",
    path: "/img/title-thumb/classic-thumb.png",
    price: "200",
  },
  {
    name: "bold",
    path: "/img/title-thumb/bold-thumb.png",
    price: "200",
  },
  {
    name: "ever",
    path: "/img/title-thumb/ever-thumb.png",
    price: "200",
  },
  {
    name: "clean",
    path: "/img/title-thumb/clean-thumb.png",
    price: "200",
  },
  {
    name: "edge",
    path: "/img/title-thumb/clean-thumb.png",
    price: "200",
  },
];

export default function review() {
  // const files = useRecoilValue(filesAtom);
  const [previews, setPreviews] = useRecoilState(pFilesAtom);
  const [files, setFiles] = useRecoilState(filesAtom);
  // const [previews, setPreviews] = useState([]);
  const [frame, setFrame] = useRecoilState(frameAtom);
  const router = useRouter();
  const [orderState, setOrderState] = useRecoilState(OrderAtom);

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
          };
          reader.readAsDataURL(file.file);
        }
      });
    } else {
      setPreviews(null);
      setFiles([]);
    }
    return () => {
      // setPreviews([]);
    };
    // console.log(previews);
    // console.log("files", files);
  }, [files]);

  useEffect(() => {
    setOrderState(null);
  }, []);

  const checkOut = () => {
    setOrderState(null);
    if (previews.length > 0) {
      let images = previews.map((i) => i.file);
      const order = {
        TileType: frame,
        price: tileThumb?.filter((i) => i.name === frame)[0].price,
        images,
      };
      setOrderState(order);
      router.push("/checkout");
    } else {
      alert("Please Atleast select a Tile");
    }
  };

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
              <div className="d-flex justify-content-center align-items-center">
                <button
                  className="btn"
                  onClick={checkOut}
                  style={{ borderRadius: 20, width: 200, marginLeft: 20 }}
                >
                  CheckOut
                </button>
              </div>
            </div>
          </Col>
          <Col
            md={9}
            sm={6}
            style={{ backgroundColor: "#eee" }}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            {previews.length > 0 ? (
              <div className="TilesConatiner" id="TilesCon">
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
