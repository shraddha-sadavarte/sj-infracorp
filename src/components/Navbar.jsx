import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "Services", id: "services" },
  { label: "Projects", id: "projects" },
  { label: "Why Choose Us", id: "why-choose" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Simple active scroll spy
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // height of the fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#060913]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="relative cursor-pointer group"
          onClick={() => scrollToSection("home")}
        >
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight transition-transform duration-300 group-hover:scale-[1.02]">
            <span className="text-white">SJ</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">
              Infracorp
            </span>
          </h1>
          <div className="absolute -bottom-1.5 left-0 w-0 h-[3px] bg-gradient-to-r from-orange-500 to-amber-400 rounded-full transition-all duration-300 group-hover:w-full"></div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-gray-300">
          {navItems.map((item, index) => (
            <li
              key={index}
              onClick={() => scrollToSection(item.id)}
              className={`relative cursor-pointer transition-colors duration-300 py-1 hover:text-orange-400 ${
                activeSection === item.id
                  ? "text-orange-500 font-semibold"
                  : ""
              }`}
            >
              {item.label}
              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-300 ${
                  activeSection === item.id ? "w-full" : "w-0 hover:w-full"
                }`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <button 
          onClick={() => scrollToSection("contact")}
          className="hidden md:block bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 px-6 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/25 cursor-pointer"
        >
          Request Quote
        </button>

        {/* Mobile Icon */}
        <div
          className="lg:hidden text-2xl text-white cursor-pointer hover:text-orange-500 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${
          menuOpen ? "max-h-[450px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-[#0b1120]/95 backdrop-blur-2xl border-t border-white/10 px-6 py-6 shadow-2xl">
          <ul className="flex flex-col gap-5 text-base text-gray-300 font-medium">
            {navItems.map((item, index) => (
              <li
                key={index}
                onClick={() => scrollToSection(item.id)}
                className={`cursor-pointer transition-colors py-1.5 border-b border-white/5 last:border-0 hover:text-orange-400 ${
                  activeSection === item.id ? "text-orange-500 pl-2 border-l-2 border-l-orange-500" : ""
                }`}
              >
                {item.label}
              </li>
            ))}
            <button 
              onClick={() => scrollToSection("contact")}
              className="w-full bg-gradient-to-r from-orange-500 to-amber-500 py-3 rounded-xl font-bold text-white shadow-lg shadow-orange-500/20 text-center mt-2 cursor-pointer"
            >
              Request Quote
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;