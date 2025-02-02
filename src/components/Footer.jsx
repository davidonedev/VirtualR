import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Mail } from 'lucide-react';
import logo from "../assets/oculosvr.png";

const Footer = () => {
    return (
        <footer className=" text-white py-10 flex flex-col items-center justify-center ">
            <hr className="w-full border-t border-zinc-800 mb-10" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 lg:gap-32 gap-14 px-6">

              {/* Logo e informações */}
            <div className="flex flex-col items-center md:items-start">
                <img className="h-16 w-22 mb-4" src={logo} alt="logo" />
                <div className="text-center md:text-left flex flex-col items-center md:items-start -mt-2">
                    <span className="text-2xl font-bold tracking-wide">VirtualR</span>
                    <span className="text-base font-light -mt-1">Technology</span>
                </div>
            </div> 

              {/* Sobre nós */}
            <div className="flex flex-col items-center md:items-start">
                <h2 className="text-lg font-bold mb-4">Sobre nós</h2>
                <p className="text-gray-300 text-center md:text-left w-44 text-balance">
                    We are a team dedicated to providing the best products and services to our customers.
                </p>
                </div>

              {/* Navegação */}
                <div className="flex flex-col items-center md:items-start ">
                    <h2 className="text-lg font-bold mb-4 text-center">Navegação</h2>
                    <ul className="space-y-2 text-gray-300 text-center lg:text-left xl:text-left">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Benefícios</a></li>
                        <li><a href="#">Depoimentos</a></li>
                        <li><a href="#">Preços</a></li>
                        <li><a href="#">Contatos</a></li>
                    </ul>
                </div>

              {/* Siga-nos */}
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-lg font-bold mb-4 text-center">Siga-nos</h2>
                    <ul className="flex space-x-6 mb-4">
                        <li><Instagram className='text-violet-700 cursor-pointer' /></li>
                        <li><Twitter className='text-violet-700 cursor-pointer' /></li>
                        <li><Facebook className='text-violet-700 cursor-pointer' /></li>
                    </ul>
                    <div className="flex items-center space-x-2 mt-2">
                      <Mail className="text-violet-700 cursor-pointer" />
                        <p className="text-gray-300">tech@virtualr.com.br</p>
                    </div>
                </div>
            </div>
            <div className="mt-10 xl:mt-12 -mb-5 text-center text-sm italic text-slate-400/75">
                <p>© 2024 Code by David. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
