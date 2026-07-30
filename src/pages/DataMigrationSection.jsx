import { useState, useEffect, useRef } from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────────────────────────────────────── */
const hexToRgb = (hex) =>
  hex.replace("#", "").match(/.{2}/g).map((h) => parseInt(h, 16)).join(",");

/* ─────────────────────────────────────────────────────────────────────────────
   CONSTANTS & DATA
───────────────────────────────────────────────────────────────────────────── */

const DMF_PHASES = [
  {
    id: 1,
    phase: "01",
    title: "Extract & Analyse",
    short: "Extract",
    desc: "Legacy data extracted from AX 2012 / on-premise systems. Every table mapped, every relationship catalogued. Nothing moves without a verified source blueprint.",
    tools: ["SQL Profiler", "DIXF Entities", "Excel Staging"],
    stat: { value: "100%", label: "Source Coverage" },
    color: "#5B9BD5",
    rgb: "91,155,213",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M4 7c0-1.1 3.58-2 8-2s8 .9 8 2-3.58 2-8 2-8-.9-8-2z" />
        <path d="M4 7v5c0 1.1 3.58 2 8 2s8-.9 8-2V7" />
        <path d="M4 12v5c0 1.1 3.58 2 8 2s8-.9 8-2v-5" />
      </svg>
    ),
  },
  {
    id: 2,
    phase: "02",
    title: "Cleanse & Transform",
    short: "Cleanse",
    desc: "Business rules applied to deduplicate, standardise, and transform data into D365 entity formats. Anomalies logged and resolved before a single record moves to target.",
    tools: ["DMF Framework", "Power Query", "Custom Scripts"],
    stat: { value: "Zero", label: "Data Loss Policy" },
    color: "#D4A853",
    rgb: "212,168,83",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    id: 3,
    phase: "03",
    title: "Stage & Validate",
    short: "Validate",
    desc: "Transformed data loaded into D365 staging tables via DMF. Automated validation scripts cross-check counts, totals, and relationships. Every mismatch surfaced and resolved.",
    tools: ["D365 Staging", "DMF Entities", "Validation Jobs"],
    stat: { value: "3-Pass", label: "Validation Gate" },
    color: "#6BBF7A",
    rgb: "107,191,122",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 4,
    phase: "04",
    title: "Reconcile & Sign-off",
    short: "Sign-off",
    desc: "Finance and operations leads verify opening balances, vendor records, and historical transactions against the source system. Dual sign-off required before go-live cutover.",
    tools: ["Reconciliation Reports", "Client UAT", "LCS Tracking"],
    stat: { value: "Dual", label: "Sign-off Gate" },
    color: "#C084FC",
    rgb: "192,132,252",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
];

const INTEGRITY_STATS = [
  {
    value: "100%",
    suffix: "",
    label: "Record Reconciliation",
    color: "#5B9BD5",
    icon: (fill) => (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={fill}>
        <path d="M200-200v-560 454-85 191Zm0 80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v320h-80v-320H200v560h280v80H200Zm494 40L552-222l57-56 85 85 170-170 56 57L694-80ZM348.5-451.5Q360-463 360-480t-11.5-28.5Q337-520 320-520t-28.5 11.5Q280-497 280-480t11.5 28.5Q303-440 320-440t28.5-11.5Zm0-160Q360-623 360-640t-11.5-28.5Q337-680 320-680t-28.5 11.5Q280-657 280-640t11.5 28.5Q303-600 320-600t28.5-11.5ZM440-440h240v-80H440v80Zm0-160h240v-80H440v80Z" />
      </svg>
    ),
  },
  {
    value: "20",
    suffix: "yrs",
    label: "Historical Data Migrated",
    color: "#5B9BD5",
    icon: (fill) => (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={fill}>
        <path d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q97-30 162-118.5T718-480H480v-315l-240 90v207q0 7 2 18h238v316Z" />
      </svg>
    ),
  },
  {
    value: "0",
    suffix: "",
    label: "Production Incidents",
    color: "#6BBF7A",
    icon: (fill) => (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={fill}>
        <path d="M330-120 120-330v-300l210-210h300l210 210v300L630-120H330Zm36-190 114-114 114 114 56-56-114-114 114-114-56-56-114 114-114-114-56 56 114 114-114 114 56 56Zm-2 110h232l164-164v-232L596-760H364L200-596v232l164 164Zm116-280Z" />
      </svg>
    ),
  },
  {
    value: "3x",
    suffix: "",
    label: "Validation Passes",
    color: "#C084FC",
    icon: (fill) => (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={fill}>
        <path d="M240-40v-329L110-580l185-300h370l185 300-130 211v329l-240-80-240 80Zm80-111 160-53 160 53v-129H320v129Zm20-649L204-580l136 220h280l136-220-136-220H340Zm98 383L296-558l57-57 85 85 169-170 57 56-226 227ZM320-280h320-320Z" />
      </svg>
    ),
  },
];

