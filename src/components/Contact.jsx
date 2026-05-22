import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle, FaSpinner } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "civil",
    details: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "civil",
        details: ""
      });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section 
      id="contact" 
      className="relative py-24 bg-[#090e1a] overflow-hidden"
    >
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-orange-400 bg-orange-500/10 border border-orange-500/20 px-4 py-1.5 rounded-full mb-4">
            Connect
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Request an Estimate or Quote
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            Get in touch with our engineering estimators. Fill out the scope parameters below.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT: Info Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Contact Channels
            </h3>

            {/* Address */}
            <div className="flex gap-4 p-6 rounded-2xl glass-panel hover:border-white/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                <FaMapMarkerAlt className="text-orange-500 text-lg" />
              </div>
              <div>
                <h4 className="text-white text-sm font-bold uppercase tracking-wider">Registered Office</h4>
                <p className="text-gray-400 text-xs sm:text-sm mt-2 leading-relaxed">
                  Sr. no. 116/9/2 Near Cipla Foundation Approach Road, Warje Pune 411058 Maharashtra
                </p>
              </div>
            </div>

            {/* Phones */}
            <div className="flex gap-4 p-6 rounded-2xl glass-panel hover:border-white/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                <FaPhoneAlt className="text-orange-500 text-lg" />
              </div>
              <div>
                <h4 className="text-white text-sm font-bold uppercase tracking-wider">Phone Lines</h4>
                <p className="text-gray-400 text-xs sm:text-sm mt-2 leading-relaxed">
                  +91 74980 99449 <br />
                  +91 90499 02727
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 p-6 rounded-2xl glass-panel hover:border-white/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                <FaEnvelope className="text-orange-500 text-lg" />
              </div>
              <div>
                <h4 className="text-white text-sm font-bold uppercase tracking-wider">E-Mail Address</h4>
                <p className="text-gray-400 text-xs sm:text-sm mt-2 break-all">
                  sjinfracorppvt.ltd@gmail.com
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4 p-6 rounded-2xl glass-panel hover:border-white/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                <FaClock className="text-orange-500 text-lg" />
              </div>
              <div>
                <h4 className="text-white text-sm font-bold uppercase tracking-wider">Business Hours</h4>
                <p className="text-gray-400 text-xs sm:text-sm mt-2">
                  Monday — Saturday: 9:00 AM — 6:00 PM <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Modern Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7 p-8 sm:p-10 rounded-[32px] glass-panel border border-white/15 shadow-2xl relative"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Project Specification Form
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row: Name & Company */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="text-xs font-semibold text-gray-300 uppercase tracking-wider block mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#060913] border border-white/10 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 transition-all duration-300 outline-none"
                    placeholder="Enter full name"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="text-xs font-semibold text-gray-300 uppercase tracking-wider block mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-[#060913] border border-white/10 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 transition-all duration-300 outline-none"
                    placeholder="E.g. Infracorp Ltd"
                  />
                </div>
              </div>

              {/* Row: Phone & Email */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="text-xs font-semibold text-gray-300 uppercase tracking-wider block mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#060913] border border-white/10 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 transition-all duration-300 outline-none"
                    placeholder="E.g. +91 9876543210"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs font-semibold text-gray-300 uppercase tracking-wider block mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#060913] border border-white/10 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 transition-all duration-300 outline-none"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              {/* Dropdown Type */}
              <div>
                <label htmlFor="projectType" className="text-xs font-semibold text-gray-300 uppercase tracking-wider block mb-2">
                  Project Segment
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full bg-[#060913] border border-white/10 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-xl px-4 py-3 text-sm text-white transition-all duration-300 outline-none"
                >
                  <option value="civil">Civil & Structural Construction</option>
                  <option value="road">RCC or Asphalt Roadways</option>
                  <option value="land">Land Development / Earthworks</option>
                  <option value="fabrication">Industrial Steel Fabrication</option>
                  <option value="government">Government Tender / Public Works</option>
                </select>
              </div>

              {/* Project Scope Description */}
              <div>
                <label htmlFor="details" className="text-xs font-semibold text-gray-300 uppercase tracking-wider block mb-2">
                  Project Description
                </label>
                <textarea
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-[#060913] border border-white/10 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 transition-all duration-300 outline-none resize-none"
                  placeholder="Detail the location, size, timeline parameters and technical requirements..."
                ></textarea>
              </div>

              {/* Submit Button & Feedback banner */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 disabled:opacity-50 px-8 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:scale-102 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-orange-500/20"
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin" /> Analyzing Specs...
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </button>

                {submitSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-xs font-semibold text-green-400"
                  >
                    <FaCheckCircle className="text-base" />
                    <span>Your quote request has been queued. Our surveyors will reply in 24 hours.</span>
                  </motion.div>
                )}
              </div>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
