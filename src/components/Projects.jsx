import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaMapMarkerAlt, FaCalendarAlt, FaUser, FaInfoCircle } from "react-icons/fa";

import heroImg from "../assets/hero.png";
import highwayImg from "../assets/highway-road-construction.png";
import industrialFabImg from "../assets/industrial fabrication.jpeg";
import rccWorkImg from "../assets/industrial rcc and civil work 1.jpg.jpeg";
import internalShedImg from "../assets/internal shed.jpeg";
import landDevImg from "../assets/land development.jpg.jpeg";
import buildingImg from "../assets/building construction.jpeg";
import fabricationShedImg from "../assets/fabrication shed.jpeg";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { label: "All Projects", id: "all" },
    { label: "Roadways", id: "roadways" },
    { label: "Commercial", id: "commercial" },
    { label: "Industrial", id: "industrial" },
  ];

  const projectsData = [
    {
      id: 1,
      title: "Warje Bypass Asphalt Link",
      category: "roadways",
      image: heroImg,
      location: "Warje, Pune",
      client: "Pune Municipal Corporation (PMC)",
      scope: "Constructed 4.2 km of high-durability RCC dual carriage roadway, complete with sub-grade stabilization and cross-drainage conduits.",
      year: "2024",
      status: "Completed",
    },
    {
      id: 2,
      title: "Viman Nagar Commercial Arena",
      category: "commercial",
      image: highwayImg,
      location: "Viman Nagar, Pune",
      client: "Insignia Developers",
      scope: "Reinforced concrete structural skeleton, foundation piling, and architectural civil masonry works for a 12-storey corporate tower.",
      year: "2025",
      status: "Completed",
    },
    {
      id: 3,
      title: "Hadapsar Steel Fabrication Yard",
      category: "industrial",
      image: industrialFabImg,
      location: "Hadapsar MIDC, Pune",
      client: "Apex Tech Engineering",
      scope: "Design, structural fabrication, assembly, and hoisting of 450 metric tons of heavy gantry frameworks and support lattices.",
      year: "2023",
      status: "Completed",
    },
    {
      id: 4,
      title: "Chinchwad Ring Road Widening",
      category: "roadways",
      image: rccWorkImg,
      location: "Pimpri-Chinchwad, Pune",
      client: "PCMC Municipal Corporation",
      scope: "Four-lane widening of a 6.8 km stretch, drainage alignment, and concrete pavement installation utilizing slip-form paving technology.",
      year: "2024",
      status: "Completed",
    },
    {
      id: 5,
      title: "Hinjawadi Tech-Park RCC Decking",
      category: "commercial",
      image: internalShedImg,
      location: "Hinjawadi Phase II, Pune",
      client: "Syntel Systems",
      scope: "Sub-level excavation, parking basement RCC retaining walls, and multi-tier concrete flat slab construction.",
      year: "2025",
      status: "In Progress",
    },
    {
      id: 6,
      title: "Talegaon Automotive Assembly Shed",
      category: "industrial",
      image: landDevImg,
      location: "MIDC Talegaon, Pune",
      client: "Varroc Industries",
      scope: "Heavy fabrication and installation of metal roofing, support columns, overhead crane runway structures, and structural cladding.",
      year: "2024",
      status: "Completed",
    },
    {
      id: 7,
      title: "Building Construction Project",
      category: "commercial",
      image: buildingImg,
      location: "Mumbai, India",
      client: "ABC Construction",
      scope: "Construction of multi-story commercial building with modern architecture.",
      year: "2022",
      status: "Completed",
    },
    {
      id: 8,
      title: "Fabrication Shed Project",
      category: "industrial",
      image: fabricationShedImg,
      location: "Pune Industrial Area",
      client: "XYZ Industries",
      scope: "Design and fabrication of steel sheds for storage and manufacturing.",
      year: "2023",
      status: "Completed",
    },
  ];

  const filteredProjects = activeFilter === "all"
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section 
      id="projects" 
      className="relative py-24 bg-[#090e1a] overflow-hidden border-b border-white/5"
    >
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-orange-400 bg-orange-500/10 border border-orange-500/20 px-4 py-1.5 rounded-full mb-4">
            Our Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Featured Engineering Projects
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            Explore our portfolio of successfully executed roadways, commercial hubs, and industrial structures.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25"
                  : "bg-white/5 hover:bg-white/10 text-gray-300 border border-white/5"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-xl cursor-pointer aspect-[4/3] flex flex-col justify-end"
              >
                {/* Project Image */}
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090e1a]/95 via-[#090e1a]/40 to-transparent"></div>
                </div>

                {/* Card Content Overlay */}
                <div className="relative z-10 p-6 flex flex-col justify-end">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2.5 py-1 rounded-full self-start mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-white leading-snug group-hover:text-orange-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-gray-400 mt-2">
                    <FaMapMarkerAlt className="text-orange-500 shrink-0" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Lightbox */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
              {/* Overlay background */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-[#060913]/90 backdrop-blur-md"
              ></motion.div>

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel border border-white/15 rounded-[32px] shadow-2xl z-10 flex flex-col md:grid md:grid-cols-12"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#090e1a]/85 border border-white/10 flex items-center justify-center text-white hover:text-orange-400 hover:scale-105 transition-all duration-300 z-20 cursor-pointer"
                >
                  <FaTimes />
                </button>

                {/* Left: Image Side */}
                <div className="md:col-span-6 relative h-64 md:h-full min-h-[300px]">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090e1a] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#090e1a]/15"></div>
                </div>

                {/* Right: Info Side */}
                <div className="md:col-span-6 p-8 flex flex-col justify-between">
                  <div>
                    {/* Category */}
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full inline-block mb-4">
                      {selectedProject.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-2xl font-extrabold text-white mb-6">
                      {selectedProject.title}
                    </h3>

                    {/* Details checklist */}
                    <div className="space-y-4 mb-6">
                      <div className="flex gap-3 items-center">
                        <FaUser className="text-orange-500 text-sm w-4 shrink-0" />
                        <div>
                          <p className="text-[10px] text-gray-500 uppercase tracking-widest">Client</p>
                          <p className="text-sm font-semibold text-gray-200">{selectedProject.client}</p>
                        </div>
                      </div>

                      <div className="flex gap-3 items-center">
                        <FaMapMarkerAlt className="text-orange-500 text-sm w-4 shrink-0" />
                        <div>
                          <p className="text-[10px] text-gray-500 uppercase tracking-widest">Location</p>
                          <p className="text-sm font-semibold text-gray-200">{selectedProject.location}</p>
                        </div>
                      </div>

                      <div className="flex gap-3 items-center">
                        <FaCalendarAlt className="text-orange-500 text-sm w-4 shrink-0" />
                        <div>
                          <p className="text-[10px] text-gray-500 uppercase tracking-widest">Year Completed / Status</p>
                          <p className="text-sm font-semibold text-gray-200">
                            {selectedProject.year} — <span className="text-orange-400 font-bold">{selectedProject.status}</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Scope text */}
                    <div className="border-t border-white/10 pt-5">
                      <div className="flex items-center gap-2 mb-2">
                        <FaInfoCircle className="text-orange-500 text-sm" />
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white">Project Scope & Details</h4>
                      </div>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                        {selectedProject.scope}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Projects;
