import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"

const HeroSection = () => {
  return (
    <div className=" sm:mr-20 ml-2 sm:mt-16 sm:flex-col sm:items-center flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-slate text-4xl sm:text-4xl lg:text-6xl text-center tracking-wide -mt-24 ">
            Experimente a Realidade Virtual como
            <span className="bg-gradient-to-r from-violet-500 to-violet-950 text-transparent bg-clip-text">
            {" "}
            Nunca Antes! 
            </span>
        </h1>
        <p className="mt-5 text-lg text-center text-neutral-500 max-w-4xl">
        Descubra por que milhares de pessoas escolhem alugar óculos VR conosco e aproveitam tecnologia de ponta
        para criar experiências imersivas.
        </p>
        <div className="flex justify-center my-10">
            <a href="#" className="bg-gradient-to-r from-violet-500 to--900 py-3 px-4 mx-3 rounded-md">
                Start for free
            </a>
            {/*<a href="#" className="py-3 px-4 mx-3 rounded-md border">
                Documentation
            </a>*/}
        </div>
        <div className="flex mt-10 justify-center">
            <video autoPlay 
            loop 
            muted 
            className="rounded-lg w-1/2 border border-violet-600 
            mx-2 my-4">
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <video autoPlay 
            loop 
            muted 
            className="rounded-lg w-1/2 border border-violet-600
            mx-2 my-4">
                <source src={video2} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
  );
};

export default HeroSection;