const SECURITY_PRIVACY_ITEMS = [
  {
    title: "Our Vision",
    color: "#5B9BD5",
    rgb: "91,155,213",
    body:
      "DBSol Technologies envisions becoming a globally trusted leader in digital transformation, empowering organizations with innovative, scalable, and future-ready solutions. We help businesses unlock their full potential, drive sustainable growth, and achieve lasting operational excellence through continuous innovation and technical expertise.",
    points: ["Innovation", "Scalability", "Growth"],
  },
  {
    title: "Our Mission",
    color: "#6BBF7A",
    rgb: "107,191,122",
    body:
      "At DBSol Technologies, our mission is to deliver high-quality, reliable, and innovative technology solutions that help businesses transform and grow. Through deep industry expertise and customer-focused partnerships, we empower organizations to overcome challenges, adapt quickly, and achieve long-term success.",
    points: ["Quality Delivery", "Customer Focus", "Digital Growth"],
  },
];

const SECURITY_CONTROLS = ["Role-based access", "Encrypted transfer", "Audit trails", "Data minimization"];

const PIPELINE_NODES = [
  { label: "Source System", sub: "AX 2012 / Legacy", color: "#5B9BD5" },
  { label: "DMF Extract", sub: "Staging Tables", color: "#D4A853" },
  { label: "Cleanse & Map", sub: "Business Rules", color: "#6BBF7A" },
  { label: "D365 Target", sub: "Live Environment", color: "#C084FC" },
];

/* ─────────────────────────────────────────────────────────────────────────────
   HOOKS
───────────────────────────────────────────────────────────────────────────── */
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => setVis(e.isIntersecting),
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, vis];
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

function useCountUp(target, visible, duration = 1400) {
  const [display, setDisplay] = useState("0");
  const ran = useRef(false);
  useEffect(() => {
    if (!visible || ran.current) return;
    ran.current = true;
    const numStr = target.replace(/[^0-9.]/g, "");
    const num = parseFloat(numStr);
    if (isNaN(num) || num === 0) {
      setDisplay(target);
      return;
    }
    const suffix = target.replace(/[0-9.]/g, "");
    const steps = 50;
    let i = 0;
    const iv = setInterval(() => {
      i++;
      setDisplay(Math.round((num * i) / steps) + suffix);
      if (i >= steps) {
        setDisplay(target);
        clearInterval(iv);
      }
    }, duration / steps);
    return () => clearInterval(iv);
  }, [visible, target, duration]);
  return display;
}

