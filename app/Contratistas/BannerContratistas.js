"use client";
import Link from "next/link";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const BannerContratistas = () => {
  const NewImage = [""];
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
      >
        {NewImage.map((IMG, key) => (
          <div key={key} className="relative w-full h-[500px]   ">
            <img
              src={IMG}
              className="h-full w-full object-contain overflow-hidden object-top"
              alt={key}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BannerContratistas;
