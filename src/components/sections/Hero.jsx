import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import profileImg from "../../assets/images/atharv_image.png";
import profileImg2 from "../../assets/images/atharv_image2.png";
import { fadeUp, fadeIn } from "../../utils/animations";
import { Phone, MessageCircle } from "lucide-react";

const stats = [
  { value: "1+", label: "years learning & building" },
  { value: "5+", label: "projects shipped" },
  { value: "5+", label: "happy collaborators" },
];

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const progress = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  const [morphed, setMorphed] = useState(false);
  const [showContact1, setShowContact1] = useState(false);
  const [showContact2, setShowContact2] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);
  useMotionValueEvent(progress, "change", (v) => setMorphed(v > 0.45));

  const rectOpacity = useTransform(progress, [0, 0.25], [1, 0]);
  const rectScale = useTransform(progress, [0, 0.3], [1, 0.85]);
  const rectY = useTransform(progress, [0, 0.3], [0, -30]);

  const circleOpacity = useTransform(progress, [0.55, 1], [0, 1]);
  const circleScale = useTransform(progress, [0.5, 1], [0.8, 1]);

  const textWidth = useTransform(progress, [0.25, 0.65], ["100%", "62%"]);

  const barOpacity = useTransform(progress, [0, 0.2], [1, 0]);
  const floatingOpacity = useTransform(progress, [0, 0.2], [1, 0]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoading ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: isLoading ? 0 : 0 }}
        style={{ pointerEvents: isLoading ? "auto" : "none" }}
        className="fixed inset-0 z-[100] bg-neutral-950 flex items-center justify-center overflow-hidden"
      >
        <div className="flex items-end gap-1 sm:gap-2 md:gap-4 px-4">
          {"ATHARV".split("").map((letter, i) => {
            const dropDelay = i * 0.35;
            const dropDuration = 0.45;
            const impactTime = dropDelay + dropDuration;
            return (
              <div key={i} className="relative flex flex-col items-center">
                {[...Array(5)].map((_, p) => {
                  const angle = (p / 5) * Math.PI + Math.PI * 0.15;
                  const dx = Math.cos(angle) * 26 * (p % 2 === 0 ? 1 : -1);
                  return (
                    <motion.span
                      key={p}
                      initial={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
                      animate={{
                        opacity: [0, 0.8, 0],
                        x: [0, dx],
                        y: [0, -10 - p * 3],
                        scale: [0.5, 1, 0.3],
                      }}
                      transition={{
                        duration: 0.5,
                        delay: impactTime,
                        ease: "easeOut",
                      }}
                      className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-neutral-400"
                    />
                  );
                })}
                <motion.span
                  initial={{ y: -180, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: dropDuration,
                    delay: dropDelay,
                    ease: "easeIn",
                  }}
                  className="text-2xl sm:text-4xl md:text-6xl font-bold text-neutral-300"
                  style={{ textShadow: "0 0 12px rgba(212,212,212,0.5)" }}
                >
                  {letter}
                </motion.span>
                <motion.span
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: [0, 1.4, 1], opacity: [0, 0.5, 0.2] }}
                  transition={{
                    duration: 0.4,
                    delay: impactTime,
                    ease: "easeOut",
                  }}
                  className="block w-8 h-1 bg-neutral-400 rounded-full blur-[2px] mt-1"
                />
              </div>
            );
          })}
        </div>
      </motion.div>

      <section
        id="home"
        className="sticky top-0 w-full h-screen bg-neutral-950 pt-4 sm:pt-12 pb-0 overflow-hidden"
      >
        <div
          className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 flex gap-4 sm:gap-8 ${morphed
              ? "flex-col xl:flex-row items-center justify-between pt-16 sm:pt-20 xl:pt-24"
              : "flex-col items-center text-center"
            }`}
        >
          <motion.div
            style={morphed ? {} : { width: textWidth }}
            className={morphed ? "w-full xl:w-auto text-center xl:text-left order-2 xl:order-1" : "text-center mx-auto"}
          >
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.15 }}
              className={`font-semibold leading-[1.05] tracking-tight ${morphed
                  ? "whitespace-normal xl:whitespace-nowrap text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white"
                  : "whitespace-normal sm:whitespace-nowrap text-3xl sm:text-5xl md:text-7xl lg:text-8xl mb-4 md:mb-6 text-white"
                }`}
              style={!morphed ? { fontFamily: "'Space Grotesk', sans-serif" } : undefined}
            >
              {morphed ? (
                "Hello I'm Atharv"
              ) : (
                <>
                  Hello I'm{" "}
                  <span className="inline-flex">
                    {"Atharv".split("").map((letter, i) => (
                      <motion.span
                        key={i}
                        className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-400"
                        animate={{ y: [0, -14, 0] }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          repeatDelay: 1.2,
                          delay: i * 0.08,
                          ease: "easeInOut",
                        }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </span>
                </>
              )}
            </motion.h1>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className={`font-semibold leading-[1.05] mb-2 ${morphed
                  ? "text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-tight text-center xl:text-left bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-400 to-teal-300 whitespace-normal"
                  : "text-base sm:text-lg md:text-2xl lg:text-3xl text-neutral-500 tracking-[0.15em] sm:tracking-[0.3em] uppercase flex flex-wrap items-center justify-center w-full whitespace-normal sm:whitespace-nowrap"
                }`}
              style={!morphed ? { fontFamily: "'Space Grotesk', sans-serif" } : undefined}
            >
              {morphed ? (
                "Frontend Developer"
              ) : (
                <>
                  <motion.span
                    className="mr-4 sm:mr-24 md:mr-36 inline-block bg-clip-text text-transparent bg-[length:200%_100%]"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #a3a3a3 0%, #a3a3a3 40%, #ffffff 50%, #a3a3a3 60%, #a3a3a3 100%)",
                    }}
                    animate={{
                      backgroundPosition: ["150% 0%", "-50% 0%"],
                      filter: [
                        "drop-shadow(0 0 0px rgba(255,255,255,0))",
                        "drop-shadow(0 0 10px rgba(255,255,255,0.7))",
                        "drop-shadow(0 0 0px rgba(255,255,255,0))",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      repeatDelay: 1,
                    }}
                  >
                    Frontend
                  </motion.span>
                  <motion.span
                    className="ml-4 sm:ml-16 md:ml-28 inline-block bg-clip-text text-transparent bg-[length:200%_100%]"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #818cf8 0%, #818cf8 40%, #e0e7ff 50%, #818cf8 60%, #818cf8 100%)",
                    }}
                    animate={{
                      backgroundPosition: ["150% 0%", "-50% 0%"],
                      filter: [
                        "drop-shadow(0 0 0px rgba(129,140,248,0))",
                        "drop-shadow(0 0 10px rgba(129,140,248,0.8))",
                        "drop-shadow(0 0 0px rgba(129,140,248,0))",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      repeatDelay: 1,
                    }}
                  >
                    Developer
                  </motion.span>
                </>
              )}
            </motion.h1>

            <motion.div style={{ opacity: circleOpacity }} className="mt-6 max-w-md mx-auto xl:mx-0 flex flex-col items-center xl:items-start">
              <p
                className="text-neutral-400 text-sm sm:text-base md:text-lg mb-7 leading-relaxed max-w-[280px] sm:max-w-none mx-auto"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                I build fast, responsive, and visually engaging web experiences using React.
              </p>
              <button
                onClick={() => scrollToSection("about")}
                type="button"
                className="group relative flex flex-col items-center justify-center w-[180px] h-[50px] decoration-0 transition-transform active:scale-95 cursor-pointer outline-none"
                style={{
                  background: "linear-gradient(135deg, rgba(30,58,138,0.5) 0%, rgba(59,130,246,0.2) 50%, rgba(255,255,255,0.1) 100%)",
                  borderRadius: "8px",
                  opacity: 1,
                  border: "1px solid rgba(96,165,250,0.3)",
                  padding: 0,
                }}
              >
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity ease-in-out duration-[1200ms] opacity-100 group-hover:opacity-0"
                  style={{
                    background:
                      "radial-gradient(15% 50% at 50% 100%, rgb(255,255,255) 0%, rgba(255,255,255,0) 100%)",
                    borderRadius: "8px",
                    filter: "blur(15px)",
                  }}
                />
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity ease-in-out duration-[1200ms] opacity-0 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(60.6% 50% at 50% 100%, rgb(255,255,255) 0%, rgba(255,255,255,0) 100%)",
                    borderRadius: "8px",
                    filter: "blur(18px)",
                  }}
                />
                <div
                  className="absolute inset-0 pointer-events-none will-change-auto transition-opacity ease-in-out duration-[1200ms] opacity-100 group-hover:opacity-0"
                  style={{
                    background:
                      "radial-gradient(10.7% 50% at 50% 100%, rgb(255,255,255) 0%, rgba(255,255,255,0) 100%)",
                    borderRadius: "8px",
                  }}
                />
                <div
                  className="absolute inset-0 pointer-events-none will-change-auto transition-opacity ease-in-out duration-[1200ms] opacity-0 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(60.1% 50% at 50% 100%, rgb(255,255,255) 0%, rgba(255,255,255,0) 100%)",
                    borderRadius: "8px",
                  }}
                />
                <div
                  className="absolute inset-[1px] pointer-events-none z-10 rounded-[7px]"
                  style={{ backgroundColor: "rgb(0,0,0)", opacity: 1 }}
                />
                <div className="relative z-20 flex flex-col items-center justify-center opacity-100">
                  <div className="flex flex-col items-center justify-center transform-none opacity-100">
                    <p
                      className="m-0 p-0 font-sans text-[15px] font-medium text-white tracking-wide"
                      style={{
                        WebkitFontSmoothing: "antialiased",
                        textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                      }}
                    >
                      Explore me →
                    </p>
                  </div>
                </div>
              </button>
            </motion.div>
          </motion.div>

          <div
            className={`group relative w-full max-w-[280px] sm:max-w-sm md:max-w-md h-[300px] sm:h-[400px] md:h-[460px] lg:h-[520px] flex-shrink-0 ${morphed ? "order-1 xl:order-2" : "-mt-16 sm:-mt-28 md:-mt-52 lg:-mt-72"
              }`}
          >
            <div
              className="absolute top-[-10%] left-[15%] w-[3px] h-[120%] pointer-events-none -z-20 opacity-0 group-hover:opacity-100 transition-all duration-500"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, rgba(147,197,253,0.9) 40%, rgba(59,130,246,0.7) 60%, transparent)",
                transform: "rotate(20deg)",
                filter: "blur(1.5px)",
                boxShadow: "0 0 20px rgba(96,165,250,0.8)",
              }}
            />
            <div
              className="absolute top-[-8%] left-[75%] w-[3px] h-[115%] pointer-events-none -z-20 opacity-0 group-hover:opacity-100 transition-all duration-500"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, rgba(147,197,253,0.85) 40%, rgba(59,130,246,0.65) 60%, transparent)",
                transform: "rotate(20deg)",
                filter: "blur(1.5px)",
                boxShadow: "0 0 20px rgba(96,165,250,0.75)",
              }}
            />
            <div
              className="absolute inset-0 rounded-full scale-100 -z-10"
              style={{
                background:
                  "radial-gradient(circle, rgba(191,219,254,0.65) 0%, rgba(96,165,250,0.35) 40%, rgba(59,130,246,0.15) 60%, transparent 80%)",
                filter: "blur(80px)",
              }}
            />

            <motion.div
              style={{ opacity: rectOpacity, scale: rectScale, y: rectY }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div
                className="relative w-full h-full overflow-hidden"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, black 82%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 82%, transparent 100%)",
                }}
              >
                <img
                  src={profileImg}
                  alt="Atharv Bhorkar"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>

            <motion.div
              style={{ opacity: circleOpacity, scale: circleScale }}
              className={`absolute inset-0 flex items-center ${morphed ? "justify-center xl:justify-end" : "justify-center"
                }`}
            >
              <div className="group relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] lg:w-[460px] lg:h-[460px] rounded-full">
                <div
                  className="absolute -inset-3 rounded-full bg-[conic-gradient(from_200deg,rgba(191,219,254,0.6),rgba(96,165,250,0.5),rgba(59,130,246,0.55),rgba(147,197,253,0.4),rgba(191,219,254,0.6))] blur-xl opacity-70 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:blur-2xl group-hover:scale-105 group-hover:rotate-45"
                />
                <div className="relative w-full h-full rounded-full overflow-hidden bg-white shadow-[0_0_50px_rgba(59,130,246,0.3)] transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:shadow-[0_0_80px_rgba(59,130,246,0.5)]">
                  <img
                    src={profileImg2}
                    alt="Atharv Bhorkar"
                    className="w-full h-full object-contain"
                    style={{
                      transform: "scale(1.4) translateY(21%)",
                      objectPosition: "center top",
                    }}
                  />
                  <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
                    <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent -skew-x-12 transition-all duration-700 ease-out group-hover:left-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          style={{ opacity: floatingOpacity }}
          className="hidden"
        >
          <p className="text-neutral-400 text-sm max-w-xs text-center">
            I build fast, responsive, and visually engaging web
            experiences using React.
          </p>
          <div className="relative">
            <button
              onClick={() => setShowContact1((prev) => !prev)}
              className="px-4 py-2 rounded-full bg-white text-neutral-900 text-sm font-medium"
            >
              Let's talk ↗
            </button>
            {showContact1 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full mt-2 left-1/2 -translate-x-1/2 flex flex-col gap-2 bg-neutral-900 border border-neutral-800 rounded-xl p-2 shadow-xl z-30 w-36"
              >
                <a
                  href="tel:+919604224586"
                  className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm text-white hover:bg-neutral-800 transition-colors"
                >
                  <Phone size={16} className="text-blue-400" /> Call
                </a>
                <a
                  href="https://wa.me/919604224586"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm text-white hover:bg-neutral-800 transition-colors"
                >
                  <MessageCircle size={16} className="text-blue-400" /> Message
                </a>
              </motion.div>
            )}
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
          style={{ opacity: barOpacity }}
          className="absolute bottom-0 left-0 right-0 z-10 border-t border-neutral-800 bg-neutral-900/40"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-12 gap-y-3">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-blue-400 text-xl font-bold">
                  {stat.value}
                </span>
                <span className="text-neutral-400 text-sm">{stat.label}</span>
                {i !== stats.length - 1 && (
                  <span className="hidden sm:inline text-blue-500 ml-4 md:ml-9">
                    ✦
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }}
          style={{ opacity: floatingOpacity }}
          className="hidden lg:block absolute left-6 md:left-10 xl:left-16 bottom-[12%] md:bottom-[15%] max-w-[200px] text-left z-20"
        >
          <p className="text-neutral-400 text-sm leading-relaxed mb-4">
            I build fast, responsive, and visually engaging web
            experiences using Frontend tools.
          </p>
          <div className="relative w-fit">
            <button
              onClick={() => setShowContact2((prev) => !prev)}
              className="cursor-pointer group relative bg-white hover:bg-zinc-300 text-black font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 ease-in-out shadow hover:shadow-lg w-40 h-12"
            >
              <div className="relative flex items-center justify-center gap-2">
                <span className="relative inline-block overflow-hidden">
                  <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                    Get Started
                  </span>
                  <span className="absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                    Right Now
                  </span>
                </span>
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:rotate-45"
                  viewBox="0 0 24 24"
                >
                  <circle fill="currentColor" r="11" cy="12" cx="12"></circle>
                  <path
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    stroke="white"
                    d="M7.5 16.5L16.5 7.5M16.5 7.5H10.5M16.5 7.5V13.5"
                  ></path>
                </svg>
              </div>
            </button>
            {showContact2 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full mt-2 left-0 flex flex-col gap-2 bg-neutral-900 border border-neutral-800 rounded-xl p-2 shadow-xl z-30 w-36"
              >
                <a
                  href="tel:+919604224586"
                  className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm text-white hover:bg-neutral-800 transition-colors"
                >
                  <Phone size={16} className="text-blue-400" /> Call
                </a>
                <a
                  href="https://wa.me/919604224586"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm text-white hover:bg-neutral-800 transition-colors"
                >
                  <MessageCircle size={16} className="text-blue-400" /> Message
                </a>
              </motion.div>
            )}
          </div>
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.85 }}
          style={{ opacity: floatingOpacity }}
          className="hidden lg:flex absolute right-6 md:right-10 xl:right-16 bottom-[12%] md:bottom-[15%] flex-col items-start gap-1 z-20"
        >
          <span className="text-4xl font-bold text-blue-400">5+</span>
          <span className="text-neutral-400 text-sm">Projects built</span>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;