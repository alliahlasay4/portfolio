import { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaFileDownload, FaCheck, FaCopy, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    // Trigger mailto link with pre-filled content
    const mailtoSubject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
    const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    
    window.location.href = `mailto:${personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-canvas-light dark:bg-canvas-dark text-slate-900 dark:text-slate-100 transition-colors duration-200">
      
      {/* Micro Polka Dot Matrix Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:20px_20px] opacity-30 dark:opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <p className="text-xs font-mono font-bold uppercase tracking-wider text-brand-indigo dark:text-brand-sky mb-1">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
            Let’s Work Together
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
            I am currently open to Junior Developer and Frontend engineering opportunities. Send a message below or reach out directly via email.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info Cards & Quick Links */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Email Contact Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-borderSubtle-dark shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-brand-indigo/10 text-brand-indigo text-lg shrink-0">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400">Direct Email</p>
                  <a
                    href={`mailto:${personal.email}`}
                    className="font-bold text-slate-900 dark:text-slate-100 text-sm hover:text-brand-indigo dark:hover:text-brand-sky transition-colors"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  {copied ? (
                    <>
                      <FaCheck className="text-emerald-500" /> Copied to Clipboard
                    </>
                  ) : (
                    <>
                      <FaCopy /> Copy Email Address
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Phone Contact Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-borderSubtle-dark shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-brand-sky/10 text-brand-sky text-lg shrink-0">
                  <FaPhone />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400">Phone / WhatsApp</p>
                  <a
                    href={`tel:${personal.phone.replace(/\s+/g, "")}`}
                    className="font-bold text-slate-900 dark:text-slate-100 text-sm hover:text-brand-indigo dark:hover:text-brand-sky transition-colors"
                  >
                    {personal.phone}
                  </a>
                </div>
              </div>

              <a
                href={`tel:${personal.phone.replace(/\s+/g, "")}`}
                className="text-xs font-mono font-semibold px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                Call
              </a>
            </div>

            {/* Profiles & Download Resume */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white dark:bg-slate-800 dark:text-slate-100 font-semibold text-xs hover:bg-brand-indigo transition-colors"
              >
                <FaGithub /> GitHub
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-indigo text-white font-semibold text-xs hover:bg-indigo-700 transition-colors"
              >
                <FaLinkedin /> LinkedIn
              </a>

              <a
                href={personal.cvUrl}
                download
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-borderSubtle-dark text-slate-700 dark:text-slate-300 font-medium text-xs hover:border-brand-indigo dark:hover:border-brand-sky transition-colors"
              >
                <FaFileDownload className="text-brand-indigo dark:text-brand-sky" /> Download CV
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Email Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-borderSubtle-dark shadow-lg text-left space-y-6">
              
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Fill out the form below to initiate an email conversation.
                </p>
              </div>

              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono flex items-center gap-2">
                  <FaCheck /> Opening your mail client with pre-filled message...
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name & Email Inputs */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-brand-indigo transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                      Your Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-brand-indigo transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                    Subject / Project Opportunity
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Junior Developer Opportunity / Web Inquiry"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-brand-indigo transition-colors"
                  />
                </div>

                {/* Message Textarea */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Alliah, I would like to discuss a project / role with you..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-brand-indigo transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-indigo text-white font-semibold text-sm shadow hover:bg-indigo-700 active:translate-y-[1px] transition-all"
                >
                  <FaPaperPlane className="text-xs" /> Send Message
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}