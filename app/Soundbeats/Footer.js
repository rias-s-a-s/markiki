import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsPhone, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="border-t mt-12 py-6 px-4 lg:px-0 bg-gradient-to-r from-[#e10c5b] to-[#762982] text-white">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 justify-center gap-4 items-center sm:items-start">
          <div className="flex flex-col justify-center items-center">
            {/* <h6 className="font-semibold mb-4 text-xl">Grupo</h6> */}
            <div className="space-y-4">
              <Link href={"/"} title="Ir a Inicio">
                <Image
                  title="LogoEmpresa"
                  src="/Soundbeats/IconoBlanco.svg"
                  width={200}
                  height={100}
                  alt="Logo Asei"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center mx-auto  ">
            <h6 className="font-semibold mb-4 text-xl ">Contacto</h6>
            <div className="space-y-2">
              <div className="flex space-x-2 items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-4.72 4.72a.75.75 0 11-1.06-1.06l4.72-4.72h-2.69a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>

                <div>
                  <a
                    href="tel:+5144460044"
                    className="text-xl  hover:text-[#f9d725] transition-colors duration-300"
                  >
                    (+51) 44-460-044{" "}
                  </a>
                </div>
              </div>

              <div className="flex space-x-2 items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>

                <a
                  className=" text-xl hover:text-[#f9d725] transition-colors duration-300"
                  href="mailto:contacto@negociacionestmh.com.pe"
                >
                  contacto@negociacionestmh.com.pe{" "}
                </a>
              </div>

              <div className="flex space-x-2 items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="  hover:text-[#f9d725] transition-colors duration-300">
                  Flor de la Canela Mz D - Lt. 02 Dpto. 201 <br />
                  Urb. Palmeras del Golf , Distrito de Víctor Larco
                </p>
              </div>
            </div>
          </div>

          <div className="sm:max-w-[290px] sm:mx-auto sm:col-span-2 lg:col-span-1  mx-auto">
            <h6 className="font-bold mb-4 text-xl">Nuestras Redes</h6>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=100075941122828"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:animate-bounce text-white hover:text-[#eec924]"
              >
                <BsFacebook className="  w-8 h-8" />
              </a>
              <a href="tel:+979757404">
                <BsPhone className=" w-8 h-8 " />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
