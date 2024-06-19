import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-extrabold text-4xl lg:text-5xl tracking-tight md:-mb-4">
          <span className=" text-[#d56565]">Deine </span>
          Anlaufstelle für Permanent-Makeup und Brow & Lash Lifting in
          Saarbrücken
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          Erwecke deine natürliche Schönheit!
        </p>
        <button className="btn btn-primary btn-wide  text-white">
          Jetzt Termin vereinbaren
        </button>

        <TestimonialsAvatars priority={true} />
      </div>
      <div className="">
        <Image
          src="/BL_V3.png"
          alt="Product Demo"
          className="w-[100%] max-w-[100%]"
          priority={true}
          width={1500}
          height={1500}
        />
      </div>
    </section>
  );
};

export default Hero;
