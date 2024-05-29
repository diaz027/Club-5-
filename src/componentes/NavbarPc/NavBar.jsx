const NavBar = () => {
  return (
    <div>  
    <div className="bg-zinc-900 text-white flex items-center md:p-2">
      <img src="./Logo.png" className="md:w-[3vw] md:h-[10%] md:ml-4"/>
      <h1 className="text-amber-500 ml-1 md:text-3xl"> 5 Estrellas</h1>
      <div className="flex items-center md:mt-2 md:ml-[100vh]">
        <a href="/">
      <button className="hover:text-amber-500 md:text-2xl  md:ml-[10vh]">
        Inicio
      </button></a>
      <a href="/Canchas">
      <button className="hover:text-amber-500 md:text-2xl md:ml-[10vh]">
        Canchas
      </button></a>
      <a href="/Eventos">
      <button className="hover:text-amber-500 md:text-2xl md:ml-[10vh]">
        Eventos
      </button>
      </a>
      </div>
      </div>
    </div>
  );
};
export default NavBar;
