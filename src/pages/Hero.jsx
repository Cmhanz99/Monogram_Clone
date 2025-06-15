import { SlArrowDown } from "react-icons/sl";

const Hero = () => {
  return (
    <section
      className="relative flex items-end justify-center h-screen bg-cover bg-fixed bg-center"
      style={{ backgroundImage: "url(/bg-1.webp)" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-white w-full h-full flex items-center justify-center flex-col">
        <h2 className="text-4xl font-bold uppercase text-center
        tracking-[.5rem] text-orange-200">A Console for <br /> Every Workflow</h2>
        <p className="text-xl text-center mt-5 tracking-wide">Discover the perfect console for yours.</p>

        <p className="text-4xl absolute bottom-10 animate-bounce">
            <SlArrowDown />
        </p>
      </div>
    </section>
  );
};

export default Hero;
