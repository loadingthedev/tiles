import Image from "next/image";
import React from "react";
import Upload from "./Upload";

function Images({ url }) {
  console.log(url);
  return (
    <>
      <div className="d-flex" style={{ gap: "1rem" }}>
        <Image src={url} height={200} width={200} />
      </div>
    </>
  );
}

export default Images;
