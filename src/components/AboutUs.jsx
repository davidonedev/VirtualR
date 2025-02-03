import { CheckCircle2 } from "lucide-react";
import codeImg from "../../public/logovr.jpg";
import { checklistItems } from "../constants";

const AboutUs = () => {
    return (
        <div id="beneficios" className="mt-20 xl:mb-20 my-8 border-b border-zinc-700/50">
            <h2 className=" text-4xl font-semibold m:text-5xl lg:text-5xl text-center 2xl:mt-20
            mt-2 tracking-wide xl:text-center "> Sobre nós
            </h2>
            <div className="flex flex-col lg:flex-col items-center justify-center px-6 ">
                <div className=" lg:w-1/2 xl:w-full flex justify-center xl:ml-">
                    <img src={codeImg} className="w-[430px] xl:w-3/5 mt-14 rounded-2xl shadow-2xl xl: xl:mb-10" alt="VirtualR" />
                </div>
                <div className="xl:w-3/5 flex justify-center ">
                    <div className=" p-6 ">
                        <p className="text-justify xl:mb-20">
                        Somos especialistas em levar a realidade virtual para o seu evento! Oferecemos aluguel de óculos VR para empresas, 
                        festas e eventos, proporcionando experiências imersivas e inovadoras. Seja para entretenimento, treinamentos ou ativações 
                        interativas, garantimos tecnologia de ponta e suporte completo para tornar sua ocasião inesquecível.
                        </p>
                    </div>
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
