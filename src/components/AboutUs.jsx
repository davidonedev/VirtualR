import { CheckCircle2 } from "lucide-react";
import codeImg from "../../public/logovr.jpg";
import { checklistItems } from "../constants";

const AboutUs = () => {
    return (
        <div id="sobre-nos" className="mt-20 xl:mb-20 my-8 border-b border-zinc-700/50">
            <div className="flex flex-col lg:flex-row items-center justify-center px-6 min-h-screen xl:-mt-32 -mt-12 mb-12 xl:gap-2 2xl:-mt-44 2xl:-mb-10 ">
                <div className="lg:w-1/2 flex justify-center">
                    <div className=" max-w-lg xl:mt-16">
                        <h2 className="text-center xl:text-center text-4xl font-semibold lg:text-5xl 2xl:mt-2
                        tracking-wide "> Sobre nós
                        </h2>
                        <p className="text-center xl:text-justify whitespace-normal text-lg/7 pt-12 pb-12">
                        Somos especialistas em levar a realidade virtual para o seu evento! Oferecemos aluguel de óculos VR para empresas, 
                        festas e eventos, proporcionando experiências imersivas e inovadoras. Seja para entretenimento, treinamentos ou ativações 
                        interativas, garantimos tecnologia de ponta e suporte completo para tornar sua ocasião inesquecível.
                        </p>
                    </div>
                </div>
                <div className="lg:w-1/2 flex justify-center lg:justify-end xl:w-2/3">
                    <img src={codeImg} className="w-[430px] -mb-10 xl:w-3/4 2xl:w-5/6 rounded-lg shadow-2xl" alt="VirtualR" />
                </div>
            </div>
            {/* <div className="pt-12 w-full lg:w-1/2 -ml-8 mt-10">
                {checklistItems.map((item, index) => (
                    <div key={index} className="flex mb-12">
                        <div className="text-green-400 mx-6 mt-2 bg-neutral-900 h-10 w-10
                            p-2 justify-center items-center rounded-full">
                            <CheckCircle2 />
                        </div>
                        <div className="">
                            <h5 className="mt-2 mb-2 text-xl">{item.title}</h5>
                            <p className="text-md text-neutral-500">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div> */}
        
    </div>
    )
};

export default AboutUs;