/* ─────────────────────────────────────────────────────────────────────────────
   PARTICLE CANVAS — pauses off-screen, respects reduced motion, lighter load
───────────────────────────────────────────────────────────────────────────── */
function ParticleCanvas({ active }) {
  const ref = useRef(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion || !active) return;
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    let raf;
    const resize = () => {
      c.width = c.offsetWidth;
      c.height = c.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Lighter particle count — this section sits high on the page, so we keep
    // main-thread cost low during initial load / Core Web Vitals measurement.
    const pts = Array.from({ length: 24 }, () => ({
      x: Math.random() * c.width,
      y: Math.random() * c.height,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      r: Math.random() * 1.3 + 0.3,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      pts.forEach((p) => {
        p.x = (p.x + p.vx + c.width) % c.width;
        p.y = (p.y + p.vy + c.height) % c.height;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(212,168,83,0.32)";
        ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x,
            dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(212,168,83,${0.055 * (1 - d / 100)})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [active, reducedMotion]);

  if (reducedMotion) return null;
  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

/* ─────────────────────────────────────────────────────────────────────────────
   ANIMATED STAT
───────────────────────────────────────────────────────────────────────────── */
function AnimStat({ stat, visible, delay = 0 }) {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => setShown(true), delay);
      return () => clearTimeout(t);
    }
  }, [visible, delay]);
  const display = useCountUp(stat.value + stat.suffix, shown);
  return (
    <div
      className="flex flex-col items-center gap-2 px-4 py-6 text-center transition-all duration-300 cursor-default rounded-2xl"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(0,0,0,0.06)",
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s cubic-bezier(0.4,0,0.2,1) ${delay}ms, background 0.25s ease`,
      }}
    >
      <span>{stat.icon(stat.color)}</span>
      <span
        className="font-bold leading-none font-syne"
        style={{ fontSize: "clamp(22px,3vw,30px)", letterSpacing: "-0.03em", color: stat.color }}
      >
        {display}
      </span>
      <span className="text-[10px] text-gray-500 tracking-[0.1em] uppercase leading-snug max-w-[80px] dark:text-white/70">
        {stat.label}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   DATA PIPELINE VISUALISER
───────────────────────────────────────────────────────────────────────────── */
function DataPipeline({ visible }) {
  const [progress, setProgress] = useState(0);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!visible) return;
    if (reducedMotion) {
      setProgress(100);
      return;
    }
    const t = setTimeout(() => {
      let p = 0;
      const iv = setInterval(() => {
        p += 2;
        setProgress(Math.min(p, 100));
        if (p >= 100) clearInterval(iv);
      }, 22);
      return () => clearInterval(iv);
    }, 400);
    return () => clearTimeout(t);
  }, [visible, reducedMotion]);

  return (
    <div className="relative">
      <div className="relative flex items-center justify-between px-4 md:px-6">
        <div
          className="absolute left-4 right-4 md:left-6 md:right-6 h-0.5 top-1/2 -translate-y-1/2"
          style={{ background: "rgba(0,0,0,0.08)" }}
        />
        <div
          className="absolute left-4 md:left-6 h-0.5 top-1/2 -translate-y-1/2"
          style={{
            width: `calc(${progress}% - 2rem)`,
            background: "linear-gradient(90deg,#D4A853,#5B9BD5,#6BBF7A,#C084FC)",
            boxShadow: "0 0 12px rgba(212,168,83,0.5)",
            transition: "width 0.04s linear",
          }}
        />
        {PIPELINE_NODES.map((node, i) => {
          const rgb = hexToRgb(node.color);
          const reached = progress >= (i / (PIPELINE_NODES.length - 1)) * 100;
          return (
            <div key={i} className="relative flex flex-col items-center gap-2.5 z-10">
              <div
                className="relative flex items-center justify-center w-10 h-10 transition-all duration-500 rounded-full md:w-12 md:h-12"
                style={{
                  background: reached ? `rgba(${rgb},0.18)` : "rgba(0,0,0,0.03)",
                  border: `1.5px solid ${reached ? node.color + "55" : "rgba(0,0,0,0.1)"}`,
                  boxShadow: reached ? `0 0 20px rgba(${rgb},0.25)` : "none",
                }}
              >
                <div
                  className="w-2 h-2 transition-all duration-500 rounded-full"
                  style={{
                    background: reached ? node.color : "rgba(0,0,0,0.15)",
                    boxShadow: reached ? `0 0 8px ${node.color}` : "none",
                  }}
                />
              </div>
              <div className="text-center">
                <p className="text-[11px] font-semibold text-gray-700 leading-none mb-0.5 whitespace-nowrap dark:text-white">
                  {node.label}
                </p>
                <p className="text-[9px] text-gray-500 whitespace-nowrap dark:text-white/70">{node.sub}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-2 mt-5">
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{
            background: "#6BBF7A",
            animation: progress < 100 && !reducedMotion ? "dmPulse 1.2s ease-in-out infinite" : "none",
          }}
        />
        <span
          className="text-[11px] tracking-[0.08em] uppercase font-medium"
          style={{ color: progress < 100 ? "#D4A853" : "#3f9a52" }}
        >
          {progress < 100 ? `Migrating… ${progress}%` : "✓ Migration Complete — Zero Errors"}
        </span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────────────────────────────────────── */
export default function DataMigrationSection() {
  const [activePhase, setActivePhase] = useState(0);
  const [phaseAnim, setPhaseAnim] = useState(false);

  const [sectionRef, sectionVis] = useInView(0.05);
  const [statsRef, statsVis] = useInView(0.2);
  const [pipeRef, pipeVis] = useInView(0.3);
  const [phaseRef] = useInView(0.1);

  const reducedMotion = usePrefersReducedMotion();

  const switchPhase = (i) => {
    if (i === activePhase) return;
    setPhaseAnim(true);
    setTimeout(() => {
      setActivePhase(i);
      setPhaseAnim(false);
    }, 180);
  };

  const reveal = (delay = "0s") =>
    sectionVis && !reducedMotion
      ? { animation: `dmReveal 0.65s cubic-bezier(0.4,0,0.2,1) ${delay} forwards` }
      : sectionVis
      ? { opacity: 1 }
      : { opacity: 0 };

  const ap = DMF_PHASES[activePhase];

  return (
    <>
      <style>{`
        @keyframes dmReveal   { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes dmGlow     { 0%,100%{opacity:.38} 50%{opacity:.72} }
        @keyframes dmPulse    { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.3);opacity:.6} }
        @keyframes dmBlink    { 0%,100%{opacity:1} 50%{opacity:.3} }
        @keyframes dmRipple   { 0%{transform:scale(1);opacity:.6} 100%{transform:scale(2.4);opacity:0} }

        .dm-root { font-family:'Plus Jakarta Sans',system-ui,sans-serif; }
        .dm-font-syne { font-family:'Syne',system-ui,sans-serif; }

        .dm-phase-btn {
          transition: all .25s cubic-bezier(0.4,0,0.2,1);
          cursor: pointer;
          border-radius: 12px;
          padding: 10px 14px;
          font-family: inherit;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: .04em;
          border: 1px solid rgba(0,0,0,0.08);
          background: transparent;
          color: #666;
          flex: 1;
          white-space: nowrap;
        }
        .dm-phase-btn:hover { background:rgba(0,0,0,0.03); color:#333; }

        .dm-phase-detail { transition: opacity .18s ease, transform .18s ease; }
        .dm-phase-detail.out { opacity:0; transform:translateY(8px); }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.001ms !important;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative overflow-hidden text-gray-900 dark:text-white dm-root bg-white dark:bg-gray-900"
        style={{ padding: "8px 0 0px" }}
      >
        {/* ── Particle BG — paused off-screen & respects reduced motion ── */}
        <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-55">
          <ParticleCanvas active={sectionVis} />
        </div>

        {/* ── Ambient glows ── */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            top: -320,
            left: "22%",
            width: 800,
            height: 800,
            background: "radial-gradient(circle,rgba(212,168,83,0.06) 0%,transparent 65%)",
            animation: reducedMotion ? "none" : "dmGlow 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            bottom: -250,
            right: "12%",
            width: 560,
            height: 560,
            background: "radial-gradient(circle,rgba(91,155,213,0.05) 0%,transparent 65%)",
          }}
        />

        {/* ── Grid texture ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.03,
            backgroundImage:
              "linear-gradient(rgba(0,0,0,.9) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.9) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative max-w-[1200px] py-8 mx-auto px-5 md:px-8 xl:px-11">
          {/* ══════════════════════════════════════════
              HEADER
          ══════════════════════════════════════════ */}
          <div className="mb-16" style={reveal("0.04s")}>
            <h2 className="mb-4 text-4xl text-center font-extrabold text-gray-800 dark:text-white mt-3">
              Data Migration Transparency
            </h2>
            <p className="max-w-[740px] text-sm mx-auto mb-16 text-center text-gray-600 dark:text-gray-300">
              We don't move a single record without a paper trail. Our DMF-driven process, tracked inside Microsoft
              LCS and Azure DevOps, gives you full transparency from first extract to go-live cutover.
            </p>
            <div className="flex flex-col justify-between gap-10 lg:gap-32 lg:flex-row lg:items-end">
              <div style={reveal("0.1s")}>
                <h3
                  className="font-bold leading-[1.2] tracking-[-0.01em] mb-5 max-w-[440px] text-gray-800 dark:text-white"
                  style={{ fontSize: "clamp(18px,2.4vw,26px)" }}
                >
                  Your data arrives
                  <br />
                  <span className="underline decoration-2 decoration-green-400">complete. Verified. Safe.</span>
                </h3>
              </div>

              <div style={reveal("0.2s")}>
                <div
                  className="flex items-center self-start gap-3 px-5 py-3 bg-green-50 dark:bg-green-500/10 shrink-0 rounded-2xl lg:self-auto"
                  style={{ border: "1px solid rgba(107,191,122,0.3)" }}
                >
                  <div className="relative flex items-center justify-center w-4 h-4">
                    <div
                      className="absolute w-4 h-4 rounded-full opacity-60"
                      style={{ background: "#6BBF7A", animation: reducedMotion ? "none" : "dmRipple 2.2s ease-out infinite" }}
                    />
                    <div className="w-2 h-2 rounded-full" style={{ background: "#6BBF7A" }} />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-green-700 dark:text-green-400 leading-none">
                      Live Tracking Active
                    </p>
                    <p className="text-[9px] text-gray-500 dark:text-white/60 mt-0.5">Azure DevOps · LCS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════
              STATS ROW
          ══════════════════════════════════════════ */}
          <div ref={statsRef} className="grid grid-cols-2 gap-3 mb-10 md:grid-cols-4" style={reveal("0.12s")}>
            {INTEGRITY_STATS.map((stat, i) => (
              <AnimStat key={i} stat={stat} visible={statsVis} delay={i * 90} />
            ))}
          </div>

          {/* ══════════════════════════════════════════
              SECURITY & PRIVACY
          ══════════════════════════════════════════ */}
          <div className="mb-16" style={reveal("0.16s")}>
            <div className="mb-8 text-center">
              <p className="text-[10px] tracking-[0.16em] uppercase font-semibold text-blue-600 dark:text-blue-400 mb-2">
                Data Security & Privacy
              </p>
              <h3 className="text-4xl font-bold text-gray-800 dark:text-white">Built for compliance and user trust</h3>
              <p className="max-w-[760px] mx-auto mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                Every data migration is governed by privacy-first handling, transparent controls, and secure
                processing practices from discovery through go-live.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              {SECURITY_PRIVACY_ITEMS.map((item, i) => (
                <div
                  key={item.title}
                  className="rounded-[22px] p-6 md:p-7"
                  style={{
                    background: `linear-gradient(135deg, rgba(${item.rgb},0.09), rgba(0,0,0,0.015))`,
                    border: `1px solid rgba(${item.rgb},0.25)`,
                    ...reveal(`${0.16 + i * 0.1}s`),
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex items-center justify-center w-12 h-12 rounded-2xl shrink-0"
                      style={{
                        background: `rgba(${item.rgb},0.14)`,
                        border: `1px solid rgba(${item.rgb},0.3)`,
                        color: item.color,
                      }}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
                        <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
                        <path d="M9 12l2 2 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="mb-3 text-xl font-bold text-gray-800 dm-font-syne dark:text-white">{item.title}</h4>
                      <p className="text-[13.5px] leading-7 text-gray-600 dark:text-gray-300">{item.body}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {item.points.map((point) => (
                      <span
                        key={point}
                        className="text-[11px] px-3 py-1.5 rounded-lg font-medium"
                        style={{
                          background: `rgba(${item.rgb},0.1)`,
                          border: `1px solid rgba(${item.rgb},0.25)`,
                          color: item.color,
                        }}
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="flex flex-wrap items-center justify-center gap-2 p-4 mt-5 rounded-2xl"
              style={{ background: "rgba(0,0,0,0.02)", border: "1px solid rgba(0,0,0,0.06)" }}
            >
              {SECURITY_CONTROLS.map((control) => (
                <span
                  key={control}
                  className="text-[11px] px-3 py-1.5 rounded-lg font-semibold text-gray-700 bg-white dark:bg-white/10 dark:text-white/80"
                  style={{ border: "1px solid rgba(0,0,0,0.06)" }}
                >
                  {control}
                </span>
              ))}
            </div>
          </div>

          {/* ══════════════════════════════════════════
              DATA PIPELINE VISUALISER
          ══════════════════════════════════════════ */}
          <div
            ref={pipeRef}
            className="rounded-[22px] p-6 md:p-10 mb-6"
            style={{ background: "rgba(0,0,0,0.015)", border: "1px solid rgba(0,0,0,0.06)", ...reveal("0.18s") }}
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-[10px] text-gray-500 tracking-[0.14em] uppercase font-semibold mb-1 dark:text-white">
                  Live Migration Pipeline
                </p>
                <p className="text-[13px] text-gray-500 dark:text-white/70">End-to-end data flow — AX 2012 to D365 F&O</p>
              </div>
              <div
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-[11px] font-semibold bg-orange-50 dark:bg-orange-500/10"
                style={{ border: "1px solid rgba(212,168,83,0.3)", color: "#b8862f" }}
              >
                <span style={{ animation: reducedMotion ? "none" : "dmBlink 1.4s ease infinite" }}>●</span> DMF Active
              </div>
            </div>
            <DataPipeline visible={pipeVis} />
          </div>

          {/* ══════════════════════════════════════════
              DMF PHASES + DETAIL
          ══════════════════════════════════════════ */}
          <div ref={phaseRef} className="grid grid-cols-1 xl:grid-cols-[1fr_420px] gap-5 mb-6" style={reveal("0.24s")}>
            <div className="rounded-[22px] overflow-hidden" style={{ background: "rgba(0,0,0,0.015)", border: "1px solid rgba(0,0,0,0.06)" }}>
              <div className="flex flex-wrap gap-2 p-4" style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                {DMF_PHASES.map((p, i) => (
                  <button
                    key={p.id}
                    className="dm-phase-btn dark:text-white/90"
                    onClick={() => switchPhase(i)}
                    style={{
                      background: i === activePhase ? `rgba(${p.rgb},0.12)` : "transparent",
                      borderColor: i === activePhase ? `rgba(${p.rgb},0.4)` : "rgba(0,0,0,0.08)",
                      color: i === activePhase ? p.color : undefined,
                    }}
                  >
                    <span className="mr-1.5 text-[10px]">{p.phase}</span>
                    {p.short}
                  </button>
                ))}
              </div>

              <div className={`p-6 dm-phase-detail ${phaseAnim ? "out" : ""}`}>
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-12 h-12 rounded-[14px] flex items-center justify-center shrink-0"
                    style={{ background: `rgba(${ap.rgb},0.14)`, border: `1.5px solid rgba(${ap.rgb},0.35)`, color: ap.color }}
                  >
                    {ap.icon}
                  </div>
                  <div className="flex-1">
                    <span
                      className="text-[9px] font-bold tracking-[0.14em] uppercase px-2.5 py-1 rounded-full inline-block mb-1"
                      style={{ background: `rgba(${ap.rgb},0.14)`, border: `1px solid rgba(${ap.rgb},0.3)`, color: ap.color }}
                    >
                      Phase {ap.phase}
                    </span>
                    <h3 className="text-lg font-bold text-gray-800 dm-font-syne dark:text-white">{ap.title}</h3>
                  </div>
                  <div
                    className="px-4 py-3 text-center shrink-0 rounded-xl"
                    style={{ background: `rgba(${ap.rgb},0.09)`, border: `1px solid rgba(${ap.rgb},0.25)` }}
                  >
                    <p className="text-lg font-bold leading-none dm-font-syne" style={{ color: ap.color }}>
                      {ap.stat.value}
                    </p>
                    <p className="text-[9px] text-gray-500 tracking-wide mt-1 uppercase dark:text-white/80">{ap.stat.label}</p>
                  </div>
                </div>

                <p className="text-[13.5px] text-gray-600 dark:text-gray-300 leading-[1.8] mb-5">{ap.desc}</p>

                <div>
                  <p className="text-[10px] text-gray-500 tracking-[0.12em] uppercase font-semibold mb-3 dark:text-white/90">
                    Tools Used
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {ap.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[11px] px-3 py-1.5 rounded-lg font-medium"
                        style={{ background: `rgba(${ap.rgb},0.09)`, border: `1px solid rgba(${ap.rgb},0.25)`, color: ap.color }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-5 mt-6" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                  {DMF_PHASES.map((_, i) => (
                    <div
                      key={i}
                      onClick={() => switchPhase(i)}
                      className="transition-all duration-300 rounded-full cursor-pointer"
                      style={{ width: i === activePhase ? 20 : 6, height: 6, background: i === activePhase ? ap.color : "rgba(0,0,0,0.12)" }}
                    />
                  ))}
                  <span className="ml-auto text-[11px] text-gray-500 dark:text-white/60">
                    {activePhase + 1} of {DMF_PHASES.length}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {DMF_PHASES.map((p, i) => (
                <div
                  key={p.id}
                  onClick={() => switchPhase(i)}
                  className="relative flex gap-4 px-4 py-4 transition-all duration-300 cursor-pointer rounded-2xl"
                  style={{
                    background: i === activePhase ? `rgba(${p.rgb},0.09)` : "rgba(0,0,0,0.015)",
                    border: `1px solid ${i === activePhase ? `rgba(${p.rgb},0.3)` : "rgba(0,0,0,0.05)"}`,
                    borderLeft: `3px solid ${i === activePhase ? p.color : "transparent"}`,
                    transform: i === activePhase ? "translateX(4px)" : "translateX(0)",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-[10px] font-bold shrink-0 dm-font-syne"
                    style={{
                      background: `rgba(${p.rgb},${i === activePhase ? "0.2" : "0.08"})`,
                      border: `1px solid rgba(${p.rgb},${i === activePhase ? "0.45" : "0.18"})`,
                      color: i === activePhase ? p.color : "#666",
                    }}
                  >
                    {p.phase}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-[13px] font-semibold leading-none mb-1 ${i === activePhase ? "text-gray-800 dark:text-white" : "text-gray-500 dark:text-white/70"}`}>
                      {p.title}
                    </p>
                    <p className="text-[11px] text-gray-500 truncate dark:text-white/60">
                      {p.tools[0]} · {p.tools[1]}
                    </p>
                  </div>
                  {i === activePhase && (
                    <div
                      className="shrink-0 w-1.5 h-1.5 rounded-full self-center"
                      style={{ background: p.color, animation: reducedMotion ? "none" : "dmPulse 2s ease-in-out infinite" }}
                    />
                  )}
                </div>
              ))}

              <div className="p-5 mt-2 rounded-2xl" style={{ background: "rgba(107,191,122,0.06)", border: "1px solid rgba(107,191,122,0.2)" }}>
                <div className="flex items-start gap-3">
                  <div
                    className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-xl shrink-0"
                    style={{ background: "#6BBF7A", border: "1px solid rgba(107,191,122,0.3)" }}
                  >
                    ✓
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-green-700 dark:text-green-400 mb-1">Data Integrity Guarantee</p>
                    <p className="text-[11px] text-gray-600 leading-relaxed dark:text-white/60">
                      We guarantee 100% record reconciliation between source and target. Any discrepancy is our
                      responsibility to resolve — before go-live, at no additional cost.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}