import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (path) => {
    setIsMenuOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about-us" },
    { name: "How It Works", path: "/how-it-works" },
  ];

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === path;
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 border-b ${
        isScrolled
          ? "border-[#D7E9F7] shadow-[0_8px_28px_rgba(10,79,134,0.10)]"
          : "border-[#E6F1FA]"
      }`}
    >
      <div className="max-w-[1900px] mx-auto px-6 lg:px-10">
        <div className="h-[92px] flex items-center justify-between">
          <button
            onClick={() => handleNavClick("/")}
            className="flex items-center shrink-0"
          >
            <img
              src="/Logo.png"
              alt="CE Computer Repairs"
              className="h-[62px] w-auto object-contain"
            />
          </button>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.path)}
                className={`text-[14px] font-medium uppercase tracking-[0.08em] transition ${
                  isActive(link.path)
                    ? "text-[#0A4F86]"
                    : "text-[#111827] hover:text-[#1E86C8]"
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          <button
            onClick={() => handleNavClick("/contact-book-service")}
            className="hidden lg:inline-flex items-center gap-2 bg-[#0A4F86] text-white px-8 py-4 rounded-[9px] text-[14px] font-medium uppercase tracking-[0.04em] hover:bg-[#1E86C8] transition"
          >
            Book a Service
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-11 h-11 rounded-lg bg-[#0A4F86] text-white flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden bg-white border-t border-[#E6F1FA] transition-all duration-300 ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 py-5 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.path)}
              className={`w-full text-left px-4 py-4 rounded-xl font-bold uppercase text-[14px] ${
                isActive(link.path)
                  ? "bg-[#EDF6FC] text-[#0A4F86]"
                  : "text-zinc-800 hover:bg-[#F4F8FC]"
              }`}
            >
              {link.name}
            </button>
          ))}

          <button
            onClick={() => handleNavClick("/contact-book-service")}
            className="w-full mt-3 flex items-center justify-center gap-2 bg-[#0A4F86] text-white px-6 py-4 rounded-xl font-medium uppercase"
          >
            Book a Service
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;