import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/oculosvr.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 text-center flex justify-center">
      <div className="container px-4 mx-auto relative text-sm ">
        <div className="flex justify-between items-center 2xl:ml-32 2xl:mr-20 cursor-pointer ">
          <div className="flex items-center flex-shrink-0 xl:ml-12">
            <img className="h-13 w-16 mr-2" src={logo} alt="logo" />
            <div className="flex flex-col">
              <span className="text-2xl tracking-wide">VirtualR</span>
              <span className="text-base tracking-wide font-light -mt-2">
                Technology
              </span>
            </div>
          </div>
          <ul className="hidden lg:flex space-x-12 xl:ml-28  ">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="text-gray-200 duration-200 hover:text-violet-700 -mx-3 text-base">
                  {item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-3 items-center mr-40 lg:ml-20 xl:mr-36  ">
            <a href="#" className="py-2 px-3 border-violet-500 hover:bg-violet-800 border rounded-md">
              Entrar
            </a>
            <a href="#" className="bg-gradient-to-r border border-violet-500 bg-violet-800 
            hover:bg-transparent py-2 px-3 rounded-md lg:w-36 text-center">
              Crie uma conta
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div
            className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col 
            justify-center items-center lg:hidden"
          >
            {/* MENU - Lista de navegação */}
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <li key={index} className="w-56">
                  <a href={item.href} className="block w-full bg-violet-700 hover:bg-violet-950 text-white text-sm 
                  px-4 py-2 text-center rounded-lg transition-all"
                  >{item.label}</a>
                </li>
              ))}
            </ul>

            {/* BOTÕES "Entrar" e "Criar conta" */}
            <div className="mt-8 flex flex-col space-y-4 w-full items-center">
              <a href="#" className="w-48 py-2 px-3 border border-violet-500 text-white hover:bg-violet-950 text-center rounded-md">
                Entrar
              </a>
              <a href="#" className="w-48 py-2 px-3 bg-gradient-to-r bg-violet-800 hover:bg-violet-950
                 text-white text-center rounded-md">
                Crie uma conta
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
