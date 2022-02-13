import React, { useEffect, useRef, useState } from "react";
import { Card } from "react-bootstrap";
import upload from "../public/img/upload.svg";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { filesAtom } from "../lib/recoil-atoms";

export default function Upload({ width, height }) {
  const [files, setfiles] = useRecoilState(filesAtom);
  const ref = useRef(null);

  // https://res.cloudinary.com/loadingthelife/image/upload/w_250,h_250,c_fill/v1644495667/Fimage/bretbivguigkdokfkzka.jpg

  const handleChange = async (e) => {
    e.preventDefault();

    const fData = new FormData();
    fData.append("file", e.target.files[0]);
    fData.append("upload_preset", "obztile");

    const data = await fetch(
      "https://api.cloudinary.com/v1_1/loadingthelife/image/upload",
      {
        method: "POST",
        body: fData,
      }
    ).then((r) => r.json());

    setfiles([
      ...files,
      {
        id: e.target.files[0].name?.split(".")[0],
        file: e.target.files[0],
        uri: data.secure_url,
      },
    ]);

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
