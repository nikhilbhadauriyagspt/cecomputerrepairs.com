import React from "react";
import { Link } from "react-router-dom";
import {
  CalendarClock,
  Search,
  MessageSquareText,
  Wrench,
  CheckCircle2,
  PackageCheck,
  ArrowRight,
} from "lucide-react";
import SEO from "../components/SEO";

const Steps = () => {
  const steps = [
    {
      icon: <CalendarClock />,
      title: "Step 1: Book a Service or Visit",
      desc: [
        "You can begin by submitting a service request or visiting our location for inspection.",
        "This step allows us to gather basic information about the device and the issue you are experiencing.",
        "Providing clear details helps speed up the diagnosis process.",
      ],
      label: "What you can provide:",
      points: [
        "Device type (laptop or desktop)",
        "Description of the issue",
        "Any visible damage or recent changes",
      ],
    },
    {
      icon: <Search />,
      title: "Step 2: Device Inspection & Diagnosis",
      desc: [
        "Once the device is received, we perform a hardware inspection to identify the root cause of the problem.",
        "The purpose of this step is to understand whether the issue can be repaired or if a component needs replacement.",
      ],
      label: "This includes checking key components such as:",
      points: [
        "Display and screen condition",
        "Storage devices (hard drive or SSD)",
        "Battery and power system",
        "Cooling system and fan",
        "Motherboard and internal connections",
      ],
    },
    {
      icon: <MessageSquareText />,
      title: "Step 3: Issue Explanation",
      desc: [
        "After diagnosis, the identified issue is explained in clear and simple terms.",
        "This step ensures transparency and helps you understand the condition of your device before any repair is performed.",
      ],
      label: "You will be informed about:",
      points: [
        "What is causing the problem",
        "Whether repair or replacement is required",
        "The general scope of the work involved",
      ],
    },
    {
      icon: <Wrench />,
      title: "Step 4: Repair or Component Replacement",
      desc: [
        "Based on the diagnosis, the required computer repair or laptop repair service is carried out.",
        "Repairs are performed using compatible parts and appropriate methods based on the device model and condition.",
      ],
      label: "This may include:",
      points: [
        "Screen replacement",
        "Hard drive repair or replacement",
        "Battery or keyboard replacement",
        "Fan repair or cooling system work",
        "Motherboard-level repair (if applicable)",
      ],
    },
    {
      icon: <CheckCircle2 />,
      title: "Step 5: Testing & Quality Check",
      desc: [
        "After the repair is completed, the device goes through a testing phase to ensure proper functionality.",
        "Testing helps confirm that the repair has addressed the issue effectively.",
      ],
      label: "This includes:",
      points: [
        "Power and startup testing",
        "Display and input checks",
        "Performance and stability verification",
        "Cooling and temperature monitoring",
      ],
    },
    {
      icon: <PackageCheck />,
      title: "Step 6: Device Handover",
      desc: [
        "Once testing is complete, the device is ready for pickup.",
      ],
      label: "At this stage:",
      points: [
        "You can review the device condition",
        "Basic information about the repair may be shared",
        "Any important usage notes are explained",
      ],
    },
  ];

  const ensures = [
    "Accurate identification of hardware issues",
    "Repair decisions based on actual device condition",
    "Clear communication at each step",
    "Organized and consistent repair workflow",
  ];

  const notes = [
    "Not all hardware issues are repairable; some may require replacement",
    "Data safety depends on the condition of the storage device",
    "Repair time may vary depending on complexity and parts availability",
    "Diagnosis helps avoid unnecessary repairs",
  ];

  const repairs = [
    "Laptop screen replacement",
    "Hard drive and storage issues",
    "Battery and charging problems",
    "Overheating and fan-related issues",
    "Keyboard and input device repair",
    "General computer repair and diagnostics",
  ];

  return (
    <main className="w-full bg-white font-['Poppins']">
      <SEO
        title="How Our Computer Repair Process Works | C.E. Computer Repair "
        description="Understand our simple computer repair process from diagnosis to repair. We provide clear steps, reliable service, and transparent device inspection."
      />

      <section className="w-full bg-[#062238] py-20 lg:py-28">
        <div className="max-w-[1900px] mx-auto px-6 lg:px-16">
          <h1 className="text-white text-[30px] md:text-[40px] lg:text-[50px] font-medium leading-tight">
            Our Computer Repair Process
          </h1>
        </div>
      </section>
      {/* INTRO */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1900px] mx-auto px-6 lg:px-16 space-y-6">
          <p className="text-[#6B7280] text-[16px] leading-[1.9]">
              At C.E. Computer Repair, every device goes through a structured and careful process designed to identify hardware issues accurately and apply appropriate repair solutions. Our goal is to make computer repair and laptop repair services easy to understand, with clear steps from initial inspection to final testing.
          </p>

          <p className="text-[#6B7280] text-[16px] leading-[1.9]">
              This process helps ensure that each device is handled based on its actual condition, without unnecessary procedures or guesswork.
          </p>
        </div>
      </section>
      

      <section className="w-full bg-[#F7F7F7] py-16 lg:py-24">
        <div className="max-w-[1900px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="bg-white border border-[#D7E9F7] p-7">
                <div className="w-[58px] h-[58px] bg-[#0A4F86] text-white flex items-center justify-center mb-6">
                  {React.cloneElement(step.icon, {
                    className: "w-7 h-7 stroke-[1.8]",
                  })}
                </div>

                <h3 className="text-[#082F57] text-[22px] font-medium leading-snug mb-5">
                  {step.title}
                </h3>

                <div className="space-y-4 mb-6">
                  {step.desc.map((item, i) => (
                    <p key={i} className="text-[#6B7280] text-[15px] leading-[1.85]">
                      {item}
                    </p>
                  ))}
                </div>

                <p className="text-[#082F57] text-[14px] font-medium mb-4">
                  {step.label}
                </p>

                <div className="space-y-3">
                  {step.points.map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#1E86C8] shrink-0 mt-0.5" />
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

      <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-[1900px] mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-[#082F57] text-[30px] md:text-[40px] font-medium mb-8">
              What This Process Ensures
            </h2>
            <div className="space-y-4">
              {ensures.map((item, index) => (
                <div key={index} className="flex items-start gap-3 border-b border-[#D7E9F7] pb-4">
                  <CheckCircle2 className="w-5 h-5 text-[#1E86C8] shrink-0 mt-0.5" />
                  <p className="text-[#082F57] text-[15px] font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#062238] p-8">
           
            <div className="space-y-4">
              {notes.map((item, index) => (
                <div key={index} className="flex items-start gap-3 border border-white/10 p-4">
                  <CheckCircle2 className="w-5 h-5 text-[#1E86C8] shrink-0 mt-0.5" />
                  <p className="text-white/78 text-[15px] leading-[1.7]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F7F7F7] py-16 lg:py-24">
        <div className="max-w-[1900px] mx-auto px-6 lg:px-16">
          <h2 className="text-[#082F57] text-[30px] md:text-[40px] font-medium mb-10 text-center">
            Common Types of Repairs Handled
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {repairs.map((item, index) => (
              <div key={index} className="bg-white border border-[#D7E9F7] p-5 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1E86C8] shrink-0 mt-0.5" />
                <p className="text-[#082F57] text-[15px] font-medium leading-[1.6]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-[#082F57] text-[30px] md:text-[42px] font-medium leading-tight mb-6">
            Ready to get your device checked?
          </h2>

          <p className="text-[#6B7280] text-[16px] leading-[1.8] max-w-[760px] mx-auto mb-8">
            You can submit a service request or visit our location to begin the inspection process.
            We’ll guide you through each step with clarity and a structured approach.
          </p>

          <Link
            to="/contact-book-service"
            className="inline-flex items-center gap-2 bg-[#1E86C8] text-white px-8 py-4 text-[14px] font-medium uppercase tracking-[0.08em] hover:bg-[#0A4F86] transition"
          >
            Book Your Repair
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Steps;