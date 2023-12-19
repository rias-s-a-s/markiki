import Link from "next/link";
import BannerSoundbeats from "./Banner";

const Soundbeats = () => {
  return (
    <main className=" max-w-screen-2xl mx-auto">
      <BannerSoundbeats />

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
          <p className="mb-6 text-base font-normal leading-7 lg:w-3/4 text-grey-900 text-justify line-clamp-3">
            Escuchamos sus necesidades y le proponemos planes e ideas para
            desarrollarle un evento emocionante e inolvidable. Somos un equipo
            de profesionales que trabajamos comprometios y enfocados en asegurar
            el éxito de su evento, en base a logros de calidad y tiempo
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
            src="https://scontent.fibe1-1.fna.fbcdn.net/v/t39.30808-6/273567142_143344184805973_306090149257144329_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=tX50NlSfVwcAX-5AJQH&_nc_ht=scontent.fibe1-1.fna&oh=00_AfBGpr8Mx_5lGCGdaF3UC5_y5UT0-nvV1lDoV47ISklAbQ&oe=6582DDE9"
            alt="header image"
          />
        </div>

        <div
          className=" bg-center lg:col-span-2  bg-cover bg-no-repeat   items-center justify-center flex flex-col "
          style={{
            backgroundImage: 'url("/BannerSound.webp")',
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

              <Link href={"/Soundbeats/Contacto"}>
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

export default Soundbeats;
