import { useRef } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { Target, Telescope, CheckCircle2, Sparkles, ArrowLeftRight } from "lucide-react";

const EYEBROW = "MISSION & VISION";

function SpotlightCard({ children, className = "", spotColor = "59,130,246" }) {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  const background = useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(${spotColor},0.16), transparent 70%)`;

  return (
    <div ref={ref} onMouseMove={handleMouseMove} className={`group ${className}`}>
      <motion.div
        className="absolute inset-0 transition-opacity duration-500 opacity-0 pointer-events-none rounded-3xl group-hover:opacity-100"
        style={{ background }}
      />
      {children}
    </div>
  );
}

function MissionVisionSection() {
  return (
    <section className="relative overflow-hidden py-28 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">

      {/* Dot-grid texture */}
      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(99,102,241,0.35) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 40%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 40%, black 40%, transparent 100%)",
        }}
      ></div>

      {/* Background Glow */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl top-[-100px] left-[-100px]"
      ></motion.div>
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[400px] h-[400px] bg-indigo-400/20 rounded-full blur-3xl bottom-[-100px] right-[-100px]"
      ></motion.div>

      <div className="relative z-10 max-w-6xl px-6 mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
         
         <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Mission</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> & </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Vision</span>
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-1 mx-auto mb-8 origin-center rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
          ></motion.div>

          <p className="max-w-2xl mx-auto mb-20 text-lg text-gray-600 dark:text-gray-300">
            We envision empowering businesses with scalable mobile and web platforms for sustainable success.
          </p>
        </motion.div>

        <div className="grid items-stretch gap-10 md:grid-cols-[1fr_auto_1fr] md:gap-4">

          {/* Mission */}
          <SpotlightCard spotColor="59,130,246" className="relative">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -8 }}
              className="relative h-full p-10 overflow-hidden border shadow-xl bg-white/80 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl border-white/60 dark:border-gray-700/60"
            >
            

              <div className="relative flex items-center justify-center w-16 h-16 mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-2xl bg-[conic-gradient(from_0deg,#3b82f6,#818cf8,#3b82f6)] opacity-80"
                ></motion.div>
                <div className="absolute inset-[3px] rounded-[14px] bg-white dark:bg-gray-900 flex items-center justify-center">
                  <Target className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </div>
              </div>

              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                Our Mission
              </h3>

              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Our mission is to empower businesses by delivering intelligent ERP
                solutions that streamline operations, enhance productivity, and
                enable data-driven decision-making.
              </p>

              <p className="text-gray-600 dark:text-gray-300">
                We focus on building scalable, secure, and future-ready systems
                using modern technologies like Microsoft Dynamics 365, cloud
                computing, and automation frameworks.
              </p>

              <ul className="mt-6 space-y-3">
                {["Optimize business processes", "Deliver scalable ERP solutions", "Enable digital transformation"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <CheckCircle2 className="flex-shrink-0 w-5 h-5 text-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </SpotlightCard>

          {/* Connector */}
          <div className="relative items-center justify-center hidden md:flex">
            <div className="flex flex-col items-center self-stretch justify-center">
              <div className="flex-1 w-px bg-gradient-to-b from-transparent via-indigo-300 dark:via-indigo-700 to-transparent"></div>
              <motion.div
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center justify-center flex-shrink-0 w-12 h-12 my-3 text-white rounded-full shadow-lg bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 shadow-indigo-500/40"
              >
                <ArrowLeftRight className="w-5 h-5" />
              </motion.div>
              <div className="flex-1 w-px bg-gradient-to-b from-transparent via-indigo-300 dark:via-indigo-700 to-transparent"></div>
            </div>
          </div>

          {/* Vision */}
          <SpotlightCard spotColor="99,102,241" className="relative">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -8 }}
              className="relative h-full p-10 overflow-hidden border shadow-xl bg-white/80 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl border-white/60 dark:border-gray-700/60"
            >
            

              <div className="relative flex items-center justify-center w-16 h-16 mb-6">
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-2xl bg-[conic-gradient(from_0deg,#6366f1,#a855f7,#6366f1)] opacity-80"
                ></motion.div>
                <div className="absolute inset-[3px] rounded-[14px] bg-white dark:bg-gray-900 flex items-center justify-center">
                  <Telescope className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
                </div>
              </div>

              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                Our Vision
              </h3>

              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Our vision is to become a global leader in ERP consulting and
                digital innovation by helping organizations achieve operational
                excellence and sustainable growth.
              </p>

              <p className="text-gray-600 dark:text-gray-300">
                We aim to bridge the gap between technology and business by
                delivering world-class solutions that drive efficiency,
                innovation, and long-term success.
              </p>

              <ul className="mt-6 space-y-3">
                {["Global ERP leadership", "Innovation-driven solutions", "Long-term client success"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <CheckCircle2 className="flex-shrink-0 w-5 h-5 text-indigo-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </SpotlightCard>

        </div>
      </div>
    </section>
  );
}

export default MissionVisionSection;
