import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/homanvr.png";
import { checklistItems } from "../constants";

const Workflow = () => {
    return (
        <div className="mt-20 xl:mb-20">
            <h2 className=" text-3xl sm:text-5xl lg:text-5xl text-center 2xl:mt-20
            mt-2 tracking-wide "> O que você leva ao alugar <br/>um 
            <span className=" bg-gradient-to-r from-violet-500 to-violet-950
            text-transparent bg-clip-text font-semibold">
            &nbsp;Óculos VR?
            </span>
            </h2>
            <div className="flex flex-wrap justify-center">
                <div className=" lg:w-1/2 xl:mt-6">
                    <img src={codeImg} className="w-[430px] mt-14 rounded-2xl shadow-2xl shadow-blue-500/20 xl:ml-24" alt="Code" />
                </div>
            <div className="pt-12 w-full lg:w-1/2 -ml-8 mt-10">
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
            </div>
        </div>
    </div>
    )
};

export default Workflow;
