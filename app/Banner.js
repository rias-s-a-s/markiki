"use client";
import Link from "next/link";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Banner = () => {
  const NewImage = [
    "https://img.freepik.com/foto-gratis/tecnico-reparacion-computadora-hardware-computadora-reparacion-actualizacion-tecnologia_1150-8861.jpg?t=st=1702680728~exp=1702681328~hmac=ad675feefd020581c665ff1d56f748c888abdf674518c71105699b7951972fb1",
    "/BannerElectrica/b2.jpg",
    "/BannerElectrica/b3.jpg",
    "/BannerElectrica/b4.jpg",
    "/BannerElectrica/b5.jpg",
    "/BannerElectrica/b6.jpg",
    "/BannerElectrica/b7.jpg",
    "/BannerElectrica/b8.jpg",
    "/BannerElectrica/b9.jpg",
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

export default Banner;
