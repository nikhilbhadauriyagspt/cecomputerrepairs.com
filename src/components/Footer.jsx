import {
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Facebook,
  Instagram,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about-us" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Contact & Book Service", path: "/contact-book-service" },
  ];

  const policies = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/terms-and-conditions" },
    { name: "Refund & Cancellation Policy", path: "/refund-cancellation-policy" },
    { name: "Disclaimer", path: "/disclaimer" },
    { name: "Cookie Policy", path: "/cookie-policy" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/CEComputerRepair/",
      icon: <Facebook className="w-5 h-5" />,
      color: "text-[#1877F2] hover:bg-[#1877F2] hover:text-white",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/cecomputerrepairs/",
      icon: <Instagram className="w-5 h-5" />,
      color: "text-[#E4405F] hover:bg-[#E4405F] hover:text-white",
    },
    {
      name: "MapQuest",
      url: "https://www.mapquest.com/us/washington/ce-computer-repair-351129554",
      icon: <img src="/mapquest.png" alt="MapQuest" className="w-6 h-6 object-contain" />,
      color: "hover:bg-[#f7d100]",
    },
    {
      name: "Yelp",
      url: "https://www.yelp.com/biz/ce-computer-repair-seattle",
      icon: <img src="/yelp-1.png" alt="Yelp" className="w-6 h-6 object-contain" />,
      color: "hover:bg-[#d32323]",
    },
  ];

  return (
    <footer className="w-full bg-white border-t border-[#D7E9F7] font-['Poppins']">
      <div className="max-w-[1900px] mx-auto px-6 lg:px-16 py-12">
        <div className="bg-[#062238] px-7 md:px-10 lg:px-14 py-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-white">
          <div>
            <h2 className="text-[26px] md:text-[34px] font-medium mb-3">
              Need help with your device?
            </h2>
            <p className="text-white/70 text-[15px] leading-7 max-w-[700px]">
              Visit our location or book a service request directly. We'll review the issue and guide you through the next steps.
            </p>
          </div>

          <button
            onClick={() => handleNavClick("/contact-book-service")}
            className="bg-[#1E86C8] hover:bg-[#0A4F86] text-white px-8 py-4 font-medium uppercase tracking-[0.08em] text-[14px] flex items-center gap-2"
          >
            Book a Service
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-[1900px] mx-auto px-6 lg:px-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 lg:gap-14">
          <div>
            <button onClick={() => handleNavClick("/")} className="mb-5 block">
              <img
                src="/Logo.png"
                alt="CE Computer Repairs"
                className="h-[64px] w-auto object-contain"
              />
            </button>

            <p className="text-[#6B7280] text-[15px] leading-7 mb-5">
              C.E. Computer Repair provides hardware repair services with accurate diagnostics and practical repair solutions.
            </p>

            
          </div>

          <div>
            <h3 className="text-[#082F57] font-medium mb-6 uppercase text-[14px] tracking-[0.14em]">
              Website Pages
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.path)}
                    className="text-[#6B7280] hover:text-[#1E86C8] text-[15px] transition"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[#082F57] font-medium mb-6 uppercase text-[14px] tracking-[0.14em]">
              Contact
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#1E86C8] shrink-0 mt-1" />
                <p className="text-[#6B7280] text-[15px] leading-7">
                  1818 E Yesler Wy Suite 101, Seattle, WA 98122, United States
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#1E86C8] shrink-0 mt-1" />
                <a
                  href="mailto:contact@cecomputerrepairs.com"
                  className="text-[#6B7280] hover:text-[#1E86C8] text-[15px] break-all"
                >
                  contact@cecomputerrepairs.com
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-7">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-11 h-11 border border-[#D7E9F7] flex items-center justify-center transition-all duration-300 ${item.color || "text-[#0A4F86] hover:bg-[#1E86C8] hover:text-white"}`}
                  aria-label={item.name}
                  title={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[#082F57] font-medium mb-6 uppercase text-[14px] tracking-[0.14em]">
              Policies
            </h3>
            <ul className="space-y-3">
              {policies.map((policy) => (
                <li key={policy.name}>
                  <Link
                    to={policy.path}
                    className="text-[#6B7280] hover:text-[#1E86C8] text-[15px] transition"
                  >
                    {policy.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#D7E9F7] py-6">
        <div className="max-w-[1900px] mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#6B7280] text-[14px]">
            © {currentYear} C.E. Computer Repair. All rights reserved.
          </p>

       
        </div>
      </div>
    </footer>
  );
};

export default Footer;