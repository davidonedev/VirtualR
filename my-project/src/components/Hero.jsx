import React from "react";
import BgImage from "public/images/coffe.png";

const bgImage = {
  backgroundImage: "url(/images/coffee.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  return (
    <main style={BgImage}>
      <section className="min-h-[750px] w-full">
        <div className="container">
          {/*Nav section */}
          {/*Hero section */}
          <div className="grid grid-cols-1 md:grid-cols-2
          "></div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
