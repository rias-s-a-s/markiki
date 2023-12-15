import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <div className="bg-gradient-to-br from-indigo-900 to-green-900 min-h-screen overflow-auto">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="w-4/5">
            <h1 className="mt-32 text-white text-6xl font-bold">
              GRUPO
              <br />
              <span className="text-blue-400">MARKIKI</span>
            </h1>
          </div>
          <div className="w-5/6 my-10 ml-6">
            <h3 className="text-gray-300">
              Somos un conglomerado empresarial diversificado y comprometido{" "}
              <br /> con brindar
              <strong className="text-white"> soluciones integrales </strong> en
              diferentes sectores del mercado.
              <br /> Nuestra misión es servir con excelencia, innovación y
              pasión.
            </h3>
          </div>
          <div className="hidden sm:block opacity-50 z-0">
            <div className="shadow-2xl w-96 h-96 rounded-full -mt-72" />
            <div className="shadow-2xl w-96 h-96 rounded-full -mt-96" />
            <div className="shadow-xl w-80 h-80 rounded-full ml-8 -mt-96" />
          </div>
          <div>
            <div className="absolute right-0  top-[35%] h-auto w-80 -translate-x-1/2 -translate-y-1/2 rotate-6 rounded-2xl bg-gray-400" />
            <div className="absolute right-0 top-[35%] h-auto w-80 -translate-x-1/2 -translate-y-1/2 rotate-6 space-y-6 rounded-2xl bg-gray-100 p-6 transition duration-300 hover:rotate-0">
              <div>
                <p className="text-center text-5xl font-extrabold text-gray-900">
                  Soluciones en
                </p>
                <p className="text-center text-4xl font-extrabold text-[#FE5401]">
                  tus manos
                </p>
              </div>
              {/* <footer className="mb-10 flex justify-center">
                <button className="flex items-baseline gap-2 rounded-lg bg-[#FE5401] px-4 py-2.5 text-xl font-bold text-white hover:bg-[#FF7308]">
                  <span>Start</span>
                </button>
              </footer> */}
            </div>
          </div>
          <div className="text-white  ">
            <h3 className="text-uppercase font-semibold">Empresas</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-1 sm:gap-5 uppercase">
              <Link
                href={"/Soundbeats"}
                className="group flex items-center bg-indigo-900 bg-opacity-40 shadow-xl gap-5 px-6 py-5 rounded-lg ring-2 ring-offset-2 ring-offset-blue-800 ring-cyan-700 mt-5 cursor-pointer hover:bg-blue-900 hover:bg-opacity-100 transition"
              >
                <Image
                  width={64}
                  height={30}
                  src="/SoundbeatsSinLetra.png"
                  style={{
                    objectFit: "cover",
                  }}
                  alt="SoundBeat"
                />
                <div>
                  <span>Soundbeats</span>
                  <span className="text-xs text-blue-300 block">Eventos</span>
                </div>
              </Link>
              <Link
                href={"/Contratistas"}
                className="group flex items-center bg-indigo-900 bg-opacity-40 shadow-xl gap-5 px-6 py-5 rounded-lg ring-2 ring-offset-2 ring-offset-blue-800 ring-cyan-700 mt-5 cursor-pointer hover:bg-blue-900 hover:bg-opacity-100 transition"
              >
                <Image
                  width={64}
                  height={30}
                  src="/MMSinLetra.png"
                  alt="MM"
                  style={{
                    objectFit: "cover",
                  }}
                />
                <div>
                  <span>Constratistas Generales</span>
                  <span className="text-xs text-blue-300 block">
                    Typescript
                  </span>
                </div>
              </Link>
              <Link
                href={"/Electronica"}
                className="group flex items-center bg-indigo-900 bg-opacity-40 shadow-xl gap-5 px-6 py-5 rounded-lg ring-2 ring-offset-2 ring-offset-blue-800 ring-cyan-700 mt-5 cursor-pointer hover:bg-blue-900 hover:bg-opacity-100 transition"
              >
                <Image
                  width={64}
                  height={30}
                  src="/SESinLetra.png"
                  alt="SE"
                  style={{
                    objectFit: "cover",
                  }}
                />

                <div>
                  <span>Soluciones Electrónica</span>
                  <span className="text-xs text-blue-300 block">
                    Confianza y seguridad
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
