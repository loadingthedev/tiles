import React, { useEffect, useRef, useState } from "react";
import { Card } from "react-bootstrap";
import upload from "../public/img/upload.svg";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { filesAtom } from "../lib/recoil-atoms";

export default function Upload({ width, height }) {
  const [files, setfiles] = useRecoilState(filesAtom);
  const ref = useRef(null);

  const handleChange = (e) => {
    e.preventDefault();
    setfiles([...files, e.target.files[0]]);
    e.target.value = null;
  };

  return (
    <>
      <Card
        style={{ width: width, minHeight: height }}
        className="text-center"
        onClick={() => ref.current.click()}
      >
        <Card.Body className="d-flex flex-column justify-content-center align-center">
          <Image src={upload} alt="" />
          <input
            ref={ref}
            accept="image/*"
            multiple=""
            type="file"
            autoComplete="off"
            tabIndex="-1"
            style={{ display: "none" }}
            onChange={(e) => handleChange(e)}
          ></input>
          <p>Upload Photos</p>
        </Card.Body>
      </Card>
    </>
  );
}
