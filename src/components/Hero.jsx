import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[850px] overflow-hidden bg-[#062238]">
      <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-[#062238]/92" />
      <div className="absolute inset-0 bg-[url('/circuit-pattern.png')] bg-cover bg-center opacity-20" />

      <div className="relative z-10 max-w-[1800px] mx-auto px-6 lg:px-16 min-h-[850px] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center w-full">
          <div className="relative">


            <h1 className="text-white text-[42px] md:text-[62px] lg:text-[74px] font-medium leading-[1.08] tracking-[-2px] max-w-[780px]">
              Reliable Computer & Laptop Repair Services
            </h1>

            <p className="text-white/85 text-[17px] md:text-[19px] leading-relaxed max-w-[720px] mt-7 font-medium">
              Professional hardware repair and diagnostics for laptops and desktops.
              From screen replacement to internal component repair, we provide careful,
              detail-focused service for everyday devices.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                to="/contact-book-service"
                className="inline-flex items-center gap-2 bg-[#1E86C8] text-white px-8 py-4 rounded-[7px] text-[14px] font-medium uppercase tracking-[0.12em] hover:bg-[#0A4F86] transition"
              >
                Book a Service
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/25 text-white px-8 py-4 rounded-[7px] text-[14px] font-medium uppercase tracking-[0.12em] hover:bg-white hover:text-[#062238] transition"
              >
                View Services
              </Link>
            </div>

           
          </div>

          <div className="relative hidden lg:flex justify-center items-center">
            <div className="relative w-[690px] h-[590px]">
              

              <div className="absolute inset-0 clip-hex border-[12px] border-white/70 overflow-hidden shadow-2xl">
                <img
                  src="/repair-hero.avif"
                  alt="Computer and laptop repair service"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .clip-hex {
          clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
        }
      `}</style>
    </section>
  );
};

export default Hero;