"use client";
import Link from "next/link";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const BannerSoundbeats = () => {
  const NewImage = [
    "https://scontent.fibe1-1.fna.fbcdn.net/v/t39.30808-6/352808822_271668125374556_6831893910544213373_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=783fdb&_nc_ohc=5BpgF3TWIL4AX8i9Cf7&_nc_ht=scontent.fibe1-1.fna&oh=00_AfBHJALkYJqzLLrC3voJ9NIkV7bWzbnmvCnP0GUuMGmxzQ&oe=6581DD8E",
    "https://scontent.fibe1-1.fna.fbcdn.net/v/t39.30808-6/320178466_848832946426622_5852411816740519915_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9534ce&_nc_ohc=rCXRZ7VlgMQAX_04iYT&_nc_ht=scontent.fibe1-1.fna&oh=00_AfDyN50VsygOHYBLmAySgQpP-r5Tt2kMsnhuZyZjYkd4Bg&oe=6583B320",
    "https://scontent.fibe1-1.fna.fbcdn.net/v/t39.30808-6/315188845_187611973780172_7062402374911845352_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9534ce&_nc_ohc=mbEpq8vDOa4AX86FBRz&_nc_ht=scontent.fibe1-1.fna&oh=00_AfDKpVBtjgfBdneUp2QjYIrjHNFYXGs2XGKQe1G3Ous7lQ&oe=65825B29",
  ];
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

            {/* <div className=" absolute top-0 left-0 w-full h-full text-white">
              <div className=" flex flex-col justify-between  h-full py-4">
                <div />

                <div className="text-center   ">
                  <div>
                    <Link href="/Electronica/Contacto">
                      <div className="inline-block mr-2 mt-2">
                        <button
                          type="button"
                          className="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        >
                          Más Información
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BannerSoundbeats;
