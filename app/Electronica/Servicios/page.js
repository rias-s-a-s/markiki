const Servicios = () => {
  const ServiciosElectrodomesticos = [
    {
      Title: "",
      Description: "",
    },
  ];

  return (
    <div>
      <section className=" sm:max-h-[600px] lg:-mt-[104px] bg-center bg-no-repeat bg-[url('/BannerServicio.webp')] bg-black/60 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-lg text-start py-24 lg:py-44">
          {" "}
          <h1 className=" text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl  uppercase text-center">
            Servicios
          </h1>{" "}
        </div>
      </section>

      <div className="py-16 bg-gradient-to-r from-[#377fa8] to-[#499068]">
        <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
          <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
              <div className=" space-y-4">
                <h3 className="text-2xl font-semibold text-purple-900">
                  Graphic Design
                </h3>
                <p className="mb-6">
                  Obcaecati, quam? Eligendi, nulla numquam natus laborum porro
                  at cum, consectetur ullam tempora ipsa iste officia sed
                  officiis! Incidunt ea animi officiis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
