import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Code2, Mail, ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Projects", id: "projects", icon: Home },
  { name: "About me", id: "about", icon: User },
  { name: "Skills", id: "skills", icon: Code2 },
  { name: "Contact", id: "contact", icon: Mail },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("projects");
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollPos = window.scrollY + window.innerHeight / 3;
      let current = navLinks[0].id;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el && el.offsetTop <= scrollPos) {
          current = link.id;
        }
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100, opacity: 0 }}
      animate={scrolled ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl flex items-center justify-between gap-3 xl:gap-0 xl:rounded-full xl:border xl:border-cyan-500/20 xl:bg-neutral-950/80 xl:backdrop-blur-md xl:px-6 xl:py-3"
      style={{ boxShadow: undefined }}
    >
      <div
        onClick={() => scrollToSection("home")}
        className="flex items-center gap-2 cursor-pointer flex-shrink-0 rounded-full border border-cyan-500/20 bg-neutral-950/80 backdrop-blur-md xl:border-0 xl:bg-transparent xl:backdrop-blur-none p-1.5 xl:p-0"
        style={{ boxShadow: "0 0 30px rgba(34,211,238,0.12), 0 8px 32px rgba(0,0,0,0.4)" }}
      >
        <img
          src="/logo.png"
          alt="Atharv Logo"
          className="h-16 w-16 rounded-full object-cover border border-cyan-500/30"
          style={{ boxShadow: "0 0 12px rgba(34,211,238,0.35)" }}
        />
      </div>

      <div className="hidden xl:flex xl:items-center xl:justify-between xl:flex-1 xl:ml-8">

        <div className="flex items-center gap-1 relative mx-auto">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeId === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                <Icon
                  size={16}
                  className={isActive ? "text-cyan-400" : "text-neutral-500"}
                />
                {link.name}

                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-3/4 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <motion.button
          onClick={() => scrollToSection("contact")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-neutral-950 text-sm font-semibold transition-all duration-300"
          style={{ boxShadow: "0 0 20px rgba(34,211,238,0.35)" }}
        >
          Get in touch
          <ArrowUpRight size={15} />
        </motion.button>
      </div>

      <button
        onClick={() => setMenuOpen((prev) => !prev)}
        className="xl:hidden flex items-center justify-center w-14 h-14 flex-shrink-0 rounded-full border border-cyan-500/20 bg-neutral-950/80 backdrop-blur-md text-neutral-300 hover:text-white transition-colors"
        style={{ boxShadow: "0 0 30px rgba(34,211,238,0.12), 0 8px 32px rgba(0,0,0,0.4)" }}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="xl:hidden absolute top-[72px] right-0 w-56 rounded-2xl border border-cyan-500/20 bg-neutral-950/95 backdrop-blur-md overflow-hidden"
            style={{ boxShadow: "0 0 30px rgba(34,211,238,0.12), 0 8px 32px rgba(0,0,0,0.4)" }}
          >
            <div className="flex flex-col px-3 py-3 gap-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeId === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-white bg-white/5"
                        : "text-neutral-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Icon
                      size={17}
                      className={isActive ? "text-cyan-400" : "text-neutral-500"}
                    />
                    {link.name}
                  </button>
                );
              })}
              <button
                onClick={() => scrollToSection("contact")}
                className="flex items-center justify-center gap-1.5 mt-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-neutral-950 text-sm font-semibold"
              >
                Get in touch
                <ArrowUpRight size={15} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;