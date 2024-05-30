"use client"
import Calendar from "@/componentes/calendario/calendario";
import { Button } from "@nextui-org/react";

const Canchas = () => {
  return (
    <>
      <h1 className="text-5xl text-center md:mt-6">RESERVAS</h1>
      <div className="md:w-[100vw] flex justify-center ">
        <img className="rounded-lg md:w-[600px] md:mt-5" src="https://cdn.quepasaweb.com.ar/wp-content/uploads/2020/10/cancha-futbol-5-autorizada-cuarentena.jpg" />
      </div>
      <div >
        <Calendar />
      </div>
      <div className="flex items-center justify-center">
        <div className="bg-transparent-bg  md:mt-10 md:w-[30vw] md:py-3 rounded-2xl md:ml-4 relative z-50">
          <form className="flex flex-col items-center justify-center">
            <label > <input type="name" placeholder="Nombre" className="bg-transparent  rounded-none border-solid border-b border-sky-400 mt-4 mb-4" /></label>
            <label > <input placeholder="Numero De Telefono" className="bg-transparent  rounded-none border-solid border-b border-sky-400" /></label>
          </form>
          <h1 className="md:mt-6  text-center text-xl"> Pago:</h1>
          <Button className="bg-green-600 text-black font-bold border-black hover:text-green-600 hover:border-green-600 hover:bg-black border-2 md:mt-4 md:ml-20 px-[13vh] py-2 rounded-2xl">Efectivo</Button> <br />
          <Button className="bg-sky-600   border-black border-2  hover:text-sky-600 hover:border-sky-600 hover:bg-black hover:font-bold md:mt-4 md:ml-20 px-[10vh] py-2 rounded-2xl">Mercado Pago</Button>
          <h1 className=" text-center md:text-4xl md:mt-2 ">$2.000</h1>
        </div>
      </div>
    </>
  )
}
export default Canchas