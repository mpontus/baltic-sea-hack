import React, { useEffect, useRef } from "react";
import { spring } from "react-flip-toolkit";

export const AnimatedForm = ({ children, onComplete, ...rest }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const squares = [...containerRef.current.children];
    squares.forEach((el, i) => {
      spring({
        config: "wobbly",
        values: {
          translateY: [-15, 0],
          opacity: [0, 1]
        },
        onUpdate: ({ translateY, opacity }) => {
          el.style.opacity = opacity;
          el.style.transform = `translateY(${translateY}px)`;
        },
        delay: i * 125,
        onComplete
      });
    });
  }, [onComplete]);

  return (
    <form ref={containerRef} {...rest}>
      {children}
    </form>
  );
};
