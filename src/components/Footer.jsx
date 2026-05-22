import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Our Services", id: "services" },
    { label: "Projects Portfolio", id: "projects" },
    { label: "Why Choose Us", id: "why-choose" },
    { label: "Contact Us", id: "contact" },
  ];

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#060913] overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {/* Company */}
        <div>
          <h2 className="text-3xl font-extrabold mb-5 text-white">
            SJ{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">
              Infracorp
            </span>
          </h2>
          <p className="text-gray-400 leading-relaxed text-sm">
            Delivering modern civil infrastructure, RCC roads,
            industrial fabrication and government construction
            solutions with excellence and trust.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-white">
            Quick Links
          </h3>
          <ul className="space-y-3.5 text-gray-400 text-sm">
            {quickLinks.map((item, index) => (
              <li
                key={index}
                onClick={() => handleScrollTo(item.id)}
                className="hover:text-orange-400 transition duration-300 cursor-pointer flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></span>
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-white">
            Services
          </h3>
          <ul className="space-y-3.5 text-gray-400 text-sm">
            {[
              { label: "Civil Construction", id: "services" },
              { label: "RCC Road Construction", id: "services" },
              { label: "Land Development", id: "services" },
              { label: "Industrial Fabrication", id: "services" },
              { label: "Government Projects", id: "services" },
            ].map((service, index) => (
              <li
                key={index}
                onClick={() => handleScrollTo(service.id)}
                className="hover:text-orange-400 transition cursor-pointer flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                {service.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-white">
            Contact
          </h3>
          <div className="space-y-5 text-gray-400 text-xs sm:text-sm">
            <div className="flex gap-3 items-start">
              <div className="bg-orange-500/10 p-2.5 rounded-xl border border-white/5 shrink-0">
                <FaMapMarkerAlt className="text-orange-500 text-sm" />
              </div>
              <p className="leading-relaxed">
                Sr. no. 116/9/2 Near Cipla Foundation
                Approach Road, Warje Pune 411058 Maharashtra
              </p>
            </div>

            <div className="flex gap-3 items-center">
              <div className="bg-orange-500/10 p-2.5 rounded-xl border border-white/5 shrink-0">
                <FaPhoneAlt className="text-orange-500 text-sm" />
              </div>
              <p className="leading-relaxed">
                74980 99449 <br />
                90499 02727
              </p>
            </div>

            <div className="flex gap-3 items-center">
              <div className="bg-orange-500/10 p-2.5 rounded-xl border border-white/5 shrink-0">
                <FaEnvelope className="text-orange-500 text-sm" />
              </div>
              <p className="break-all leading-relaxed">
                sjinfracorppvt.ltd@gmail.com
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 mt-6">
            {[FaFacebookF, FaInstagram, FaLinkedinIn].map(
              (Icon, index) => (
                <div
                  key={index}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-500 text-sm cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white hover:-translate-y-1 hover:border-orange-500/30"
                >
                  <Icon />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-6 text-center text-gray-500 text-xs relative z-10">
        © 2026 SJ Infracorp Private Limited. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;