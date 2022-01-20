import React, { useEffect, useRef, useState } from "react";
import { Card } from "react-bootstrap";
import upload from "../public/img/upload.svg";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { filesAtom } from "../lib/recoil-atoms";

export default function Upload(props) {
  const [files, setfiles] = useRecoilState(filesAtom);
  const ref = useRef(null);

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.files);
    setfiles([...files, e.target.files[0]]);
  };

  return (
    <>
      <Card
        style={{ width: "18rem" }}
        className="text-center"
        onClick={() => ref.current.click()}
      >
        <Card.Body>
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
