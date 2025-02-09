import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div id="vantagens" className="relative mt-10 border-b border-neutral-800 min-h-[500px] border-t border-zinc-700/50 mx-auto">
      <div className="text-center -mt-8">
        {/* <span
          className="bg-neutral-900 text-violet-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase animate-bounce">
          feature
        </span> */}
        <div className="bg-red-500 w-50 h-50">
            
        </div>
        <h2 className="flex flex-col text-3xl sm:text-5xl lg:text-5xl 
        mt-24 mb-16 lg:mt-20 tracking-wide 2xl:mt-24">
            Por que alugar 
          <span className="bg-gradient-to-r from-violet-500 to-violet-950 text-transparent 
          bg-clip-text font-semibold pt-2">
            Óculos VR?
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap mt-10 -ml-4 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
                <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-violet-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-4 mb-16 pl-0 text-neutral-500">
                    {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
