"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaWhatsapp } from "react-icons/fa";
import ItemMenu from "../ItemMenu";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="fixed bottom-4 right-4 z-[100] space-y-4">
        <Link
          href={"/"}
          title="Grupo Markiki "
          className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 hover:bg-blue-600 hover:scale-105 text-white focus:outline-none"
        >
          <FaHome className="w-10 h-10" />{" "}
        </Link>
        <a
          href="https://l.facebook.com/l.php?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D51979757404%26text%3DHola%2520gracias%2520por%2520escribir%2520a%2520MARKIKIContratistas%2520en%2520.En%2520breves%2520momentos%2520nos%2520pondremos%2520en%2520contacto%2520contigo%26fbclid%3DIwAR3A4AdPthEihfQSquuMvQdTCTDwI3r4vR7B-zeciFOKYjGJu8tdCwayAyE&h=AT2Add7RQWVVFLg0lEBMU70M_g4s5-seb2Bn5plKFJkVF1tIrafI-tDySOdEN289zSPeITXuFeaHHNKIVpoVaZ6QX7wvHJZ71CKqleCfkkpCHDCBjORh4sqQ6UVtMg"
          target="_blank"
          title="Contacto via whatsapp"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 hover:scale-105 text-white focus:outline-none"
        >
          <FaWhatsapp className="w-10 h-10" />{" "}
        </a>
      </div>
      <nav
        style={{ filter: "drop-shadow(0px 0px 3px black)" }}
        className=" sticky z-50 top-0 p-2 md:px-32 shadow-sm md:flex md:items-center md:justify-between  bg-[#0386ba]"
      >
        <div className="  flex justify-between items-center  ">
          {/* Escudo Logo "inicio" */}
          <Link href="/">
            <div className="cursor-pointer">
              <Image
                title="Ir a inicio"
                src="/m_m_blanco.svg"
                width={180}
                height={50}
                alt="Logotype"
                className="object-contain"
              />
            </div>
          </Link>
          <span className="text-3xl cursor-pointer mx-2 md:hidden block text-white">
            <button name="Menu" onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="h-10 w-10 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>{" "}
            </button>
          </span>
        </div>
        <div>
          <div
            className={` text-center  flex flex-col h-screen md:h-auto  md:flex md:flex-row  md:items-center z-[-1] md:z-auto md:static gap-2 absolute text-white md:text-white  bg-[#3538a9] md:bg-transparent w-full left-0 top-full md:w-auto md:py-0  md:pl-0 pl-7 md:opacity-100 opacity-0 right-[-400px] transition-all ease-in  ${
              isOpen ? ` right-0 py-11 opacity-100` : `hidden`
            }`}
          >
            {/*  */}
            <ItemMenu
              ruta="/Contratistas"
              setIsOpen={setIsOpen}
              border={pathname == "/Contratistas" ? true : false}
            >
              Inicio
            </ItemMenu>
            <ItemMenu
              ruta="/Contratistas/Nosotros"
              setIsOpen={setIsOpen}
              border={pathname == "/Contratistas/Nosotros" ? true : false}
            >
              Nosotros
            </ItemMenu>

            <ItemMenu
              ruta="/Contratistas/Servicios"
              setIsOpen={setIsOpen}
              border={pathname == "/Contratistas/Servicios" ? true : false}
            >
              Servicios
            </ItemMenu>
            <ItemMenu
              ruta="Contratistas/Contacto"
              setIsOpen={setIsOpen}
              border={pathname == "/Contratistas/Contacto" ? true : false}
            >
              Contacto
            </ItemMenu>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;
