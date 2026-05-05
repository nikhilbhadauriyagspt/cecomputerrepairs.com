import { CheckCircle2 } from "lucide-react";

const SecurityTips = () => {
  const points = [
    "Careful hardware inspection before repair",
    "Clear explanation of identified issues",
    "Focus on component-level solutions",
    "Use of compatible and quality parts",
    "Organized repair process with guesswork",
  ];

  return (
    <section className="w-full bg-[#F7F7F7] py-16 lg:py-24 font-['Poppins'] overflow-hidden">
      <div className="max-w-[1900px] mx-auto px-6 lg:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-[520px_1fr] gap-14 lg:gap-20 items-start">
          
          {/* Left Heading */}
          <div>
           

            <h2 className="text-[#082F57] text-[32px] md:text-[42px] lg:text-[52px] font-medium leading-tight uppercase mb-6">
              Why Choose C.E. Computer Repair
            </h2>

            <div className="w-12 h-[3px] bg-[#1E86C8] mb-7" />

            <p className="text-[#4B5563] text-[16px] leading-[1.9] max-w-[500px] font-medium">
              We aim to provide a straight forward repair experience without unnecessary complications.
            </p>
          </div>

          {/* Right Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            {points.map((point, index) => (
              <div
                key={index}
                className="relative border-b border-[#D7E9F7] pb-8"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-[#0A4F86] text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>

                  <div>
                    <p className="text-[#1E86C8] text-[12px] font-medium uppercase tracking-[0.18em] mb-3">
                      Point {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="text-[#082F57] text-[10px] md:text-[15px] font-medium leading-[1.45]">
                      {point}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SecurityTips;