import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Mail } from 'lucide-react';
import logo from "../assets/oculosvr.png";

const Footer = () => {
  return (
    <footer className="md:px-16 lg:px-28">
        <hr className="my-8 border-t border-zinc-700/50 mx-auto w-[1920px]" />
        <div className="grid grid-cols-1 md:grid-cols-4 ml-16">
            <div>
                <img className="h-16 w-22 mr-2 mb-1" src={logo} alt="logo" />
                <div className="flex flex-col">
                <span className="text-2xl tracking-wide">VirtualR</span>
                <span className="text-base tracking-wide font-light -mt-2">Technology</span>
                </div>
            </div>
            <div className='mr-28'>
                <h2 className="text-lg font-bold mb-4">
                    Sobre nós
                </h2>
                <p className="text-gray-300">
                    We are a team dedicated to providing the best products and services to our customers.
                </p>
            </div>
            <div>
            <h2 className="text-lg font-bold mb-4 mr-32">Navegação</h2>
                <ul>
                    <li className='text-gray-300'><a href="#" ></a>Home</li>
                    <li className='text-gray-300'><a href="#" ></a>Benefícios</li>
                    <li className='text-gray-300'><a href="#" ></a>Depoimentos</li>
                    <li className='text-gray-300'><a href="#" ></a>Preços</li>
                    <li className='text-gray-300'><a href="#" ></a>Contatos</li>
                </ul>
            </div>

            <div>
                <h2 className="text-lg font-bold mb-4">Siga-nós </h2>
                <ul className="flex space-x-4">
                    <li>
                    <Instagram className='text-violet-700 cursor-pointer'/>
                        <a href="#" className="hover:underline text-violet-600"></a>
                    </li>

                    <li>
                    <Twitter className='text-violet-700 cursor-pointer'/>
                        <a href="#" className="hover:underline text-violet-600"></a>
                    </li>

                    <li>
                    <Facebook className='text-violet-700 cursor-pointer'/>
                        <a href="#" className="hover:underline text-violet-600 "></a>
                    </li>
                </ul>
                <div className='mt-6 flex flex-row space-x-1'>
                    <Mail className='text-violet-700 cursor-pointer'/>
                    <a href="#" className="hover:underline text-violet-600"></a>
                    <p className='text-gray-300'>
                    exemplo.ghb@hmail.com
                    </p>
                </div>
            </div>
        </div>
        <div className='flex my-10 items-center justify-center italic text-slate-400/75 dark:text-slate-400/75'>
            <p>© 2024 Code With Yousaf. All Rights Reserved</p>
        </div>
    </footer>
    
  )
};

export default Footer;
