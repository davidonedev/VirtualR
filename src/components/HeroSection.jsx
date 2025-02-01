import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
        <div className="flex flex-col items-center mx-auto text-center ">
            <h1 className="text-slate text-4xl sm:text-4xl lg:text-6xl tracking-wide md:mt-2">
                Experimente a Realidade Virtual como 
            <span className="bg-gradient-to-r from-violet-500 to-violet-950 text-transparent bg-clip-text"> Nunca Antes!</span>
            </h1>
            <p className="mt-10 text-lg text-neutral-500 max-w-4xl">
            Descubra por que milhares de pessoas escolhem alugar óculos VR conosco e aproveitam tecnologia de ponta para criar experiências imersivas.
            </p>
            <div className="flex justify-center my-10">
            <a href="#" className="bg-gradient-to-r bg-violet-800 py-3 px-4 mx-3 rounded-md mb-5">Adquira agora!</a>
            </div>
            <div className="flex justify-center items-center flex-col lg:flex-row lg:space-x-4">
            {[video1, video2].map((video, index) => (
            <video key={index} autoPlay loop muted className="rounded-lg lg:w-2/4 xl:w-2/5 border border-violet-600 mx-2 my-4">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        ))}
            </div>
        </div>
    </div>
    );
};

export default HeroSection;






