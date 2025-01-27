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
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 ">
      <div className="container px-4 mx-auto relative text-sm ">
        <div className="flex justify-between items-center 2xl:ml-32 2xl:mr-20">

          <div className="flex items-center flex-shrink-0">
            <img className="h-13 w-16 mr-2" src={logo} alt="logo" />
            <div className="flex flex-col">
            <span className="text-2xl tracking-wide">VirtualR</span>
            <span className="text-base tracking-wide font-light -mt-2">Technology</span>
            </div>
          </div>
          <ul className="hidden lg:flex space-x-12 ">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="text-gray-200 duration-200 hover:text-violet-500">{item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-6 items-center mr-32">
            <a href="#" className="py-2 px-3 border-violet-500 hover:bg-violet-800 border rounded-md">
              Entrar
            </a>
            <a
              href="#"
              className="bg-gradient-to-r border border-violet-500 bg-violet-800 hover:bg-transparent py-2 px-3 rounded-md">
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
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                <ul>
                    {navItems.map((item, index) => (
                      <li key={index} className="py-6">
                        <a href={item.href}>{item.label}</a>
                      </li>  
                    ))} 
                </ul>
                <div className="flex space-x-6">
                    <a href="#" className="py-2 px-3 border-violet-500 hover:bg-violet-800 border rounded-md">
                      Entrar
                    </a>
                    <a href="#" className="bg-gradient-to-r border border-violet-500 bg-violet-800 hover:bg-transparent py-2 px-3 rounded-md">
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
