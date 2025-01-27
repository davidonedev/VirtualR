import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-20">
        <hr className="my-8 border-t border-zinc-700/50 mx-auto w-4/4" />
        <h2 className="text=3xl sm:text-5xl lg: text-6xl text-center my-8 tracking-wider">
            Pricing
        </h2>
        <div className="flex flex-wrap">
            {pricingOptions.map((option, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                    <div className="p-10 border  border-violet-950 rounded-xl">
                        <p>{option.title}
                            {option.title == "Pro" && (
                                <span className="bg-grandient-to-r from-violet-500 to-violet-950 
                                text-transparent bg-clip-text text-xl mb-4 ml-2">
                                (Most Popular)
                                </span>
                            )}
                        </p>
                        <p className="mb-8">
                            <span className="text-5xl mt-6 mr-2">{option.price}</span>
                            <span className="text-neutral-400 tracking-tight">/Month</span>
                        </p>
                        <ul>
                            {option.features.map((feature, index) => (
                                <li key={index} className="mt-8 flex items-center">
                                    <CheckCircle2 />
                                    <span className="ml-2">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="#" className="inline-flex justify-center items-center text-center 
                        w-full h-12 p-5 mt-20 tracking-tight text-xl hover: border-violet-950 border 
                          rounded-lg transition duration-200">
                            Assinar Plano
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
};

export default Pricing;
