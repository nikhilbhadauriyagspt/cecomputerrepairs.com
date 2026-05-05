import {
  ShieldCheck,
  Laptop,
  Cpu,
  Search,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Mail,
  Wrench,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";

const About = () => {
  const navigate = useNavigate();

  const focusAreas = [
    "Screen replacement and display repair",
    "Hard drive repair and storage-related issues",
    "Motherboard inspection and repair",
    "Battery and charging-related problems",
    "Keyboard and input device replacement",
    "Cooling system and fan repair",
    "Thermal paste replacement for improved performance",
  ];

  const approachSteps = [
    {
      title: "1. Device Evaluation",
      desc: "We begin with a detailed inspection to understand the issue affecting the system.",
    },
    {
      title: "2. Diagnosis",
      desc: "The problem is analyzed to determine whether repair or replacement is required.",
    },
    {
      title: "3. Clear Explanation",
      desc: "We explain the issue in simple terms so you can understand the condition of your device.",
    },
    {
      title: "4. Repair Execution",
      desc: "Repairs are performed based on the diagnosis using compatible parts and appropriate methods.",
    },
    {
      title: "5. Testing",
      desc: "After repair, the device is tested to ensure proper functionality.",
    },
  ];

  const differencePoints = [
    "Focus on hardware-level repair rather than temporary solutions",
    "Clear and structured diagnostic process",
    "Repair recommendations based on actual device condition",
    "Attention to detail during inspection and repair",
    "Practical solutions aimed at extending device usability",
  ];

  const serviceNotes = [
    "Repairs depend on the condition of the device and its components",
    "Some hardware issues may require part replacement instead of repair",
    "Data safety depends on the condition of the storage device",
    "Repair time may vary depending on the complexity of the issue",
  ];

  return (
    <main className="w-full bg-white font-['Poppins']">
      <SEO
        title="About C.E. Computer Repair | Trusted Device Repair Services"
        description="Learn about C.E. Computer Repair, offering trusted laptop and computer repair services with expert diagnostics, quality parts, and reliable solutions."
      />

      {/* HERO */}
      <section className="w-full bg-[#062238] py-20 lg:py-28">
        <div className="max-w-[1900px] mx-auto px-6 lg:px-16">
          <h1 className="text-white text-[30px] md:text-[40px] lg:text-[50px] font-medium leading-tight">
            About C.E. Computer Repair
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1900px] mx-auto px-6 lg:px-16 space-y-6">
          <p className="text-[#6B7280] text-[16px] leading-[1.9]">
            C.E. Computer Repair is a local service provider focused on computer repair and laptop repair services with an emphasis on hardware diagnostics and practical solutions. We work with everyday devices that require careful inspection, accurate issue identification, and reliable repair methods.
          </p>

          <p className="text-[#6B7280] text-[16px] leading-[1.9]">
            Our approach is based on understanding the actual condition of each device and providing repair options that are appropriate to the problem. Whether it is a damaged screen, a failing storage drive, or an internal component issue, we aim to handle each case with attention to detail and clarity.
          </p>
        </div>
      </section>

      {/* OUR FOCUS */}
      <section className="py-16 lg:py-24 bg-[#F7F7F7]">
        <div className="max-w-[1900px] mx-auto px-6 lg:px-16">
          <h2 className="text-[#082F57] text-[30px] md:text-[40px] font-medium mb-10">
            Our Focus
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {focusAreas.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white border border-[#D7E9F7] p-5">
                <CheckCircle2 className="w-5 h-5 text-[#1E86C8]" />
                <p className="text-[#082F57] text-[15px] font-medium">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-[#6B7280] text-[16px] leading-[1.9]">
            Our work is centered on identifying the root cause of the issue rather than applying temporary fixes.
          </p>
        </div>
      </section>

      {/* APPROACH */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1900px] mx-auto px-6 lg:px-16">
          <h2 className="text-[#082F57] text-[30px] md:text-[40px] font-medium mb-12">
            Our Approach to Repair
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approachSteps.map((step, i) => (
              <div key={i} className="border border-[#D7E9F7] p-6 bg-[#F4F8FC]">
                <h4 className="text-[#082F57] font-medium mb-3">{step.title}</h4>
                <p className="text-[#6B7280] text-[15px]">{step.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-[#6B7280] mt-8 text-[16px] leading-[1.9]">
            This process helps maintain consistency and avoids unnecessary work on the device.
          </p>
        </div>
      </section>

      {/* DIFFERENCE */}
      <section className="py-16 lg:py-24 bg-[#F7F7F7]">
        <div className="max-w-[1900px] mx-auto px-6 lg:px-16">
          <h2 className="text-[#082F57] text-[30px] md:text-[40px] font-medium mb-10">
            What Makes Our Service Different
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {differencePoints.map((point, i) => (
              <div key={i} className="flex gap-3">
                <CheckCircle2 className="text-[#1E86C8]" />
                <p className="text-[#082F57]">{point}</p>
              </div>
            ))}
          </div>

          <p className="text-[#6B7280] mt-8 leading-[1.9]">
            We aim to keep the repair process straightforward and easy to understand.
          </p>
        </div>
      </section>

      {/* SERVICE NOTE */}
      <section className="py-16 lg:py-24 bg-[#062238] text-white">
        <div className="max-w-[1900px] mx-auto px-6 lg:px-16">
          

          <div className="grid md:grid-cols-2 gap-5">
            {serviceNotes.map((note, i) => (
              <div key={i} className="border border-white/10 p-5">
                <p className="text-white/80 text-[15px]">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-16 lg:py-24 bg-[#F7F7F7]">
        <div className="max-w-[1900px] mx-auto px-6 lg:px-16">
          <h3 className="text-[#082F57] text-[28px] font-medium mb-6">
            Location & Contact
          </h3>

          <div className="space-y-4">
            <div className="flex gap-3">
              <MapPin className="text-[#1E86C8]" />
              <p>1818 E Yesler Way, Suite 101 Seattle, WA 98122, United States</p>
            </div>

            <div className="flex gap-3">
              <Mail className="text-[#1E86C8]" />
              <a href="mailto:contact@cecomputerrepairs.com" className="hover:text-[#1E86C8] transition-colors text-inherit">contact@cecomputerrepairs.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 text-center">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-[#082F57] text-[30px] md:text-[40px] font-medium mb-6">
            Practical & Reliable Repair Services
          </h2>

          <p className="text-[#6B7280] mb-8 leading-[1.9]">
            C.E. Computer Repair is built around a simple idea — provide clear, practical, and reliable computer repair services without unnecessary complexity. Every device is evaluated individually, and every repair is carried out with attention to its specific condition.
          </p>

          <button
            onClick={() => navigate("/contact-book-service")}
            className="bg-[#1E86C8] text-white px-8 py-4"
          >
            Book Your Repair Today
          </button>
        </div>
      </section>
    </main>
  );
};

export default About;