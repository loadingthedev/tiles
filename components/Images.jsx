import Image from "next/image";
import React from "react";
import Upload from "./Upload";
import blackTile from "../public/img/tiles/black.05456af9.svg";

function Images({ url }) {
  console.log(url);
  return (
    <>
      <div className="d-flex" style={{ gap: "1rem", position: "relative" }}>
        {/* <Image src={blackTile} width={250} height={250} className="TileFrame" /> */}
        <img src="img/tiles/black.05456af9.svg" alt="" className="TileFrame" />
        <img src={url} alt="" className="TileImage" />
        {/* <Image src={url} height={200} width={200} className="TileImage" /> */}
      </div>
    </>
  );
}

export default Images;
