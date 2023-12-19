import Link from "next/link";
import Banner from "../Banner";

const Electronicia = () => {
  return (
    <main className=" max-w-screen-2xl mx-auto">
      <Banner />

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
            Quienes Somos{" "}
          </h1>
          <p className="mb-6 text-base font-normal leading-7 lg:w-3/4 text-grey-900 text-justify line-clamp-4">
            Somos un grupo empresarial de profesional de amplia experiencia en
            diferentes áreas de negocios, basado en nuestra filosofía, en la
            calidad, aportes de nuevas tecnologías y en la constante
            capacitación denuestas tecnologías y en capacitación de técnicos e
            ingenieros, con los cual queda garantizada y respaldad la
            satisfacción de nuestros clientes.
          </p>
          <div className="flex flex-col items-center gap-4 lg:flex-row">
            <Link href="/Electronica/Nosotros">
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
            src="/BannerElectrica/b1.jpg"
            alt="header image"
          />
        </div>

        <div
          className=" bg-center lg:col-span-2  bg-cover bg-no-repeat   items-center justify-center flex flex-col "
          style={{
            backgroundImage:
              'url("https://img.freepik.com/foto-gratis/comprobacion-corriente-placa-circuito-portatil_1098-13759.jpg?w=740&t=st=1702680578~exp=1702681178~hmac=8108dc309fb0fe9f806bba0ddad65d856a84044a5e910335266e6444be16cd42")',
          }}
        >
          <div className="items-center justify-center w-full p-8 flex flex-col bg-black/50">
            <div className="bg-transparent items-center justify-center md:w-[80%] w-full   p-10 h-auto rounded-lg blur-3 bg-opacity-90 flex flex-col col-span-12">
              <h2
                className="text-gray-300   text-5xl text-center mt-2 mb-10"
                id="moka-cqg7a"
                style={{ fontFamily: '"Archivo Black"' }}
              >
                Confianza y seguridad
              </h2>

              <Link href={"/Electronica/Contacto"}>
                <button className="hover:text-gray-300 rounded-md p-2 bg-[#39d0ff] text-white hover:bg-blue-600   text-2xl font-bold">
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

export default Electronicia;
