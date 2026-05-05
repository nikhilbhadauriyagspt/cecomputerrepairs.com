import { Link } from "react-router-dom";
import { MapPin, Mail, CheckCircle2 } from "lucide-react";

const CTASection = () => {
  return (
    <section className="w-full bg-white py-14 md:py-20 font-['Poppins']">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="bg-[#F4F8FC] border border-[#D7E9F7] p-8 md:p-12 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-10 items-center">
            
            <div>
              <p className="text-[#1E86C8] text-[12px] font-medium uppercase tracking-[0.22em] mb-4">
                Contact & Service
              </p>

              <h3 className="text-[#082F57] text-[30px] md:text-[42px] font-medium leading-tight mb-5">
                Need help with your device?
              </h3>

              <p className="text-[#6B7280] text-[16px] leading-[1.8] max-w-[720px] mb-7">
                You can visit our location or book a service request directly.
                We’ll review the issue and guide you through the next steps.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3 text-[#082F57] text-[15px] font-medium">
                  <MapPin className="w-5 h-5 text-[#1E86C8] shrink-0 mt-0.5" />
                  <span>1818 E Yesler Way, Suite 101, Seattle, WA 98122, United States</span>
                </div>

                <div className="flex items-center gap-3 text-[#082F57] text-[15px] font-medium">
                  <Mail className="w-5 h-5 text-[#1E86C8] shrink-0" />
                  <a href="mailto:contact@cecomputerrepairs.com" className="hover:text-[#1E86C8] transition-colors">contact@cecomputerrepairs.com</a>
                </div>
              </div>

              <Link
                to="/contact-book-service"
                className="inline-flex items-center justify-center bg-[#1E86C8] text-white px-8 py-4 text-[14px] font-medium uppercase tracking-[0.08em] hover:bg-[#0A4F86] transition"
              >
                Book a Service
              </Link>
            </div>

            <div className="bg-white border border-[#D7E9F7] p-7 md:p-8">
             

              <div className="space-y-5">
                {[
                  "Free initial diagnosis available",
                  "No unnecessary repairs recommended",
                  "Service based on actual device condition",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1E86C8] shrink-0 mt-0.5" />
                    <p className="text-[#082F57] text-[15px] font-medium leading-[1.6]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;