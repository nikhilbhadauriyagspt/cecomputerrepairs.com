
import { CheckCircle2 } from "lucide-react";

const FAQSection = () => {
  const commonIssues = [
    "Broken or damaged laptop screens",
    "Slow or unresponsive systems",
    "Hard drive failures and storage errors",
    "Overheating and fan noise",
    "Battery not charging or draining quickly",
    "Keyboard or input issues",
    "Power-related problems",
    "Shape",
  ];

  return (
    <section id="faq" className="w-full bg-[#F4F8FC] py-14 lg:py-20 font-['Poppins']">
      <div className="max-w-[1900px] mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-stretch">
          
          <div className="bg-white  p-6 md:p-8 border border-[#D7E9F7] shadow-[0_12px_35px_rgba(10,79,134,0.06)]">
            <h2 className="text-[#082F57] text-[26px] md:text-[34px] font-medium leading-tight mb-6">
              Common Issues We Handle
            </h2>

            <div className="grid grid-cols-1 gap-3">
              {commonIssues.map((issue, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-[#F4F8FC] rounded-[14px] px-4 py-3 border border-[#D7E9F7]"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#1E86C8] shrink-0" />
                  <p className="text-[#082F57] text-[14px] md:text-[15px] font-semibold">
                    {issue}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative bg-[#062238]   p-6 md:p-8 overflow-hidden flex items-center">
            <div className="absolute -top-20 -right-20 w-[220px] h-[220px] bg-[#1E86C8]/25 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-[220px] h-[220px] bg-[#0A4F86]/40 rounded-full blur-3xl" />

            <div className="relative  z-10">
              <p className="text-[#1E86C8] text-[11px]  font-medium uppercase tracking-[0.18em] mb-4">
                About Our Approach
              </p>

              <h3 className="text-white text-[26px] md:text-[34px] font-medium leading-tight mb-5">
                About Our Approach
              </h3>

              <div className="space-y-4">
                <p className="text-white/78 text-[14px] md:text-[15px] leading-[1.8]">
                  We focus on practical repair solutions rather than temporary fixes. Each device is evaluated individually, and only necessary repairs are recommended.
                </p>

                <p className="text-white/78 text-[14px] md:text-[15px] leading-[1.8]">
                  Our goal is to help extend the usable life of your device through proper hardware care and accurate diagnostics.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;