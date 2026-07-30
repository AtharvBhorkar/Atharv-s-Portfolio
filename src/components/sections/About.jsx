import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import profileImg from "../../assets/images/atharv_image.png";
import { fadeUp, fadeIn, slideInLeft, slideInRight, staggerContainer, viewportOnce } from "../../utils/animations";
import { MapPin, Briefcase, GraduationCap, Target, Code2, Zap, Monitor, ShieldCheck } from "lucide-react";

const quickFacts = [
  { icon: MapPin, label: "Based in", value: "Nagpur, India" },
  { icon: Briefcase, label: "Role", value: "Frontend Developer Intern" },
  { icon: GraduationCap, label: "Currently", value: "Pursuing MCA" },
  { icon: Target, label: "Focus", value: "Frontend & Modern Web Technologies" },
];

const features = [
  {
    icon: Code2,
    title: "Clean Code",
    desc: "I write maintainable, scalable & clean code.",
  },
  {
    icon: Zap,
    title: "Fast & Interactive",
    desc: "I build fast, responsive & smooth user experiences.",
  },
  {
    icon: Monitor,
    title: "Responsive Design",
    desc: "Pixel-perfect designs that work on every device.",
  },
  {
    icon: ShieldCheck,
    title: "SEO & QA Focused",
    desc: "Quality, performance & visibility built into every project.",
  },
];

