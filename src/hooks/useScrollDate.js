import { useEffect, useState } from "react";
import useWindowSize from "./useWindowSize";

const useScrollDate = (callback) => {
  const scrollData = {
    ease: 0.1,
    current: 0,
    previos: 0,
    rounded: 0,
    difference: 0,
    acceleration: 0,
    velocity: 0,
    skew: 0,
  };

  const { height } = useWindowSize();

  const scroll = () => {
    scrollData.current = window.scrollY;
    scrollData.previos +=
      (scrollData.current - scrollData.previos) * scrollData.ease;
    scrollData.rounded = Math.round(scrollData.previos * 100) / 100;
    scrollData.difference = scrollData.current - scrollData.rounded;
    scrollData.acceleration = scrollData.difference / height;
    scrollData.velocity += scrollData.acceleration;
    scrollData.skew = scrollData.velocity * 7.5;

    callback(scrollData);
  };

  useEffect(() => {
    requestAnimationFrame(() => scroll());
  }, []);
};

export default useScrollDate;
