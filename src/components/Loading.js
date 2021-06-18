import React from "react";
import logo from "../assests/Flowtech.png";
import Lottie from "react-lottie";
import animationData from "../assests/40871-progress-bar-red.json";

export default function Loading() {
  return (
    <div className="loading-container">
      <img src={logo} alt="" width={"25vw"} />
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
        width={"25vw"}
        height={100}
      />
    </div>
  );
}
