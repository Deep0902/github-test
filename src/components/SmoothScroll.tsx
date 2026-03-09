"use client";
import Lenis from "lenis";
import React, { useEffect } from "react";

const SmoothScroll = () => {
  useEffect(() => {
    // npm install lenis
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return <div>SmoothScroll</div>;
};

export default SmoothScroll;
