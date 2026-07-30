import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiInstagram, FiArrowUp } from "react-icons/fi";
import { fadeUp, fadeIn, viewportOnce } from "../../utils/animations";

const socialLinks = [
  { icon: FiGithub, href: "https://github.com/AtharvBhorkar", label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/atharv-bhorkar-45524122a/", label: "LinkedIn" },
  { icon: FiInstagram, href: "https://www.instagram.com/atharv__155/", label: "Instagram" },
  { icon: FiMail, href: "mailto:atharvbhorkar19@gmail.com", label: "Email" },
];

const quickLinks = [
  { name: "Projects", id: "projects" },
  { name: "About me", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Certifications", id: "certifications" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

const Footer = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-neutral-950 border-t border-cyan-500/10 pt-16 pb-8 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 pb-10 border-b border-neutral-800">
          {/* Brand */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-xs"
          >
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo.png"
                alt="Atharv Logo"
                className="h-10 w-10 rounded-full object-cover border border-cyan-500/30"
                style={{ boxShadow: "0 0 12px rgba(34,211,238,0.35)" }}
              />
              <span className="text-white font-semibold text-lg">Atharv</span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Frontend developer crafting fast, responsive, and visually
              engaging web experiences with Frontend tools.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ delay: 0.1 }}
          >
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wide mb-4">
              Quick Links
            </p>
            <ul className="grid grid-cols-2 grid-flow-col grid-rows-4 gap-x-6 gap-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-neutral-400 text-sm hover:text-cyan-400 transition-colors duration-200 whitespace-nowrap"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Socials */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ delay: 0.2 }}
          >
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wide mb-4">
              Connect
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-cyan-500/20 bg-neutral-900/50 text-neutral-400 hover:text-cyan-400 hover:border-cyan-400/60 hover:scale-110 transition-all duration-300"
                    style={{ boxShadow: "0 0 0 rgba(34,211,238,0)" }}
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-neutral-500 text-xs text-center sm:text-left"
          >
            © {new Date().getFullYear()} Atharv Bhorkar. All rights reserved.
          </motion.p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
            className="flex items-center justify-center w-9 h-9 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400"
            style={{ boxShadow: "0 0 12px rgba(34,211,238,0.2)" }}
          >
            <FiArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;