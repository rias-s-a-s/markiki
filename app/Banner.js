"use client";
import Link from "next/link";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Banner = () => {
  const NewImage = [
    "https://scontent.fibe1-1.fna.fbcdn.net/v/t39.30808-6/353010507_650093486981900_6583263392801377975_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=783fdb&_nc_ohc=6is4HbwAJhAAX-V_0sM&_nc_ht=scontent.fibe1-1.fna&oh=00_AfCltYa2QkhDbayDlJtO_CQx5jUuHs9IcDnM4maVzZdQnA&oe=6582ED50",
    "https://scontent.fibe1-1.fna.fbcdn.net/v/t39.30808-6/319436763_1097113290908959_7414990229522250097_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9534ce&_nc_ohc=ymX5Ait5qDMAX8ZDBYv&_nc_ht=scontent.fibe1-1.fna&oh=00_AfCC5cFYQY4qrpyIuAMzJeYeXy_nTqXlJHMUvkYLR57lfg&oe=6581EC30",
    "https://scontent.fibe1-1.fna.fbcdn.net/v/t39.30808-6/275113948_4917012291714124_7053697737796155988_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9534ce&_nc_ohc=ld0fsZLdxV8AX_WHYN_&_nc_ht=scontent.fibe1-1.fna&oh=00_AfAD77-D403pm5MrDB_yj9SEZCZn50NPEuQ3SGi8ROLUIw&oe=6581CD7B",
    "https://scontent.fibe1-1.fna.fbcdn.net/v/t39.30808-6/259433642_4578974272184596_4695033514853206308_n.png?_nc_cat=100&ccb=1-7&_nc_sid=783fdb&_nc_ohc=B4YbC7GQcmcAX-fRcw2&_nc_ht=scontent.fibe1-1.fna&oh=00_AfCBBEuv_VGxIWbmqHieGnI-Ii8Ao7R8xHqq-fQF2NBTpw&oe=658206B1",
    "https://scontent.fibe1-1.fna.fbcdn.net/v/t39.30808-6/242385535_4427965497285475_7758623134422873774_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=783fdb&_nc_ohc=hts6zY8nc-gAX8JtTfo&_nc_ht=scontent.fibe1-1.fna&oh=00_AfDrOx-vPUbg_xHYJb-OVqHforJc4HnIRqDXdlt0XkBjgA&oe=65825D66",
    "https://scontent.fibe1-1.fna.fbcdn.net/v/t1.6435-9/62008662_2276404135774966_313155458644836352_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=300f58&_nc_ohc=ScZo5aWaChwAX_mCES_&_nc_ht=scontent.fibe1-1.fna&oh=00_AfBgqhXnLxKQ13T6S1nSE_wp-6Jr-Lv0Yp25E7clWbTbgg&oe=65A52F81",
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
