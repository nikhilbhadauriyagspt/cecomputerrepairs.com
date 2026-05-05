import React from "react";
import { Link } from "react-router-dom";
import {
  Laptop,
  Monitor,
  HardDrive,
  Cpu,
  BatteryCharging,
  Keyboard,
  Fan,
  Thermometer,
  SearchCheck,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Laptop />,
      title: "Laptop & Desktop Repair",
      text: "Comprehensive repair solutions for performance issues, startup failures, and hardware faults.",
    },
    {
      icon: <Monitor />,
      title: "Screen Replacement",
      text: "Replacement of cracked, flickering, or non-functional laptop screens using compatible parts.",
    },
    {
      icon: <HardDrive />,
      title: "Hard Drive Repair & Storage Issues",
      text: "Diagnosis of storage-related problems including system crashes, slow performance, and drive failures.",
    },
    {
      icon: <Cpu />,
      title: "Motherboard Repair",
      text: "Inspection and repair of motherboard-related issues affecting power, display, or system stability.",
    },
    {
      icon: <BatteryCharging />,
      title: "Battery & Power Issues",
      text: "Battery replacement and troubleshooting of charging-related problems.",
    },
    {
      icon: <Keyboard />,
      title: "Keyboard & Input Repair",
      text: "Repair or replacement of non-responsive or damaged keyboards.",
    },
    {
      icon: <Fan />,
      title: "Cooling & Fan Repair",
      text: "Fan replacement and cleaning to address overheating and airflow issues.",
    },
    {
      icon: <Thermometer />,
      title: "Thermal Paste Replacement",
      text: "Improving heat transfer for better system cooling and performance.",
    },
    {
      icon: <SearchCheck />,
      title: "Free Diagnosis",
      text: "Initial inspection to identify the issue before proceeding with repair.",
    },
  ];

  return (
    <section
      id="services"
      className="w-full bg-[#F7F7F7] py-20 lg:py-28 font-['Poppins']"
    >
      <div className="max-w-[1900px] mx-auto px-6 lg:px-16">
        
        {/* Heading */}
        <div className="text-center max-w-[820px] mx-auto mb-16">
          <h2 className="text-[#111827] text-[34px] md:text-[42px] font-medium uppercase tracking-[-1px]">
            Our Services
          </h2>

          <div className="w-10 h-[3px] bg-[#1E86C8] mx-auto mt-4 mb-7" />

          <p className="text-[#4B5563] text-[16px] leading-[1.8] font-medium">
            We provide a range of hardware repair and maintenance services
            focused on careful diagnostics, practical repair solutions, and
            reliable device care.
          </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-16">
          {services.map((service, index) => (
            <Link
              key={index}
              to="/services"
              className="group block"
            >
              <div className="flex items-center gap-5 mb-6">
                <div className="relative w-[86px] h-[86px] shrink-0">
                  <div className="absolute -top-3 -left-3 w-[78px] h-[78px] border border-[#B9C8D6]" />

                  <div className="relative z-10 w-[78px] h-[78px] bg-[#0A4F86] text-white flex items-center justify-center group-hover:bg-[#1E86C8] transition">
                    {React.cloneElement(service.icon, {
                      className: "w-9 h-9 stroke-[1.7]",
                    })}
                  </div>
                </div>

                <div className="flex items-center gap-5 flex-1">
                  <div className="w-9 h-[1px] bg-[#0A4F86]" />
                  <h3 className="text-[#082F57] text-[15px] font-medium uppercase leading-snug group-hover:text-[#1E86C8] transition">
                    {service.title}
                  </h3>
                </div>
              </div>

              <p className="text-[#4B5563] text-[15px] leading-[1.9] max-w-[380px] font-medium">
                {service.text}
              </p>
            </Link>
          ))}
        </div>

        {/* Button */}
        <div className="mt-16 text-center">
          <Link
            to="/services"
            className="inline-flex items-center justify-center bg-[#1E86C8] text-white px-9 py-4 text-[14px] font-medium uppercase tracking-[0.08em] hover:bg-[#0A4F86] transition"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;