const FeatureCard = ({ icon: Icon, title, desc }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      className="relative rounded-2xl p-[2px] h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute inset-0 rounded-2xl border border-neutral-800" />
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #93c5fd, #3b82f6, #1e3a8a, #06b6d4, #3b82f6, #93c5fd)",
          backgroundSize: "300% 300%",
        }}
        animate={{
          opacity: hovered ? 1 : 0,
          backgroundPosition: hovered
            ? ["0% 50%", "100% 50%", "0% 50%"]
            : "0% 50%",
        }}
        transition={{
          opacity: { duration: 0.25 },
          backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" },
        }}
      />

      <motion.div
        whileHover={{ scale: 0.97, y: 1 }}
        whileTap={{ scale: 0.94 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="relative z-10 flex items-start gap-4 p-6 rounded-2xl bg-neutral-950 cursor-pointer h-full"
        style={{
          boxShadow: hovered
            ? "inset 4px 4px 10px rgba(0,0,0,0.5), inset -4px -4px 10px rgba(59,130,246,0.08)"
            : "inset 0 0 0 rgba(0,0,0,0)",
        }}
      >
        <span className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-blue-900/30 border border-blue-500/30">
          <Icon size={20} className="text-blue-400" />
        </span>
        <div>
          <p className="text-white font-semibold mb-1">{title}</p>
          <p className="text-neutral-400 text-sm">{desc}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const rotatingWords = ["Captivating", "Exceptional", "interactive"];

const About = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="relative w-full bg-neutral-950 py-24 px-6 overflow-hidden"
    >
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex items-center gap-3 mb-4 justify-center lg:justify-start"
        >
          <span className="h-px w-8 bg-blue-500" />
          <span className="text-blue-400 text-sm font-mono tracking-widest uppercase">
            About Me
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight">
              I turn ideas into fast,{" "}
              <span className="inline-block relative align-baseline">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingWords[wordIndex]}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-400"
                  >
                    {rotatingWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>{" "}
              web experiences.
            </h2>

            <p className="text-neutral-400 text-base leading-relaxed mb-4">
              I'm Atharv Bhorkar, a frontend developer currently working as an
              intern, where I build responsive websites and web apps using
              React, Tailwind, and modern JavaScript. I enjoy taking a design
              and turning it into a smooth, animated, real product — not
              just a static page.
            </p>

            <p className="text-neutral-400 text-base leading-relaxed mb-8">
              Alongside development work, I handle QA reviews for my team
              and manage SEO tasks, which has taught me to think about
              projects end-to-end — not just the code, but how it performs
              and how it's presented. I'm also pursuing my MCA, continuing to
              sharpen my fundamentals while building real-world projects.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {quickFacts.map((fact, i) => {
                const Icon = fact.icon;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-start gap-3 border border-neutral-800 rounded-xl px-4 py-3 bg-neutral-900/40 text-left"
                  >
                    <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-blue-600/30 to-blue-900/30 border border-blue-500/30">
                      <Icon size={16} className="text-blue-400" />
                    </span>
                    <div>
                      <p className="text-blue-400 text-xs uppercase tracking-wide mb-1">
                        {fact.label}
                      </p>
                      <p className="text-white text-sm font-semibold">
                        {fact.value}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ delay: 0.4 }}
              className="relative inline-block w-[150px]"
            >
              <motion.a
                href="/resume.pdf"
                download
                className="relative cursor-pointer flex justify-between items-center bg-gray-900 px-3 py-2 rounded-full text-white tracking-wider hover:bg-gray-950 hover:scale-105 duration-500 font-mono w-[150px] border-2"
                animate={{
                  borderColor: ["#3b82f6", "#06b6d4", "#93c5fd", "#3b82f6"],
                  boxShadow: [
                    "0 0 6px rgba(59,130,246,0.6), 0 0 12px rgba(59,130,246,0.3)",
                    "0 0 6px rgba(6,182,212,0.6), 0 0 12px rgba(6,182,212,0.3)",
                    "0 0 6px rgba(147,197,253,0.6), 0 0 12px rgba(147,197,253,0.3)",
                    "0 0 6px rgba(59,130,246,0.6), 0 0 12px rgba(59,130,246,0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                Resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5 animate-bounce"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                  />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative flex-shrink-0 w-full max-w-[420px] aspect-[4/5]"
          >
            <motion.span
              className="absolute -left-4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-500 z-20"
              animate={{
                opacity: [1, 0.3, 1],
                boxShadow: [
                  "0 0 15px 5px rgba(59,130,246,0.7)",
                  "0 0 6px 2px rgba(59,130,246,0.3)",
                  "0 0 15px 5px rgba(59,130,246,0.7)",
                ],
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-6 h-px bg-blue-500/60 z-10" />

            <div className="absolute inset-0 bg-blue-600/25 blur-[100px] -z-10" />
            <svg width="0" height="0" className="absolute">
              <defs>
                <clipPath id="uniqueFrame" clipPathUnits="objectBoundingBox">
                  <path d="M0.22,0
                           L0.68,0
                           C0.8,0 0.9,0.02 0.95,0.12
                           C1.02,0.25 0.98,0.38 1,0.5
                           C1.02,0.65 0.97,0.78 0.9,0.88
                           C0.83,0.98 0.72,1 0.6,1
                           L0.18,1
                           C0.08,1 0,0.93 0.02,0.82
                           C0.05,0.68 -0.02,0.55 0.01,0.4
                           C0.03,0.28 0,0.15 0.06,0.07
                           C0.1,0.02 0.15,0 0.22,0 Z" />
                </clipPath>
              </defs>
            </svg>
            <motion.div
              className="relative w-full h-full"
              style={{
                clipPath: "url(#uniqueFrame)",
                backgroundImage:
                  "linear-gradient(135deg, #93c5fd, #3b82f6, #1e3a8a, #06b6d4, #3b82f6, #93c5fd)",
                backgroundSize: "300% 300%",
                boxShadow:
                  "inset 0 4px 10px rgba(255,255,255,0.15), inset 0 -6px 14px rgba(0,0,0,0.6)",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div
                className="absolute overflow-hidden"
                style={{
                  top: "10px",
                  left: "10px",
                  right: "10px",
                  bottom: "10px",
                  clipPath: "url(#uniqueFrame)",
                  backgroundColor: "#05070f",
                }}
              >
                <motion.div
                  className="absolute inset-[-20px]"
                  style={{
                    backgroundImage:
                      "radial-gradient(rgba(59,130,246,0.4) 1.2px, transparent 1.5px)",
                    backgroundSize: "18px 18px",
                  }}
                  animate={{
                    backgroundPosition: ["0px 0px", "18px 18px", "0px 0px"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="absolute inset-[-20px]"
                  style={{
                    backgroundImage:
                      "radial-gradient(rgba(56,189,248,0.25) 1.5px, transparent 2px)",
                    backgroundSize: "36px 36px",
                  }}
                  animate={{
                    backgroundPosition: ["0px 0px", "-36px 36px", "0px 0px"],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-blue-950/40 pointer-events-none z-10" />
                <img
                  src={profileImg}
                  alt="Atharv Bhorkar"
                  className="absolute top-0 left-0 w-full h-full object-cover object-top"
                  style={{ clipPath: "url(#uniqueFrame)" }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent z-10" />
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -left-6 rounded-2xl px-5 py-4 border-[3px] border-blue-500/50 shadow-[0_0_25px_rgba(59,130,246,0.25)] z-20"
              style={{
                background: "rgba(10, 15, 30, 0.35)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
              }}
            >
              <p className="text-2xl font-bold text-blue-400">3+</p>
              <p className="text-neutral-300 text-xs">Years of learning</p>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;