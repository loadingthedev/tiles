import Image from "next/image";
import React from "react";

const FeatureCard = (props) => {
  return (
    <div className="single-feature-inner text-center">
      <div className="feature-icon">
        <Image src={props.image} className="svg" alt="" />
      </div>
      <h5>{props.title}</h5>
      <p>{props.text}</p>
    </div>
  );
};

export default FeatureCard;
