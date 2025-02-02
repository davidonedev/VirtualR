import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div id="depoimentos" className="mt-32 2xl:-mt-24 tracking-wide my-8 border-t border-zinc-700/50">
        <h2 className="text-3xl sm:text-5xl lg:text-4xl text-center my-10 mt-16 xl:my-16 xl:mt-20  2xl:mt-24">
            Feedback de alguns dos nossos clientes
        </h2>
    
        <div className="flex flex-wrap justify-center">
            {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                    <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin">
                        <p>{testimonial.text}</p>
                        <div className="flex mt-8 items-center">
                            <img 
                                className="w-12 h-12 mr-4 rounded-full border border-neutral-300" 
                                src={testimonial.image} 
                                alt={testimonial.user} 
                            />
                            <div>
                                <h6 className="text-base font-semibold">{testimonial.user}</h6>
                                <span className="text-sm font-normal italic text-neutral-600">
                                    {testimonial.company}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Testimonials;

