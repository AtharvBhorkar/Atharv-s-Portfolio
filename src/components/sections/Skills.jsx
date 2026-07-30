import { motion } from "framer-motion";
import { skillCategories } from "../../data/skills";
import { fadeUp, fadeIn, staggerContainer, viewportOnce } from "../../utils/animations";

const HEX_CLIP = "polygon(8% 0%, 92% 0%, 100% 72%, 50% 100%, 0% 72%)";

const SkillHex = ({ skill, accent }) => {
  const Icon = skill.icon;
  const glowColor = skill.color || accent;
  return (
    <div className="relative w-32 h-36 shrink-0">
      <motion.div
        className="absolute left-1/2 bottom-0 -translate-x-1/2 w-28 h-20 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, ${glowColor}ff 0%, ${glowColor}90 35%, ${glowColor}40 60%, transparent 80%)`,
          filter: "blur(14px)",
        }}
        initial={{ opacity: 0.6 }}
        whileHover={{ opacity: 1, scale: 1.3 }}
        animate={{ opacity: [0.6, 0.85, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        variants={fadeUp}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative flex flex-col items-center justify-center gap-2 w-32 h-36 shrink-0 bg-neutral-950/80 border"
        style={{
          clipPath: HEX_CLIP,
          borderColor: `${accent}80`,
          boxShadow: `0 0 20px ${accent}35, inset 0 0 25px ${accent}25`,
        }}
      >
        <Icon size={30} style={{ color: glowColor }} />
        <span className="text-neutral-200 text-xs sm:text-sm font-medium text-center px-2">
          {skill.name}
        </span>
        <span className="h-0.5 w-6 rounded-full" style={{ backgroundColor: accent }} />
      </motion.div>
    </div>
  );
};

const Connector = ({ accent }) => (
  <div className="hidden sm:flex items-center mt-[4.4rem] w-10 md:w-16">
    <span className="h-px flex-1 border-t-2 border-dashed" style={{ borderColor: accent }} />
    <span className="w-1.5 h-1.5 rounded-full mx-1 shrink-0 animate-pulse" style={{ backgroundColor: accent }} />
    <span className="h-px flex-1 border-t-2 border-dashed" style={{ borderColor: accent }} />
  </div>
);

const COLOR_CYCLE = ["#3b82f6", "#22d3ee", "#2dd4bf"];

const LINE_COLORS = ["#243d67", "#1c5b65", "#1c5c56"];

const SectionHeader = ({ icon: Icon, title, accent, delay = 0, lineOffset = 0 }) => (
  <div className="relative flex items-center mb-8">
    <motion.div
      className="relative z-20 flex items-center justify-center w-14 h-14 shrink-0"
      style={{
        clipPath: "polygon(30% 0, 100% 0, 100% 70%, 70% 100%, 0 100%, 0 30%)",
      }}
      animate={{
        background: [
          `linear-gradient(135deg, ${COLOR_CYCLE[0]}, ${COLOR_CYCLE[0]}90)`,
          `linear-gradient(135deg, ${COLOR_CYCLE[1]}, ${COLOR_CYCLE[1]}90)`,
          `linear-gradient(135deg, ${COLOR_CYCLE[2]}, ${COLOR_CYCLE[2]}90)`,
          `linear-gradient(135deg, ${COLOR_CYCLE[0]}, ${COLOR_CYCLE[0]}90)`,
        ],
        boxShadow: [
          `0 0 25px ${COLOR_CYCLE[0]}70`,
          `0 0 25px ${COLOR_CYCLE[1]}70`,
          `0 0 25px ${COLOR_CYCLE[2]}70`,
          `0 0 25px ${COLOR_CYCLE[0]}70`,
        ],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <Icon size={20} className="text-black" />
    </motion.div>

    <div
      className="relative z-10 flex-1 h-11 -ml-4 pl-8 pr-4 flex items-center bg-neutral-900/70 border-y border-r"
      style={{
        clipPath: "polygon(0 0, 97% 0, 100% 100%, 0% 100%)",
        borderColor: `${accent}50`,
      }}
    >
      <span className="text-white font-bold tracking-wide text-sm sm:text-base uppercase">
        {title}
      </span>
      <div className="ml-auto hidden sm:flex gap-1.5">
        {[0, 1, 2].map((i) => {
          const start = (i + lineOffset) % 3;
          return (
            <motion.span
              key={i}
              className="w-3 h-5 -skew-x-12"
              animate={{
                backgroundColor: [
                  LINE_COLORS[start % 3],
                  LINE_COLORS[(start + 1) % 3],
                  LINE_COLORS[(start + 2) % 3],
                  LINE_COLORS[start % 3],
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay + i * 0.4,
              }}
            />
          );
        })}
      </div>
    </div>
  </div>
);

const CategoryCard = ({ category, full }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={viewportOnce}
    className={`relative border rounded-2xl p-6 sm:p-8 bg-neutral-900/30 backdrop-blur-sm ${
      full ? "col-span-1 lg:col-span-2" : ""
    }`}
    style={{
      borderColor: `${category.accent}90`,
      boxShadow: `0 0 25px ${category.accent}25, inset 0 0 20px ${category.accent}08`,
    }}
  >
    <SectionHeader
      icon={category.headerIcon}
      title={category.title}
      accent={category.accent}
      delay={category.title === "Frontend Development" ? 0 : category.title === "Styling & Animation" ? 1 : 2}
      lineOffset={category.title === "Frontend Development" ? 0 : category.title === "Styling & Animation" ? 1 : 2}
    />

    <motion.div
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="flex flex-wrap items-start justify-center gap-y-8 gap-x-6"
    >
      {category.skills.map((skill, i) => (
        <div key={skill.name} className="flex items-start">
          <div className="flex flex-col items-center gap-3 w-32 text-center">
            <SkillHex skill={skill} accent={category.accent} />
            {skill.desc && (
              <p className="text-neutral-400 text-xs sm:text-sm max-w-[8.5rem] leading-snug">
                {skill.desc}
              </p>
            )}
          </div>
          {full && i < category.skills.length - 1 && <Connector accent={category.accent} />}
        </div>
      ))}
    </motion.div>
  </motion.div>
);

const Skills = () => {
  const workflow = skillCategories.find((c) => c.title === "Tools & Workflow");
  const others = skillCategories.filter((c) => c.title !== "Tools & Workflow");

  return (
    <section id="skills" className="relative w-full bg-neutral-950 py-24 px-6 overflow-hidden">
      <div className="absolute top-1/3 right-0 -translate-y-1/2 w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex items-center gap-3 mb-4 justify-center"
        >
          <span className="h-px w-8 bg-cyan-400" />
          <span className="text-cyan-400 text-sm font-mono tracking-widest uppercase">Skills</span>
          <span className="h-px w-8 bg-cyan-400" />
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-3xl md:text-5xl font-bold text-white text-center mb-4"
        >
          Tools & Technologies I{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Work With
          </span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-neutral-400 text-center max-w-xl mx-auto mb-16 text-sm sm:text-base"
        >
          A curated set of technologies that power my creativity and help me build
          fast, responsive and modern web experiences.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {others.map((category) => (
            <CategoryCard key={category.title} category={category} />
          ))}
        </div>

        {workflow && <CategoryCard category={workflow} full />}
      </div>
    </section>
  );
};

export default Skills;