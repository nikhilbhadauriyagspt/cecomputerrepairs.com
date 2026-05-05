import React from "react";
import { CalendarClock, Search, Wrench, CheckCircle2 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <CalendarClock />,
      title: "Book or Visit",
      description: "Schedule your repair or visit our service location.",
    },
    {
      icon: <Search />,
      title: "Device Inspection",
      description: "We examine the device to identify the root cause of the issue.",
    },
    {
      icon: <Wrench />,
      title: "Repair Process",
      description: "Required hardware repair or replacement is carried out based on diagnosis.",
    },
    {
      icon: <CheckCircle2 />,
      title: "Testing & Completion",
      description: "Device is tested to ensure proper functionality before completion.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="w-full bg-white py-14 lg:py-20 font-['Poppins'] overflow-hidden"
    >
      <div className="max-w-[1350px] mx-auto px-5 lg:px-10">
        <div className="text-center max-w-[650px] mx-auto mb-12">
          <p className="text-[#1E86C8] text-[12px] font-semibold uppercase tracking-[0.2em] mb-3">
            How It Works
          </p>

          <h2 className="text-[#082F57] text-[26px] md:text-[34px] lg:text-[40px] font-semibold leading-tight">
            Simple Repair Process
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#F4F8FC] border border-[#D7E9F7] rounded-[20px] p-6 text-center"
            >
              <div className="mx-auto mb-5 w-14 h-14 rounded-full bg-[#0A4F86] text-white flex items-center justify-center">
                {React.cloneElement(step.icon, {
                  className: "w-6 h-6 stroke-[1.8]",
                })}
              </div>

              <div className="mx-auto mb-4 w-8 h-8 rounded-full bg-white border border-[#D7E9F7] text-[#0A4F86] flex items-center justify-center text-[14px] font-semibold">
                {index + 1}
              </div>

              <h3 className="text-[#082F57] text-[18px] font-semibold mb-3">
                {step.title}
              </h3>

              <p className="text-[#6B7280] text-[14px] leading-[1.7]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;