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
      <div className="container mt-4 space-y-4 m-auto px-6  text-gray-500 md:px-12 xl:px-0">
        <div className="   space-y-3   ">
          <h1 className="bg-white rounded-2xl shadow-xl text-[#377fa7] text-lg lg:text-2xl uppercase text-center py-2 font-bold">
            Equipos de cómputo y redes de telefonía
          </h1>
          <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8  ">
              <div className=" space-y-4">
                <h3 className="text-2xl font-semibold text-[#377fa7]">
                  SOLUCIONES ELECTRONICAS{" "}
                </h3>
                <ul className="list-disc list-inside mt-2 text-left px-2 mx-auto text-gray-600 ">
                  <li>Reparación de lavadoras </li>
                  <li>Reparación de refrigeradoras </li>
                  <li>Reparación de televisores </li>
                  <li>Reparación de secadoras y conversión a gas </li>
                  <li>Reparación de cocinas y extractores </li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8  ">
              <div className=" space-y-4">
                <h3 className="text-2xl font-semibold text-[#377fa7]">
                  Equipos de cómputo, redes de cómputo y telefonía{" "}
                </h3>
                <ul className="list-disc list-inside mt-2 text-left px-2 mx-auto text-gray-600 ">
                  <li>Reparación de laptops </li>
                  <li>Reparación de PCs </li>
                  <li>Reparación Impresoras </li>
                  <li>Reparación de secadoras y conversión a gas </li>
                  <li>Reparación de Tablets y celulares </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8  ">
              <div className=" space-y-4">
                <h3 className="text-2xl font-semibold text-[#377fa7]">
                  Climatización y ventilación{" "}
                </h3>
                <ul className="list-disc list-inside mt-2 text-left px-2 mx-auto text-gray-600 ">
                  <li>Instalación y reparación de aire acondicionado </li>
                  <li>Instalación y reparación de terma </li>
                  <li>Reparación Impresoras </li>
                  <li>Reparación de secadoras y conversión a gas </li>
                  <li>Reparación de Tablets y celulares </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="   space-y-3    ">
          <h1 className="bg-white rounded-2xl shadow-xl text-[#377fa7] text-lg lg:text-2xl uppercase text-center py-2 font-bold">
            Equipos de cómputo y redes de telefonía{" "}
          </h1>
          <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8  ">
              <div className=" space-y-4">
                <h3 className="text-2xl font-semibold text-[#377fa7]">
                  Equipos de cómputo{" "}
                </h3>
                <ul className="list-disc list-inside mt-2 text-left px-2 mx-auto text-gray-600 ">
                  <li>Venta de equipos de cómputo y accesorios. </li>
                  <li>Venta de impresoras.</li>
                  <li>Venta de tintas para impresoras.</li>
                  <li>Mantenimiento y reparación de PC, laptops y notebook.</li>
                  <li>Venta de modems y Access point.</li>
                  <li>Instalación y configuración de modems y Access point.</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8  ">
              <div className=" space-y-4">
                <h3 className="text-2xl font-semibold text-[#377fa7]">
                  Conexiones inalámbricas y software{" "}
                </h3>
                <ul className="list-disc list-inside mt-2 text-left px-2 mx-auto text-gray-600 ">
                  <li>Instalación y configuración de redes de cómputo.</li>
                  <li>Venta de drivers, utilitarios y antivirus. </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8  ">
              <div className=" space-y-4">
                <h3 className="text-2xl font-semibold text-[#377fa7]">
                  Celulares y tablets{" "}
                </h3>
                <ul className="list-disc list-inside mt-2 text-left px-2 mx-auto text-gray-600 ">
                  <li>Venta de celulares, tablets y accesorios. </li>
                  <li>Mantenimiento y reparación de celulares y tablets.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="   space-y-3    ">
          <h1 className="bg-white rounded-2xl shadow-xl text-[#377fa7] text-lg lg:text-2xl uppercase text-center py-2 font-bold">
            Climatización{" "}
          </h1>
          <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8  ">
              <div className=" space-y-4">
                <h3 className="text-2xl font-semibold text-[#377fa7]">
                  Termas y rapiduchas.{" "}
                </h3>
                <ul className="list-disc list-inside mt-2 text-left px-2 mx-auto text-gray-600 ">
                  <li>Ventas de termas y rapiduchas.</li>
                  <li>Mantenimiento y reparación de termas y rapiduchas.</li>
                  <li>Instalación de termas y rapiduchas.</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8  ">
              <div className=" space-y-4">
                <h3 className="text-2xl font-semibold text-[#377fa7]">
                  Equipos de aire acondicionado.{" "}
                </h3>
                <ul className="list-disc list-inside mt-2 text-left px-2 mx-auto text-gray-600 ">
                  <li>
                    Mantenimiento y reparación de aire acondicionado portátil.
                  </li>
                  <li>
                    Mantenimiento y reparación de aire acondicionado split.
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8  ">
              <div className=" space-y-4">
                <h3 className="text-2xl font-semibold text-[#377fa7]">
                  Deshumedecedores{" "}
                </h3>
                <ul className="list-disc list-inside mt-2 text-left px-2 mx-auto text-gray-600 ">
                  <li>Mantenimiento y reparación de deshumedecedores.</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8  ">
              <div className=" space-y-4">
                <h3 className="text-2xl font-semibold text-[#377fa7]">
                  Ventiladores{" "}
                </h3>
                <ul className="list-disc list-inside mt-2 text-left px-2 mx-auto text-gray-600 ">
                  <li>Mantenimiento y reparación de ventiladores.</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8  ">
              <div className=" space-y-4">
                <h3 className="text-2xl font-semibold text-[#377fa7]">
                  Estufas{" "}
                </h3>
                <ul className="list-disc list-inside mt-2 text-left px-2 mx-auto text-gray-600 ">
                  <li>Mantenimiento y reparación de estufas.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="   space-y-3   ">
          <h1 className="bg-white rounded-2xl shadow-xl text-[#377fa7] text-lg lg:text-2xl uppercase text-center py-2 font-bold">
            Instalaciones eléctricas{" "}
          </h1>
          <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8  ">
              <div className=" space-y-4">
                <h3 className="text-2xl font-semibold text-[#377fa7]">
                  Instalación de canalizaciones, conductos y tuberías{" "}
                </h3>
                <ul className="list-disc list-inside mt-2 text-left px-2 mx-auto text-gray-600 ">
                  <li>
                    Instalación de canalizaciones, conductos y tuberías en redes
                    eléctricas.
                  </li>
                  <li>
                    Instalación de canalizaciones, conductos y tuberías en redes
                    de comunicaciones.
                  </li>
                  <li>Instalación de conductores y cables de energía.</li>
                  <li>
                    Instalación de conductores para circuito de alumbrado.
                  </li>
                  <li>
                    Instalación de conductores para circuito de tomacorrientes.
                  </li>
                  <li>Instalación de conductores para circuito de fuerza.</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8  ">
              <div className=" space-y-4">
                <h3 className="text-2xl font-semibold text-[#377fa7]">
                  Montaje de tableros eléctricos{" "}
                </h3>
                <ul className="list-disc list-inside mt-2 text-left px-2 mx-auto text-gray-600 ">
                  <li>Instalación de tableros eléctricos.</li>
                  <li>Mantenimiento y control de tableros eléctricos.</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8  ">
              <div className=" space-y-4">
                <h3 className="text-2xl font-semibold text-[#377fa7]">
                  Instalación de placas{" "}
                </h3>
                <ul className="list-disc list-inside mt-2 text-left px-2 mx-auto text-gray-600 ">
                  <li>Instalación de placas para alumbrado. </li>
                  <li>Instalación de placas para tomacorrientes.</li>
                  <li>Instalación de placas para comunicaciones. </li>
                  <li>Instalación de placas para TV. </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8  ">
              <div className=" space-y-4">
                <h3 className="text-2xl font-semibold text-[#377fa7]">
                  Sistema de puesta a tierra{" "}
                </h3>
                <ul className="list-disc list-inside mt-2 text-left px-2 mx-auto text-gray-600 ">
                  <li>Instalación de sistema de puesta a tierra.</li>
                  <li>Mantenimiento de sistema de puesta a tierra.</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8  ">
              <div className=" space-y-4">
                <h3 className="text-2xl font-semibold text-[#377fa7]">
                  Instalación de luminarias{" "}
                </h3>
                <ul className="list-disc list-inside mt-2 text-left px-2 mx-auto text-gray-600 ">
                  <li>Instalación de luminarias residenciales.</li>
                  <li>Instalación de luminarias comerciales.</li>
                  <li>Instalación de luminarias industriales.</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8  ">
              <div className=" space-y-4">
                <h3 className="text-2xl font-semibold text-[#377fa7]">
                  Instalación de intercomunicadores{" "}
                </h3>
                <ul className="list-disc list-inside mt-2 text-left px-2 mx-auto text-gray-600 ">
                  <li>Instalación de intercomunicadores.</li>
                  <li>Instalación de video porteros.</li>
                  <li>
                    Mantenimiento y reparación de intercomunicadores y video
                    porteros.
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8  ">
              <div className=" space-y-4">
                <h3 className="text-2xl font-semibold text-[#377fa7]">
                  Sistema fotovoltaico{" "}
                </h3>
                <ul className="list-disc list-inside mt-2 text-left px-2 mx-auto text-gray-600 ">
                  <li>Instalación de sistema fotovoltaico aislado.</li>
                  <li>
                    Instalación de sistema fotovoltaico interconectado a la red
                    eléctrica.
                  </li>
                  <li>Mantenimiento y reparación de sistemas fotovoltaicos.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="   space-y-3    ">
          <h1 className="bg-white rounded-2xl shadow-xl text-[#377fa7] text-lg lg:text-2xl uppercase text-center py-2 font-bold">
            Instalaciones Electromecánicas{" "}
          </h1>
          <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8  ">
              <div className=" space-y-4">
                <h3 className="text-2xl font-semibold text-[#377fa7]">
                  Sistema de bombeo de agua{" "}
                </h3>
                <ul className="list-disc list-inside mt-2 text-left px-2 mx-auto text-gray-600 ">
                  <li>
                    Instalación de sistema de bombeo de agua hacia el tanque
                    elevado.
                  </li>
                  <li>
                    Instalación de sistema de bombeo de agua con tanque
                    hidroneumático.
                  </li>
                  <li>
                    Instalación de sistema de bombeo de agua con variador de
                    frecuencia (presión constante).
                  </li>
                  <li>
                    Mantenimiento y reparación de sistema de bombeo de agua.
                  </li>
                  <li>
                    Sistema automático de puerta (levadiza, seccional, corrediza
                    y batiente).
                  </li>
                  <li>Instalación de sistema automático de puerta.</li>
                  <li>
                    Mantenimiento y reparación de sistema automático de puerta.
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8  ">
              <div className=" space-y-4">
                <h3 className="text-2xl font-semibold text-[#377fa7]">
                  Sistema de agua contra incendios{" "}
                </h3>
                <ul className="list-disc list-inside mt-2 text-left px-2 mx-auto text-gray-600 ">
                  <li>Instalación de sistema de agua contra incendios. </li>
                  <li>Mantenimiento y sistema de agua contra incendios. </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8  ">
              <div className=" space-y-4">
                <h3 className="text-2xl font-semibold text-[#377fa7]">
                  Sistema de ventilación industrial, comercial y residencial.{" "}
                </h3>
                <ul className="list-disc list-inside mt-2 text-left px-2 mx-auto text-gray-600 ">
                  <li>Instalación de sistema de ventilación.</li>
                  <li>Mantenimiento y reparación de sistema de ventilación.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="   space-y-3   ">
          <h1 className="bg-white rounded-2xl shadow-xl text-[#377fa7] text-lg lg:text-2xl uppercase text-center py-2 font-bold">
            Sistema de seguridad{" "}
          </h1>
          <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8  ">
              <div className=" space-y-4">
                <h3 className="text-2xl font-semibold text-[#377fa7]">
                  CCTV y cámaras inteligentes{" "}
                </h3>
                <h3 className="text-xl font-semibold text-[#377fa7]">
                  Suministro e instalación de:{" "}
                </h3>
                <ul className="list-disc list-inside mt-2 text-left px-2 mx-auto text-gray-600 ">
                  <li>
                    Cámara analógicas con conexión CCTV (circuito cerrado de
                    televisión).{" "}
                  </li>
                  <li>Cámara IP sin cableado.</li>
                  <li>Cámara visión 360. </li>
                  <li>
                    Mantenimiento y reparación de CCTV y cámaras inteligentes.{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8  ">
              <div className=" space-y-4">
                <h3 className="text-2xl font-semibold text-[#377fa7]">
                  Sistema de alarmas Antirrobos{" "}
                </h3>
                <h3 className="text-xl font-semibold text-[#377fa7]">
                  Suministro e instalación de:{" "}
                </h3>
                <ul className="list-disc list-inside mt-2 text-left px-2 mx-auto text-gray-600 ">
                  <li>Sensores magnéticos para puertas o ventanas.</li>
                  <li>Sensores de movimiento interiores o exteriores.</li>
                  <li>Alarmas o detectores independientes.</li>
                  <li>
                    Mantenimiento y reparación de sistema de alarma antirrobos.{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8  ">
              <div className=" space-y-4">
                <h3 className="text-2xl font-semibold text-[#377fa7]">
                  Sistema de detención y alarma contra incendios{" "}
                </h3>
                <h3 className="text-xl font-semibold text-[#377fa7]">
                  Suministro e instalación de:{" "}
                </h3>
                <ul className="list-disc list-inside mt-2 text-left px-2 mx-auto text-gray-600 ">
                  <li>Equipos de detección.</li>
                  <li>Extintor de incendios.</li>
                  <li>Hidratantes contra incendios.</li>
                  <li>Rociadores de incendios. </li>
                  <li>Puertas cortafuego.</li>
                  <li>Monitores contra incendios.</li>
                  <li>
                    Mantenimiento y reparación de sistema de detección y alarma
                    contra incendios.
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8  ">
              <div className=" space-y-4">
                <h3 className="text-2xl font-semibold text-[#377fa7]">
                  Luces de emergencia{" "}
                </h3>
                <h3 className="text-xl font-semibold text-[#377fa7]">
                  Suministro e instalación de:{" "}
                </h3>
                <ul className="list-disc list-inside mt-2 text-left px-2 mx-auto text-gray-600 ">
                  <li>Luces de emergencia permanentes.</li>
                  <li>Luces de emergencia no permanentes.</li>
                  <li>Luces de emergencia combinadas.</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8  ">
              <div className=" space-y-4">
                <h3 className="text-2xl font-semibold text-[#377fa7]">
                  Cerradura digital y electrónica{" "}
                </h3>
                <h3 className="text-xl font-semibold text-[#377fa7]">
                  Suministro e instalación de:{" "}
                </h3>
                <ul className="list-disc list-inside mt-2 text-left px-2 mx-auto text-gray-600 ">
                  <li>Instalación de cerradura digital y eléctrica.</li>
                  <li>
                    Mantenimiento y reparación de cerradura digital y eléctrica.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="   space-y-3   ">
          <h1 className="bg-white rounded-2xl shadow-xl text-[#377fa7] text-lg lg:text-2xl uppercase text-center py-2 font-bold">
            Domótica{" "}
          </h1>
          <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8  ">
              <div className=" space-y-4">
                <h3 className="text-2xl font-semibold text-[#377fa7]">
                  Iluminación{" "}
                </h3>
                <ul className="list-disc list-inside mt-2 text-left px-2 mx-auto text-gray-600 ">
                  <li>
                    A través de la domótica y el control de la iluminación
                    aumenta tu confort, consigue ambientes de acuerdo a tus
                    necesidades y contribuye al ahorro energético.{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8  ">
              <div className=" space-y-4">
                <h3 className="text-2xl font-semibold text-[#377fa7]">
                  Persianas, cortinas y toldos{" "}
                </h3>
                <ul className="list-disc list-inside mt-2 text-left px-2 mx-auto text-gray-600 ">
                  <li>
                    Estos elemento, por medio de la domótica, interactúan con el
                    clima para maximizar la eficiencia energética, y su control
                    según tus hábitos te permite alcanzar un nivel de confort
                    superior.{" "}
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8  ">
              <div className=" space-y-4">
                <h3 className="text-2xl font-semibold text-[#377fa7]">
                  Climatización{" "}
                </h3>
                <ul className="list-disc list-inside mt-2 text-left px-2 mx-auto text-gray-600 ">
                  <li>
                    Gracias a la domótica se puede controlar la climatización de
                    acuerdo a los gustos del cliente y en todo momento , en
                    función de tu presencial o ausencia, pensando en el ahorro
                    energético.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="   space-y-3   ">
          <h1 className="bg-white rounded-2xl shadow-xl text-[#377fa7] text-lg lg:text-2xl uppercase text-center py-2 font-bold">
            Máquinas de gimnasio{" "}
          </h1>
          <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8  ">
              <div className=" space-y-4">
                <h3 className="text-2xl font-semibold text-[#377fa7]">
                  Máquinas elípticas{" "}
                </h3>
                <ul className="list-disc list-inside mt-2 text-left px-2 mx-auto text-gray-600 ">
                  <li>Reparación de máquinas elípticas.</li>
                  <li>Mantenimiento de máquinas elípticas.</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8  ">
              <div className=" space-y-4">
                <h3 className="text-2xl font-semibold text-[#377fa7]">
                  SPINNING{" "}
                </h3>
                <ul className="list-disc list-inside mt-2 text-left px-2 mx-auto text-gray-600 ">
                  <li>Reparación de máquinas spinning.</li>
                  <li>Manteamiento de Máquinas spinning.</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8  ">
              <div className=" space-y-4">
                <h3 className="text-2xl font-semibold text-[#377fa7]">
                  Máquinas trotadoras{" "}
                </h3>
                <ul className="list-disc list-inside mt-2 text-left px-2 mx-auto text-gray-600 ">
                  <li>Reparación de máquinas trotadoras.</li>
                  <li>Manteamiento de máquina trotadoras</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8  ">
              <div className=" space-y-4">
                <h3 className="text-2xl font-semibold text-[#377fa7]">
                  Máquinas abcoaster{" "}
                </h3>
                <ul className="list-disc list-inside mt-2 text-left px-2 mx-auto text-gray-600 ">
                  <li>Reparación de máquinas abcoaster.</li>
                  <li>Mantenimiento de máquinas abcoaster.</li>
                  <li>Máquinas minigimnasio</li>
                  <li>Reparación de máquinas, minigimnasio.</li>
                  <li>Mantenimiento de máquinas, minigimnasio.</li>
                  <li>Bancas para abdominales y pectorales</li>
                  <li>Reparación de bancas para abdominales y pectorales.</li>
                  <li>Manteamiento de bancas para abdominales y pectorales.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
