"use client"
import NavBar from "@/componentes/NavbarPc/NavBar"
import { DatePicker } from "@nextui-org/react";
import { now, parseAbsoluteToLocal } from "@internationalized/date";
import { useDateFormatter } from "@react-aria/i18n";
import { useState } from "react";
import Calendar from "@/componentes/calendario/calendario";

const Canchas = () => {
  let [date, setDate] = useState(parseAbsoluteToLocal("2024-04-07T18:45:22Z"));
  return (
    <>
      <NavBar />
      <div className="text-white">
        <h1>alquila tu cancha</h1>
        <h2>pagar</h2>
      </div>
      <div className=" relative flex flex-col items-center justify-center md:-top-10">
        <img src="/Logo.png" />
      </div>
      <div className="bg-transparent-bg   md:-mt-60 md:w-[50vw] md:py-3 rounded-2xl md:ml-4 relative z-50">
        <form className="flex">
          <label className="md:ml-4">Nombre: <input type="name" placeholder="Nombre" className="bg-transparent ml-2 rounded-none border-solid border-b border-sky-400" /></label>
          <label className="md:mt-10 md:-ml-[46.5vh] ">Celular: <input placeholder="Numero De Telefono" className="bg-transparent ml-2 rounded-none border-solid border-b border-sky-400" /></label>
        </form>
        <h1 className="md:mt-6 md:ml-4"> Pago:</h1>
        <button className="bg-green-600 text-black font-bold border-black hover:text-green-600 hover:border-green-600 hover:bg-black border-2 md:mt-4 md:ml-4 px-[14vh] py-2 rounded-2xl">Efectivo</button> <br />
        <h1 className=" md:ml-[60vh] md:text-4xl md:-mt-2 ">$2.000</h1>
        <button className="bg-sky-600   border-black border-2  hover:text-black hover:font-bold md:-mt-4 md:ml-4 px-[10vh] py-2 rounded-2xl">Mercado Pago</button>
      </div>
      <div className="md:mt-[-40vh] relative z-30">
        <Calendar />
      </div>
    </>
  )
}
export default Canchas