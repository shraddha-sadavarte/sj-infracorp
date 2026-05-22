import { motion } from "framer-motion";
import { FaBuilding, FaRoad, FaCogs, FaMapMarkedAlt, FaUniversity, FaArrowRight } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: FaBuilding,
      title: "Civil Construction",
      description: "End-to-end building solutions for commercial, residential, and institutional complexes with robust RCC framing.",
      features: ["Structural design support", "High-grade materials sourcing", "Turnkey project execution"],
      accent: "from-orange-500 to-amber-500"
    },
    {
      icon: FaRoad,
      title: "RCC & Asphalt Roads",
      description: "Durable highway development, urban paving, municipal road widening, and concrete sub-base layering.",
      features: ["Soil stability testing", "Heavy roller consolidation", "Durable concrete surfacing"],
      accent: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaMapMarkedAlt,
      title: "Land Development",
      description: "Precision earthworks, contour leveling, layout drafting, boundary detailing, and heavy excavation.",
      features: ["Site clearing & leveling", "Excavation & trenching", "Infrastructure utility layouts"],
      accent: "from-amber-500 to-yellow-500"
    },
    {
      icon: FaCogs,
      title: "Industrial Fabrication",
      description: "Heavy structural steel welding, plant support framing, custom brackets, and factory facility installations.",
      features: ["Heavy fabrication shop", "High-tolerance welding", "Anti-corrosion finishing"],
      accent: "from-red-500 to-orange-500"
    },
    {
      icon: FaUniversity,
      title: "Government Projects",
      description: "Execution of state tenders, public utilities, urban drainage channels, and municipal office structures.",
      features: ["Tender & compliance filing", "Class-A workmanship standards", "HSE certified construction"],
      accent: "from-purple-500 to-indigo-500"
    }
  ];

  const handleScrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section 
      id="services" 
      className="relative py-24 bg-[#060913] overflow-hidden border-b border-white/5"
    >
      {/* Background gradients */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-orange-500/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-orange-400 bg-orange-500/10 border border-orange-500/20 px-4 py-1.5 rounded-full mb-4">
            Our Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Comprehensive Infrastructure Solutions
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            Delivering precision engineering and high-durability results across key segments of civil, road, and industrial sectors.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative rounded-[24px] p-8 glass-panel glass-panel-hover flex flex-col justify-between"
              >
                <div>
                  {/* Icon Block */}
                  <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-orange-500 text-2xl" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Link */}
                <div 
                  onClick={handleScrollToContact}
                  className="inline-flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-widest cursor-pointer group/btn"
                >
                  Inquire Now 
                  <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
