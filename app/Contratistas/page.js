import Link from "next/link";
import BannerContratistas from "./BannerContratistas";

const Contratistas = () => {
  return (
    <main className=" max-w-screen-2xl mx-auto">
      <BannerContratistas />

      <div className="container mx-auto grid w-full grid-cols-1 my-auto mt-12 mb-8 md:grid-cols-2 xl:gap-14 md:gap-5">
        <div className="flex flex-col justify-center col-span-1 text-center lg:text-start">
          <div className="flex items-center justify-center mb-4 lg:justify-normal">
            <img
              className="h-5"
              src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-1.png"
              alt="logo"
            />
            <h4 className="ml-2 text-sm font-bold tracking-widest text-primary uppercase">
              ¡ Solución en tus manos !{" "}
            </h4>
          </div>
          <h1 className="mb-8 text-4xl font-extrabold leading-tight lg:text-6xl text-dark-grey-900">
            ¿Porque elegirnos ?{" "}
          </h1>
          <p className="mb-6 text-base font-normal leading-7 lg:w-3/4 text-grey-900 line-clamp-3 text-justify">
            Somos una empresa que inicio su actividad en el año 2016,
            dedicándonos a la ejecución de proyectos de ingeniería civil desde
            su concepción, hasta la terminación, tomando el liderazgo en
            innovación en seguridad y procesos constructivos, en cada uno de
            nuestros trabajos. Hoy en día nuestra experiencia se centra en
            proyectos de infraestructura de la vivienda, comercial, e
            industrial; habiendo superado las
          </p>
          <div className="flex flex-col items-center gap-4 lg:flex-row">
            <Link href="/Soundbeats/Nosotros">
              <div className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Más información{" "}
                <svg
                  aria-hidden="true"
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </Link>
          </div>
        </div>
        <div className="items-center justify-end hidden col-span-1 md:flex">
          <img
            className="w-4/5 rounded-md"
            src="https://scontent.fibe1-1.fna.fbcdn.net/v/t39.30808-6/410231761_665672605723248_2368184715782350006_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeGWk_CTDLN--7gecN4YRKbjyOX3YOw8b_nI5fdg7Dxv-ajaGq_tMVsS2htB-kbN7KUUBjMGUupAONcGI6_bqwMp&_nc_ohc=DcgLcic-8sQAX-a7N5g&_nc_ht=scontent.fibe1-1.fna&oh=00_AfAy_Gx3FhhlOQc4KL1aErDneKuTvjmaCTFbwG3HEMhPyg&oe=65879A8C"
            alt="header image"
          />
        </div>

        <div
          className=" bg-center lg:col-span-2  bg-cover bg-no-repeat   items-center justify-center flex flex-col "
          style={{
            backgroundImage:
              'url("https://img.freepik.com/foto-gratis/silueta-construccion_1150-8336.jpg?t=st=1703005411~exp=1703006011~hmac=a770c2a171edf335b71b252bf4f2f08cae889c32728fa0b7c230ea2a5cac4eac")',
          }}
        >
          <div className="items-center justify-center w-full p-8 flex flex-col bg-black/50">
            <div className="bg-transparent items-center justify-center md:w-[80%] w-full   p-10 h-auto rounded-lg blur-3 bg-opacity-90 flex flex-col col-span-12">
              <h2
                className="text-gray-50   text-5xl text-center mt-2 mb-10"
                id="moka-cqg7a"
                style={{ fontFamily: '"Archivo Black"' }}
              >
                Confianza y seguridad
              </h2>

              <Link href={"/Contratistas/Contacto"}>
                <button className="hover:text-gray-300 rounded-md p-2 bg-[#0386ba] text-white hover:scale-105   text-2xl font-bold">
                  Contacto
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contratistas;
