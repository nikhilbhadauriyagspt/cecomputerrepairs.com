import { ArrowRight, Monitor, HardDrive, Thermometer, Cpu } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();

  const points = [
    {
      icon: <Monitor />,
      title: "Screen & Display Repair",
      text: "Careful inspection for damaged screens, display faults, and related hardware issues.",
    },
    {
      icon: <HardDrive />,
      title: "Storage Drive Issues",
      text: "Practical repair guidance for failing drives, slow systems, and device storage problems.",
    },
    {
      icon: <Thermometer />,
      title: "Overheating Systems",
      text: "Detailed checking for heat, fan, dust, airflow, and internal performance concerns.",
    },
  ];

  return (
    <section className="w-full bg-white py-20 lg:py-28 font-['Poppins'] overflow-hidden">
      <div className="max-w-[1900px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_520px_1fr] gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div>
           

            <h2 className="text-[#111827] text-[34px] md:text-[44px] font-medium leading-tight uppercase mb-6">
              Practical Repair <br /> For Everyday Devices
            </h2>

            <div className="w-9 h-[3px] bg-[#1E86C8] mb-7" />

            <div className="space-y-5">
              <p className="text-[#6B7280] text-[16px] leading-[1.9]">
                Modern devices are essential for work, communication, and daily tasks.
                When a computer or laptop stops working properly, it can disrupt everything.
                At C.E. Computer Repair, we focus on identifying hardware issues accurately
                and providing practical repair solutions.
              </p>

              <p className="text-[#6B7280] text-[16px] leading-[1.9]">
                Our services are designed for common and advanced hardware problems,
                including damaged screens, failing storage drives, overheating systems,
                and component-level repairs. Every device is handled with attention to
                detail and a clear repair process.
              </p>
            </div>

            <button
              onClick={() => navigate("/about-us")}
              className="mt-9 inline-flex items-center gap-2 bg-[#1E86C8] text-white px-8 py-4 text-[14px] font-medium uppercase tracking-[0.08em] hover:bg-[#0A4F86] transition"
            >
              Read More
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Center Image */}
          <div className="relative flex justify-center">
            <div className="absolute top-10 w-[360px] h-[360px] bg-[#D7E9F7] rounded-full blur-3xl opacity-70" />
            <img
              src="/intro-device.png"
              alt="Computer and laptop hardware repair"
              className="relative z-10 w-full max-w-[460px] object-contain drop-shadow-[0_30px_35px_rgba(10,79,134,0.22)]"
            />
          </div>

          {/* Right Points */}
          <div className="space-y-10">
            {points.map((item, index) => (
              <div key={index} className="flex gap-7">
                <div className="w-14 h-14 shrink-0 rounded-2xl border border-[#D7E9F7] text-[#0A4F86] flex items-center justify-center">
                  <div className="w-7 h-7">{item.icon}</div>
                </div>

                <div>
                  <h3 className="text-[#222] text-[21px] font-medium mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#4B5563] text-[15px] leading-[1.8] font-medium">
                    {item.text}
                  </p>
                  </div>
                  </div>
                  ))}

                  <div className="flex gap-7">
                  <div className="w-14 h-14 shrink-0 rounded-2xl border border-[#D7E9F7] text-[#0A4F86] flex items-center justify-center">
                  <Cpu className="w-7 h-7" />
                  </div>

                  <div>
                  <h3 className="text-[#222] text-[21px] font-medium mb-3">
                  Component-Level Repairs
                  </h3>
                  <p className="text-[#4B5563] text-[15px] leading-[1.8] font-medium">
                  Clear diagnostics and practical solutions for internal hardware and device performance faults.
                  </p>
                  </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;