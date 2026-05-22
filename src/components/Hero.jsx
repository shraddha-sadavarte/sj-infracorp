import { motion } from "framer-motion";
import { FaHardHat, FaBuilding, FaRoad, FaArrowRight } from "react-icons/fa";

const Hero = () => {
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
    <section 
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#060913] pt-28 pb-16 lg:pb-0"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')",
        }}
      ></div>

      {/* Overlay: Elegant Radial & Linear Gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#060913] via-[#060913]/85 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#060913]/40 via-transparent to-[#060913]"></div>

      {/* Glow Spots */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-orange-500/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center w-full">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full mb-6 shadow-inner">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 animate-pulse"></div>
            <p className="text-xs tracking-[4px] uppercase text-gray-300 font-bold">
              ISO 9001:2015 Certified
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-extrabold leading-[1.1] text-white">
            Engineering
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400 mt-2">
              Strong Foundations
            </span>
            For Tomorrow
          </h1>

          {/* Description */}
          <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-300 max-w-xl">
            SJ Infracorp Private Limited delivers state-of-the-art civil construction,
            RCC road networks, heavy industrial fabrication, and robust government
            infrastructure with absolute engineering precision and safety.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <button 
              onClick={() => handleScrollTo("contact")}
              className="group bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 px-7 py-3.5 rounded-xl text-base font-bold text-white transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/20 flex items-center gap-2 cursor-pointer"
            >
              Get Started 
              <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button 
              onClick={() => handleScrollTo("services")}
              className="border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 px-7 py-3.5 rounded-xl text-base font-bold text-white transition-all duration-300 cursor-pointer"
            >
              Explore Services
            </button>
          </div>

          {/* Quick Counter Grid */}
          <div className="grid grid-cols-3 gap-6 mt-12 border-t border-white/10 pt-8 w-full max-w-lg">
            <div>
              <h3 className="text-3xl font-extrabold text-white">10+</h3>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Years experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-extrabold text-white">150+</h3>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Projects done</p>
            </div>
            <div>
              <h3 className="text-3xl font-extrabold text-white">50+</h3>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Heavy Machines</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, cubicBezier: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end"
        >
          {/* Main Card */}
          <div className="relative w-full max-w-[390px] h-[480px] rounded-[32px] overflow-hidden shadow-2xl glass-panel border border-white/15">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-blue-500/5"></div>

            <div className="relative z-10 p-8 flex flex-col justify-between h-full">
              {/* Top */}
              <div>
                <span className="text-xs font-semibold text-orange-400 uppercase tracking-widest">
                  Our Focus
                </span>
                <h2 className="text-2xl font-bold text-white mt-1 leading-snug">
                  Constructing with
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                    Precision & Excellence
                  </span>
                </h2>
                <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                  We deploy cutting-edge design methodologies, premium materials, and experienced operators.
                </p>
              </div>

              {/* Mini Features List */}
              <div className="space-y-3">
                {/* Feature 1 */}
                <div className="flex items-center gap-4 bg-white/5 border border-white/5 p-3 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center shrink-0">
                    <FaBuilding className="text-orange-500 text-base" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Civil Construction</h3>
                    <p className="text-gray-400 text-xs">Premium urban structures</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-center gap-4 bg-white/5 border border-white/5 p-3 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center shrink-0">
                    <FaRoad className="text-orange-500 text-base" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">RCC Road Networks</h3>
                    <p className="text-gray-400 text-xs">High-durability highways</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-center gap-4 bg-white/5 border border-white/5 p-3 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center shrink-0">
                    <FaHardHat className="text-orange-500 text-base" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Industrial Engineering</h3>
                    <p className="text-gray-400 text-xs">Heavy fabrication & execution</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Badge (Left Side) */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
            className="absolute -bottom-6 -left-6 bg-[#0c1322] border border-white/10 px-6 py-4 rounded-2xl shadow-2xl flex flex-col items-center"
          >
            <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">
              100%
            </span>
            <span className="text-[11px] text-gray-400 uppercase tracking-widest mt-1">
              Quality Assurance
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;