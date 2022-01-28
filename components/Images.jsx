import Image from "next/image";
import React from "react";
import Upload from "./Upload";
import blackTile from "../public/img/tiles/classic.svg";
import { useRecoilValue } from "recoil";
import { frameAtom } from "../lib/recoil-atoms";

function Images({ url }) {
  const frame = useRecoilValue(frameAtom);

  console.log(frame);

  console.log(url);
  return (
    <>
      <div className="d-flex" style={{ gap: "1rem", position: "relative" }}>
        <Image
          src={`/img/tiles/${frame}.svg`}
          width={250}
          height={250}
          className="TileFrame"
        />
        {/* <img src="img/tiles/classic.svg" alt="" className="TileFrame" /> */}
        <img src={url} alt="" className={`${frame}TileImage`} />
        {/* <Image src={url} height={200} width={200} className="TileImage" /> */}
      </div>
    </>
  );
}

export default Images;
