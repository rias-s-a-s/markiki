"use client";
import Link from "next/link";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const BannerContratistas = () => {
  const NewImage = [
    "https://scontent.fibe1-1.fna.fbcdn.net/v/t39.30808-6/258575388_423740705872865_8851374199673475417_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=783fdb&_nc_eui2=AeF0Bsb7ih8l2pLepfwUEMOtLou1BqiPOaoui7UGqI85qnR2zGqtC-w7LbDeos6-9aXFiQZU-GzfKtGj-d3zqtwM&_nc_ohc=2IBEBKDI-CcAX9Yi5XE&_nc_ht=scontent.fibe1-1.fna&oh=00_AfBO1EwtqzFTKEjqnJtWmZAGAisAKhxiIS2Iz3sNTHRlcA&oe=65870A89",
    "https://scontent.fibe1-1.fna.fbcdn.net/v/t39.30808-6/352801019_571825905107919_6214699714777723875_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=783fdb&_nc_eui2=AeG-VMAZqCBHqqfcxSwfe7QSGhHJJWxGGZ4aEcklbEYZnvv-gZfNoXHWeisPpGIAbClC5iCgHGnDq7geABzjYUnM&_nc_ohc=OqwPQNYenqoAX-f0ZuE&_nc_ht=scontent.fibe1-1.fna&oh=00_AfBiDAfsQ57WVM4263f3glPpUbzVcz5GvLqbjlicA0RHTw&oe=65866E45",
    "https://scontent.fibe1-1.fna.fbcdn.net/v/t39.30808-6/320009245_531772905537788_2562313562037554875_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=9534ce&_nc_eui2=AeGpv4MVyUUMsZZ2jKyu-q1QGr8FAyWDBBUavwUDJYMEFfHQ0EKg40qX6y_3RaetQvuHSjEUAG63Aj-qT3jzwa3m&_nc_ohc=_4EMXG4v5wQAX-GqhJU&_nc_ht=scontent.fibe1-1.fna&oh=00_AfBEqCcCec8rhaFtDTTCVqCLlii39htyQiy6kedo6T-sKg&oe=6586733C",
    ,
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
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BannerContratistas;
