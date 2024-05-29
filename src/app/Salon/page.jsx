import NavBar from "@/componentes/NavbarPc/NavBar"
import Calendar from "@/componentes/calendario/calendario"


const Salon = () => {

    return(
        <div>
        <NavBar/>
        <div className="text-white flex">
        <h1>Nuestro salon</h1>
        <h2>a pagar gatooo</h2>
        </div>
        <div className=" relative flex flex-col items-center justify-center">
        <img src="/Logo.png" />
        </div>
        <Calendar />
        <h1>hola</h1>
        </div>
    )
 }
 export default Salon