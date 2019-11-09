import React from "react";
import Lottie from "react-lottie";
import animationData from "./star-success.json";

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

export const SuccessLottie = () => <Lottie options={defaultOptions} />;
