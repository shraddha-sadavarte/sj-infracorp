import { motion } from "framer-motion";
import { FaUserCheck, FaClock, FaTruckLoading, FaFileSignature } from "react-icons/fa";

const WhyChoose = () => {
  const advantages = [
    {
      icon: FaUserCheck,
      title: "Engineering Expertise",
      description: "Our roster features certified civil engineers, road surveyors, and safety inspectors ensuring design integrity."
    },
    {
      icon: FaClock,
      title: "Strict Timeline Adherence",
      description: "Through staged milestones and modular fabrication, we consistently deliver public and private projects on schedule."
    },
    {
      icon: FaTruckLoading,
      title: "Advanced Machinery Fleet",
      description: "Owning high-capacity graders, concrete batching plants, and asphalt mixers prevents logistical bottlenecks."
    },
    {
      icon: FaFileSignature,
      title: "Full Tender Compliance",
      description: "As an authorized Class-A contractor, we meet all regulatory, environmental, and safety standards."
    }
  ];

  const steps = [
    { num: "01", name: "Geotechnical Survey", detail: "Thorough soil testing, grading surveys, and site analysis." },
    { num: "02", name: "Custom Blueprinting", detail: "Structural engineering CADs and material calculations." },
    { num: "03", name: "Sytematic Execution", detail: "Grading, compaction, and concrete/weld structures." },
    { num: "04", name: "Quality Assurance", detail: "Strict quality checks and certification signoff." }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section 
      id="why-choose" 
      className="relative py-24 bg-[#060913] overflow-hidden border-b border-white/5"
    >
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-orange-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-orange-400 bg-orange-500/10 border border-orange-500/20 px-4 py-1.5 rounded-full mb-4">
            Our Advantages
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Why Partners Trust SJ Infracorp
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            We merge professional execution, specialized fleets, and strict regulatory compliance.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Grid of 4 advantages */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-7 grid sm:grid-cols-2 gap-6"
          >
            {advantages.map((adv, index) => {
              const IconComponent = adv.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col items-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                    <IconComponent className="text-orange-500 text-xl" />
                  </div>
                  <h4 className="text-white font-bold text-base mb-2">{adv.title}</h4>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{adv.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* RIGHT: Visual Process Flow */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-5 p-8 rounded-[32px] glass-panel border border-white/10"
          >
            <h3 className="text-xl font-bold text-white mb-6">
              Our Execution Standard
            </h3>
            
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4 relative group">
                  {/* Connective Line */}
                  {index !== steps.length - 1 && (
                    <div className="absolute left-6 top-10 bottom-[-24px] w-0.5 bg-gradient-to-b from-orange-500/30 to-transparent"></div>
                  )}

                  {/* Step Circle */}
                  <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-sm shrink-0 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-amber-500 group-hover:text-white transition-all duration-300">
                    {step.num}
                  </div>

                  {/* Step text */}
                  <div>
                    <h4 className="text-white text-sm font-bold group-hover:text-orange-400 transition-colors">
                      {step.name}
                    </h4>
                    <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default WhyChoose;
