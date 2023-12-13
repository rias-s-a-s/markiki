"use client";
import React, { useState } from "react";

const ContactoElectronica = () => {
  const [InputValues, setInputValues] = useState({});

  const HandlerChange = (e) => {
    setInputValues({
      ...InputValues,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <div className="bg-white">
        <div className="container mx-auto my-4 px-4 lg:px-20  ">
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              try {
                const sendMail = await axios.post("/api/SendMailPageContacto", {
                  ...InputValues,
                });
                alert(sendMail?.data?.body);
                console.log("sendmail", sendMail);
              } catch (error) {
                console.log(error);
                alert("Error al enviar el mensaje ");
              }
            }}
            className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl"
          >
            <div className="flex">
              <h1 className="font-bold uppercase text-xl sm:text-5xl">
                Mandanos un <br /> mensaje{" "}
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <div>
                <label
                  className="leading-7 text-sm text-gray-600"
                  htmlFor="Nombre"
                >
                  Nombre <span className="text-red-900">(*)</span>
                </label>
                <input
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-[#086ebf]"
                  type="text"
                  id="Nombre"
                  name="Nombre"
                  placeholder="Por favor ingrese el nombre"
                  onChange={HandlerChange}
                  required
                />
              </div>
              <div>
                <label
                  className="leading-7 text-sm text-gray-600"
                  htmlFor="Apellido"
                >
                  Apellidos <span className="text-red-900">(*)</span>
                </label>
                <input
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-[#086ebf]"
                  type="text"
                  id="Apellido"
                  name="Apellido"
                  placeholder="Por favor ingrese los apellidos"
                  onChange={HandlerChange}
                  required
                />
              </div>
              <div>
                <label
                  className="leading-7 text-sm text-gray-600"
                  htmlFor="Correo"
                >
                  Correo Electrónico <span className="text-red-900">(*)</span>
                </label>
                <input
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-[#086ebf]"
                  type="email"
                  id="Correo"
                  name="Correo"
                  placeholder="Por favor ingrese el correo"
                  onChange={HandlerChange}
                  required
                />
              </div>
              <div>
                <label
                  className="leading-7 text-sm text-gray-600"
                  htmlFor="Telefono"
                >
                  Teléfono o Celular <span className="text-red-900">(*)</span>
                </label>
                <input
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-[#086ebf]"
                  type="number"
                  id="Telefono"
                  name="Telefono"
                  placeholder="Por favor ingrese el teléfono o celular"
                  onChange={HandlerChange}
                  required
                />
              </div>
            </div>

            <div className="my-4">
              <label htmlFor="Mensaje">
                Mensaje <span className="text-red-900">(*)</span>
              </label>
              <textarea
                id="Mensaje"
                placeholder="Escriba aqui ..."
                className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-[#086ebf]"
                rows={4}
                minLength={10}
                onChange={HandlerChange}
                name="Mensaje"
              />
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button
                className="uppercase text-sm font-bold tracking-wide bg-gradient-to-r from-[#377fa8] to-[#499068] text-gray-100 p-3 rounded-lg w-full hover:scale-105 
        focus:outline-none focus:shadow-outline"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
          <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-8 ml-auto bg-gradient-to-r from-[#377fa8] to-[#499068] rounded-2xl">
            <div className="flex flex-col text-white">
              <h1 className="font-bold uppercase text-4xl ">
                Pase por nuestra oficina
              </h1>
              <p className="text-gray-100">
                Nos encantaría conocerte en persona y poder brindarte una
                atención personalizada. Nuestro equipo estará encantado de
                atenderte y responder a todas tus preguntas. ¡Esperamos tu
                visita!
              </p>
              <div className="flex my-4 w-full">
                <div className="f pt-2 pr-2">
                  <div className="flex flex-col">
                    <h2 className="text-2xl">Dirección</h2>
                    <a
                      className="text-gray-100 hover:text-[#ffd33a]"
                      href="https://goo.gl/maps/1hUtX4Fm6hJn3fBz8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Mz A Lote 15A Dpto 1001 Urb. Las Hortencias de California
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col y-4 w-full">
                <h2 className="text-2xl">LLamanos</h2>
                <a
                  href="tel:+51044661845"
                  className="text-gray-100 hover:text-[#ffd43b]"
                  target="_blank"
                >
                  Tel: (+51) 044 661 845
                </a>
                <a
                  href="tel:+51956223460"
                  className="text-gray-100 hover:text-[#ffd43b]"
                  target="_blank"
                >
                  Tel: (+51) 956 223 460
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactoElectronica;
