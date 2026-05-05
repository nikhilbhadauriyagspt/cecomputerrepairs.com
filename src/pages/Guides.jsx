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
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import SEO from "../components/SEO";

const Services = () => {
  const coreServices = [
    {
      icon: <Laptop />,
      title: "Laptop & Desktop Repair",
      desc: "We handle general computer repair and laptop repair for systems that are not functioning as expected. This includes devices that fail to start, show errors during use, or perform inconsistently.",
      label: "Common cases:",
      points: [
        "System not powering on",
        "Unexpected shutdowns",
        "Performance instability",
        "Hardware-related faults",
      ],
    },
    {
      icon: <Monitor />,
      title: "Screen Replacement & Display Repair",
      desc: "We provide laptop screen replacement for devices with cracked, damaged, or non-working displays. Display issues can affect usability significantly and often require part replacement.",
      label: "Includes:",
      points: ["Cracked or broken screens", "Flickering or dim display", "No display output"],
    },
    {
      icon: <HardDrive />,
      title: "Hard Drive Repair & Storage Issues",
      desc: "Storage problems can lead to slow systems, data access issues, or complete failure. Our hard drive repair and diagnostics focus on identifying whether the issue is repairable or requires replacement.",
      label: "Common issues:",
      points: ["Slow system performance", "Drive not detected", "Data access errors"],
    },
    {
      icon: <Cpu />,
      title: "Motherboard Repair",
      desc: "The motherboard connects all major components of a device. We provide motherboard-level inspection and repair for issues affecting power, display, or internal communication between components.",
      label: "Examples:",
      points: ["No power or boot failure", "Peripheral components not responding", "Internal hardware faults"],
    },
    {
      icon: <BatteryCharging />,
      title: "Battery Replacement & Power Issues",
      desc: "We address battery and charging-related problems in laptops. If your device does not hold charge or fails to power correctly, it may require battery replacement or internal inspection.",
      label: "Includes:",
      points: ["Battery draining quickly", "Device not charging", "Charging port-related concerns"],
    },
    {
      icon: <Keyboard />,
      title: "Keyboard Repair & Replacement",
      desc: "We offer keyboard replacement services for laptops with non-functional or damaged keys.",
      label: "Common cases:",
      points: ["Unresponsive keys", "Physical damage", "Input inconsistency"],
    },
    {
      icon: <Fan />,
      title: "Fan Replacement & Cooling System Repair",
      desc: "Overheating is often caused by cooling system failure. We provide fan replacement and internal cleaning to restore proper airflow and temperature control.",
      label: "Signs of issue:",
      points: ["Excessive heat", "Loud fan noise", "System slowdown due to temperature"],
    },
    {
      icon: <Thermometer />,
      title: "Thermal Paste Replacement",
      desc: "Thermal paste helps regulate CPU temperature. Over time, it can degrade and reduce cooling efficiency. We provide thermal paste replacement to improve heat transfer and system stability.",
      label: "",
      points: [],
    },
    {
      icon: <SearchCheck />,
      title: "Computer & Laptop Diagnostics (Free Diagnosis)",
      desc: "We begin every repair with a device diagnosis to identify the root cause of the issue. This allows for a more accurate and efficient repair process.",
      label: "Diagnosis helps with:",
      points: ["Identifying faulty components", "Understanding repair scope", "Avoiding unnecessary replacements"],
    },
  ];

  const focusPoints = [
    "Component replacement where required",
    "Internal inspection and issue identification",
    "Device performance stabilization",
    "Extending the usable life of your device",
  ];

  const commonIssues = [
    "Broken or damaged laptop screens",
    "Hard drive failures and storage errors",
    "Overheating systems and fan issues",
    "Battery and charging problems",
    "Keyboard malfunctions",
    "Power-related faults",
    "General hardware failures",
  ];

  const approach = [
    { title: "Initial Diagnosis", desc: "Identify the issue" },
    { title: "Issue Explanation", desc: "Clear understanding of the problem" },
    { title: "Repair Recommendation", desc: "Based on actual need" },
    { title: "Repair Execution", desc: "Hardware repair or replacement" },
    { title: "Testing", desc: "Ensuring device functionality" },
  ];

  const serviceNotes = [
    "Repair recommendations depend on device condition",
    "Not all components are repairable and may require replacement",
    "Data safety depends on the condition of the storage device",
    "Repair time may vary based on the issue and parts availability",
  ];

  const trustPoints = [
    "Free initial diagnosis available",
    "Focused on necessary repairs only",
    "No unnecessary service recommendations",
  ];

  return (
    <main className="w-full bg-white font-['Poppins']">
      <SEO
        title="Laptop, Screen & Hardware Repair Services | C.E. Computer Repair "
        description="Explore our computer repair services including laptop repair, screen replacement, hard drive repair, motherboard repair, and complete diagnostics."
      />

      {/* HERO */}
      <section className="w-full bg-[#062238] py-20 lg:py-28">
        <div className="max-w-[1900px] mx-auto px-6 lg:px-16">
          <h1 className="text-white text-[36px] md:text-[52px] lg:text-[50px] font-medium leading-tight max-w-[1200px]">
            Computer & Laptop Hardware Repair Services
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="w-full bg-white py-14 lg:py-20">
        <div className="max-w-[1900px] mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-10 lg:gap-16">
          <div>
            <h2 className="text-[#082F57] text-[30px] md:text-[38px] font-medium leading-tight">
              Computer & Laptop Hardware Repair Services
            </h2>
            <div className="w-12 h-[3px] bg-[#1E86C8] mt-6" />
          </div>

          <div className="space-y-5">
            <p className="text-[#6B7280] text-[16px] leading-[1.9]">
              At C.E. Computer Repair, we provide structured and practical computer repair and laptop repair services focused on hardware-related issues. Whether your device is experiencing physical damage, internal component failure, or performance-related problems, our approach begins with careful diagnosis followed by appropriate repair solutions.
            </p>
            <p className="text-[#6B7280] text-[16px] leading-[1.9]">
              We work on a wide range of laptop and desktop issues, including display problems, storage failures, overheating systems, and component replacements. Each service is carried out based on the actual condition of the device, without unnecessary procedures.
            </p>
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="w-full bg-[#F7F7F7] py-14 lg:py-20">
        <div className="max-w-[1900px] mx-auto px-6 lg:px-16">
          <div className="mb-12">
            <p className="text-[#1E86C8] text-[13px] font-medium uppercase tracking-[0.22em] mb-4">
              Our Core Repair Services
            </p>
            <h2 className="text-[#082F57] text-[30px] md:text-[42px] font-medium leading-tight">
              Our Core Repair Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border-t border-l border-[#D7E9F7]">
            {coreServices.map((service, index) => (
              <div key={index} className="bg-white border-r border-b border-[#D7E9F7] p-6 lg:p-8">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-[54px] h-[54px] bg-[#0A4F86] text-white flex items-center justify-center shrink-0">
                    {React.cloneElement(service.icon, {
                      className: "w-7 h-7 stroke-[1.8]",
                    })}
                  </div>
                  <h3 className="text-[#082F57] text-[20px] font-medium leading-snug">
                    {service.title}
                  </h3>
                </div>

                <p className="text-[#6B7280] text-[15px] leading-[1.8] mb-5">
                  {service.desc}
                </p>

                {service.label && (
                  <p className="text-[#082F57] text-[14px] font-medium mb-3">
                    {service.label}
                  </p>
                )}

                <div className="space-y-2">
                  {service.points.map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#1E86C8] shrink-0 mt-1" />
                      <p className="text-[#6B7280] text-[14px] leading-[1.6]">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOCUS */}
      <section className="w-full bg-white py-14 lg:py-20">
        <div className="max-w-[1900px] mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-10 lg:gap-16">
          <div>
            <p className="text-[#1E86C8] text-[13px] font-medium uppercase tracking-[0.22em] mb-4">
              What Our Services Focus On
            </p>
            <h2 className="text-[#082F57] text-[30px] md:text-[42px] font-medium leading-tight">
              What Our Services Focus On
            </h2>
          </div>

          <div>
            <p className="text-[#6B7280] text-[16px] leading-[1.9] mb-6">
              Our repair services are focused on hardware-level solutions, including:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {focusPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3 border border-[#D7E9F7] p-4">
                  <CheckCircle2 className="w-5 h-5 text-[#1E86C8] shrink-0 mt-0.5" />
                  <p className="text-[#082F57] text-[15px] font-medium leading-[1.6]">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-[#6B7280] text-[16px] leading-[1.9]">
              We do not rely on temporary fixes. Every service is based on the actual condition of the device.
            </p>
          </div>
        </div>
      </section>

      {/* ISSUES + APPROACH */}
      <section className="w-full bg-[#F7F7F7] py-14 lg:py-20">
        <div className="max-w-[1900px] mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white border border-[#D7E9F7] p-6 lg:p-8">
            <h2 className="text-[#082F57] text-[28px] md:text-[38px] font-medium mb-8">
              Common Device Issues We Handle
            </h2>

            <div className="space-y-3">
              {commonIssues.map((issue, index) => (
                <div key={index} className="flex items-start gap-3 border-b border-[#D7E9F7] pb-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1E86C8] shrink-0 mt-0.5" />
                  <p className="text-[#082F57] text-[15px] font-medium leading-[1.6]">
                    {issue}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-[#D7E9F7] p-6 lg:p-8">
            <h2 className="text-[#082F57] text-[28px] md:text-[38px] font-medium mb-4">
              Service Approach
            </h2>
            <p className="text-[#6B7280] text-[16px] leading-[1.8] mb-7">
              Our process is designed to remain simple and transparent:
            </p>

            <div className="space-y-4">
              {approach.map((item, index) => (
                <div key={index} className="grid grid-cols-[54px_1fr] gap-4">
                  <div className="w-[46px] h-[46px] bg-[#0A4F86] text-white flex items-center justify-center text-[14px] font-medium">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-[#082F57] text-[18px] font-medium mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[#6B7280] text-[14px] leading-[1.6]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NOTE */}
      <section className="w-full bg-[#062238] py-14 lg:py-20">
        <div className="max-w-[1900px] mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-10 lg:gap-16">
          <div>
            <p className="text-[#1E86C8] text-[13px] font-medium uppercase tracking-[0.22em] mb-4">
              Important Service Note
            </p>
            <h2 className="text-white text-[30px] md:text-[42px] font-medium leading-tight">
              Important Service Note
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {serviceNotes.map((note, index) => (
              <div key={index} className="border border-white/10 p-5">
                <p className="text-white/78 text-[15px] leading-[1.8]">
                  {note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + TRUST */}
      <section className="w-full bg-white py-14 lg:py-20">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-16">
          <div className="border border-[#D7E9F7] bg-[#F4F8FC] p-7 md:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 items-center">
              <div>
                <p className="text-[#1E86C8] text-[13px] font-medium uppercase tracking-[0.22em] mb-4">
                  CTA Section
                </p>
                <h2 className="text-[#082F57] text-[30px] md:text-[40px] font-medium leading-tight mb-5">
                  Need help with your device?
                </h2>
                <p className="text-[#6B7280] text-[16px] leading-[1.8] mb-7 max-w-[760px]">
                  You can request a service or visit our location for a detailed inspection.
                  We’ll guide you through the repair process step by step.
                </p>
                <Link
                  to="/contact-book-service"
                  className="inline-flex items-center gap-2 bg-[#1E86C8] text-white px-8 py-4 text-[14px] font-medium uppercase tracking-[0.08em] hover:bg-[#0A4F86] transition"
                >
                  Book Your Repair
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-white border border-[#D7E9F7] p-6">
                <div className="space-y-4">
                  {trustPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#1E86C8] shrink-0 mt-0.5" />
                      <p className="text-[#082F57] text-[15px] font-medium leading-[1.6]">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;