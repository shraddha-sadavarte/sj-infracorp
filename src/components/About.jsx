import { motion } from "framer-motion";
import { FaAward, FaShieldAlt, FaHammer } from "react-icons/fa";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section 
      id="about" 
      className="relative py-24 bg-[#090e1a] overflow-hidden border-b border-white/5"
    >
      {/* Background patterns */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7"
          >
            {/* Section Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-1.5 rounded-full mb-6">
              <span className="text-xs font-extrabold uppercase tracking-wider text-orange-400">
                Who We Are
              </span>
            </motion.div>

            {/* Section Title */}
            <motion.h2 
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-extrabold text-white leading-tight"
            >
              Crafting Tomorrow's Infrastructure with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300 mt-1">
                Precision & Quality
              </span>
            </motion.h2>

            {/* Description Paragraphs */}
            <motion.p 
              variants={itemVariants}
              className="mt-6 text-gray-300 leading-relaxed text-base md:text-lg"
            >
              Established as a key driver in construction, **SJ Infracorp Private Limited** has spent over a decade delivering high-impact civil and roadway structures. We bridge engineering excellence with robust materials, ensuring that every foundation we lay is built to endure.
            </motion.p>

            <motion.p 
              variants={itemVariants}
              className="mt-4 text-gray-400 leading-relaxed text-sm md:text-base"
            >
              From major municipal asphalt and RCC roads to intricate industrial weld structures and heavy foundations, our expert team and robust machinery fleet allow us to handle large-scale developments smoothly, on budget, and always up to standard.
            </motion.p>

            {/* Pillars Grid */}
            <motion.div 
              variants={itemVariants}
              className="grid sm:grid-cols-2 gap-6 mt-8"
            >
              {/* Pillar 1 */}
              <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                <div className="text-orange-500 text-xl mt-1 shrink-0">
                  <FaShieldAlt />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">HSE Safety Standards</h4>
                  <p className="text-gray-400 text-xs mt-1">We enforce zero-harm protocols across all machinery operations and work crews.</p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                <div className="text-orange-500 text-xl mt-1 shrink-0">
                  <FaHammer />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">In-House Fleet</h4>
                  <p className="text-gray-400 text-xs mt-1">Owning our graders, rollers, and mixers guarantees high reliability and schedules.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Visual Collage */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            {/* Frame wrapper */}
            <div className="relative w-full max-w-[400px]">
              
              {/* Main Image */}
              <div className="relative rounded-[28px] overflow-hidden border border-white/10 shadow-2xl aspect-[3/4]">
                <img 
                  src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=800&auto=format&fit=crop" 
                  alt="Modern Construction Site"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090e1a]/80 via-transparent to-transparent"></div>
              </div>

              {/* Overlapping secondary element */}
              <div className="absolute -bottom-6 -left-6 w-3/5 rounded-[22px] overflow-hidden border border-white/10 shadow-2xl aspect-square hidden sm:block">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=500&auto=format&fit=crop" 
                  alt="Industrial machinery"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Tiny Stats bubble */}
              <div className="absolute top-8 -right-4 glass-panel border border-white/10 px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-orange-500/20 flex items-center justify-center shrink-0">
                  <FaAward className="text-orange-500 text-lg" />
                </div>
                <div>
                  <h4 className="text-white text-xs font-extrabold uppercase tracking-wide">Government</h4>
                  <p className="text-[10px] text-gray-400">Approved Contractor</p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
