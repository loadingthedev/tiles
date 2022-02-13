import Image from "next/image";
import React from "react";
import Upload from "./Upload";
import blackTile from "../public/img/tiles/classic.svg";
import { useRecoilState, useRecoilValue } from "recoil";
import { frameAtom, pFilesAtom } from "../lib/recoil-atoms";
import { MdDelete } from "react-icons/md";

function Images({ url }) {
  const frame = useRecoilValue(frameAtom);
  const [previews, setPreviews] = useRecoilState(pFilesAtom);
  const removeframe = (name) => {
    console.log(name);
    const filteredPrev = previews.filter((item) => item.id !== name.id);
    setPreviews(filteredPrev);
  };

  return (
    <>
      <div
        className="d-flex"
        id="frameTile"
        style={{ gap: "1rem", position: "relative" }}
      >
        <Image
          src={`/img/tiles/${frame}.svg`}
          width={250}
          height={250}
          className="TileFrame"
        />
        <span className="removeBtn" onClick={() => removeframe(url)}>
          <MdDelete />
        </span>
        {/* <img src="img/tiles/classic.svg" alt="" className="TileFrame" /> */}
        <img src={url.file} alt="" className={`${frame}TileImage`} />
        {/* <Image src={url} height={200} width={200} className="TileImage" /> */}
      </div>
    </>
  );
}

export default Images;
