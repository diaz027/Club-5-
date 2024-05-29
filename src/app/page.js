import NavBar from "@/componentes/NavbarPc/NavBar";
import React from "react";
import {Button} from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="text-white">
        <h1 className="text-3xl mt-20 ml-16">Nuestra historia:</h1>
        <h2 className="text-xl mt-2 ml-20">texto</h2>
        <div className="flex items-center md:mt-12">
      <a href="/Canchas">
        <button className="bg-transparent-bg hover:text-amber-500 md:py-3 md:px-8 md:rounded-xl md:text-2xl md:ml-16 ">Reservar Canchas</button>
        </a>
      <a href="/Salon">
        <button className="bg-transparent-bg hover:text-amber-500  md:py-3 md:px-12 md:rounded-xl md:text-2xl md:ml-[50%] ">Reservar Salon</button> 
        </a>
      </div>
      <a href="/Eventos">
      <button className="bg-transparent-bg hover:text-amber-500  md:py-3 md:px-8 md:rounded-xl md:text-2xl md:mt-16 ">Eventos</button>
      </a>
      </div>
      <Button color="primary">
      Button
    </Button>
    </>
  );
}
