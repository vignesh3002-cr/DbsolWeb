/**
 * DataMigrationSection.jsx
 * Tailwind CSS v3.4.17  |  React 18+
 *
 * Google Fonts (add to global CSS):
 *   @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
 *
 * Add to tailwind.config.js → theme.extend:
 *   See config snippet at bottom of this file.
 */

import { useState, useEffect, useRef } from "react";

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
    color: "#D4A853",
    rgb: "212,168,83",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M4 7c0-1.1 3.58-2 8-2s8 .9 8 2-3.58 2-8 2-8-.9-8-2z"/>
        <path d="M4 7v5c0 1.1 3.58 2 8 2s8-.9 8-2V7"/>
        <path d="M4 12v5c0 1.1 3.58 2 8 2s8-.9 8-2v-5"/>
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
    color: "#5B9BD5",
    rgb: "91,155,213",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
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
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
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
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
      </svg>
    ),
  },
];

const TOOLS = [
  {
    id: "dmf",
    name: "DMF",
    fullName: "Data Migration Framework",
    vendor: "Microsoft D365 F&O",
    color: "#D4A853",
    rgb: "212,168,83",
    logo: "DMF",
    desc: "Native D365 F&O framework for importing and exporting data via composite entities. We build, test, and version every DMF package — giving you a re-runnable migration that works on day one and day one thousand.",
    capabilities: [
      "Composite entity design",
      "Staging table architecture",
      "Error log dashboards",
      "Incremental re-migration",
      "Entity sequencing & dependencies",
    ],
    badge: "Core Tool",
  },
  {
    id: "lcs",
    name: "LCS",
    fullName: "Lifecycle Services",
    vendor: "Microsoft Azure",
    color: "#5B9BD5",
    rgb: "91,155,213",
    logo: "LCS",
    desc: "Every migration sprint is tracked inside Microsoft LCS — environment provisioning, package deployment history, and issue resolution are all visible to your team in real time throughout the project.",
    capabilities: [
      "Environment management",
      "Deployment pipelines",
      "Issue tracking & resolution",
      "Business process modeller",
      "Project onboarding portal",
    ],
    badge: "Project Hub",
  },
  {
    id: "devops",
    name: "Azure DevOps",
    fullName: "Azure DevOps",
    vendor: "Microsoft Azure",
    color: "#6BBF7A",
    rgb: "107,191,122",
    logo: "ADO",
    desc: "Sprint boards, work items, and automated pipelines in Azure DevOps give your stakeholders live visibility into migration progress — no status-update emails, just a live dashboard your team can bookmark.",
    capabilities: [
      "Sprint & backlog tracking",
      "CI/CD for D365 packages",
      "Automated test pipelines",
      "Rollback & release gates",
      "Stakeholder dashboards",
    ],
    badge: "Live Tracking",
  },
];

const INTEGRITY_STATS = [
  { value: "100%", suffix: "", label: "Record Reconciliation", icon: "◆", color: "#D4A853" },
  { value: "20",   suffix: "yrs", label: "Historical Data Migrated", icon: "◈", color: "#5B9BD5" },
  { value: "0",    suffix: "",  label: "Production Incidents", icon: "◉", color: "#6BBF7A" },
  { value: "3x",   suffix: "",  label: "Validation Passes", icon: "◆", color: "#C084FC" },
];

const PIPELINE_NODES = [
  { label: "Source System",  sub: "AX 2012 / Legacy",  color: "#D4A853", x: 0 },
  { label: "DMF Extract",    sub: "Staging Tables",     color: "#5B9BD5", x: 1 },
  { label: "Cleanse & Map",  sub: "Business Rules",     color: "#6BBF7A", x: 2 },
  { label: "D365 Target",    sub: "Live Environment",   color: "#C084FC", x: 3 },
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
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, vis];
}

function useCountUp(target, visible, duration = 1400) {
  const [display, setDisplay] = useState("0");
  const ran = useRef(false);
  useEffect(() => {
    if (!visible || ran.current) return;
    ran.current = true;
    const numStr = target.replace(/[^0-9.]/g, "");
    const num = parseFloat(numStr);
    if (isNaN(num) || num === 0) { setDisplay(target); return; }
    const suffix = target.replace(/[0-9.]/g, "");
    const steps = 50;
    let i = 0;
    const iv = setInterval(() => {
      i++;
      setDisplay(Math.round((num * i) / steps) + suffix);
      if (i >= steps) { setDisplay(target); clearInterval(iv); }
    }, duration / steps);
    return () => clearInterval(iv);
  }, [visible, target, duration]);
  return display;
}

/* ─────────────────────────────────────────────────────────────────────────────
   PARTICLE CANVAS
───────────────────────────────────────────────────────────────────────────── */
function ParticleCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    let raf;
    const resize = () => { c.width = c.offsetWidth; c.height = c.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    const pts = Array.from({ length: 48 }, () => ({
      x: Math.random() * c.width, y: Math.random() * c.height,
      vx: (Math.random() - 0.5) * 0.18, vy: (Math.random() - 0.5) * 0.18,
      r: Math.random() * 1.3 + 0.3,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      pts.forEach((p) => {
        p.x = (p.x + p.vx + c.width) % c.width;
        p.y = (p.y + p.vy + c.height) % c.height;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(212,168,83,0.32)"; ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 100) {
          ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = `rgba(212,168,83,${0.055 * (1 - d / 100)})`; ctx.lineWidth = 0.4; ctx.stroke();
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

/* ─────────────────────────────────────────────────────────────────────────────
   ANIMATED STAT
───────────────────────────────────────────────────────────────────────────── */
function AnimStat({ stat, visible, delay = 0 }) {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (visible) { const t = setTimeout(() => setShown(true), delay); return () => clearTimeout(t); }
  }, [visible, delay]);
  const display = useCountUp(stat.value + stat.suffix, shown);
  return (
    <div
      className="flex flex-col items-center gap-2 px-4 py-6 text-center transition-all duration-300 cursor-default rounded-2xl group"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.07)",
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s cubic-bezier(0.4,0,0.2,1) ${delay}ms, background 0.25s ease`,
      }}
      onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.055)"}
      onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.025)"}
    >
      <span className="text-[10px]" style={{ color: stat.color }}>{stat.icon}</span>
      <span
        className="font-bold leading-none text-green-500 font-syne"
        style={{ fontSize: "clamp(22px,3vw,30px)", letterSpacing: "-0.03em" }}
      >
        {display}
      </span>
      <span className="text-[10px] text-[#484848] tracking-[0.1em] uppercase leading-snug max-w-[80px]">
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
  useEffect(() => {
    if (!visible) return;
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
  }, [visible]);

  return (
    <div className="relative">
      {/* Flow line */}
      <div className="relative flex items-center justify-between px-4 md:px-6">
        {/* Background track */}
        <div
          className="absolute left-4 right-4 md:left-6 md:right-6 h-0.5 top-1/2 -translate-y-1/2"
          style={{ background: "rgba(255,255,255,0.06)" }}
        />
        {/* Animated fill */}
        <div
          className="absolute left-4 md:left-6 h-0.5 top-1/2 -translate-y-1/2"
          style={{
            width: `calc(${progress}% - 2rem)`,
            background: "linear-gradient(90deg,#D4A853,#5B9BD5,#6BBF7A,#C084FC)",
            boxShadow: "0 0 12px rgba(212,168,83,0.5)",
            transition: "width 0.04s linear",
          }}
        />
        {/* Nodes */}
        {PIPELINE_NODES.map((node, i) => (
          <div key={i} className="relative flex flex-col items-center gap-2.5 z-10">
            {/* Node dot */}
            <div
              className="relative flex items-center justify-center w-10 h-10 transition-all duration-500 rounded-full md:w-12 md:h-12"
              style={{
                background: progress >= (i / (PIPELINE_NODES.length - 1)) * 100
                  ? `rgba(${node.color.slice(1).match(/.{2}/g).map(h => parseInt(h,16)).join(",")},0.18)`
                  : "rgba(255,255,255,0.04)",
                border: `1.5px solid ${progress >= (i / (PIPELINE_NODES.length - 1)) * 100 ? node.color + "55" : "rgba(255,255,255,0.08)"}`,
                boxShadow: progress >= (i / (PIPELINE_NODES.length - 1)) * 100
                  ? `0 0 20px rgba(${node.color.slice(1).match(/.{2}/g).map(h => parseInt(h,16)).join(",")},0.25)`
                  : "none",
              }}
            >
              <div
                className="w-2 h-2 transition-all duration-500 rounded-full"
                style={{
                  background: progress >= (i / (PIPELINE_NODES.length - 1)) * 100
                    ? node.color
                    : "rgba(255,255,255,0.15)",
                  boxShadow: progress >= (i / (PIPELINE_NODES.length - 1)) * 100
                    ? `0 0 8px ${node.color}`
                    : "none",
                }}
              />
            </div>
            <div className="text-center">
              <p className="text-[11px] font-semibold text-white leading-none mb-0.5 whitespace-nowrap">{node.label}</p>
              <p className="text-[9px] text-[#444] whitespace-nowrap">{node.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Progress label */}
      <div className="flex items-center justify-center gap-2 mt-5">
        <div className="w-1.5 h-1.5 rounded-full" style={{
          background: "#6BBF7A",
          animation: progress < 100 ? "dmPulse 1.2s ease-in-out infinite" : "none",
        }} />
        <span className="text-[11px] tracking-[0.08em] uppercase font-medium" style={{ color: progress < 100 ? "#D4A853" : "#6BBF7A" }}>
          {progress < 100 ? `Migrating… ${progress}%` : "✓ Migration Complete — Zero Errors"}
        </span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   TOOL CARD
───────────────────────────────────────────────────────────────────────────── */
function ToolCard({ tool, isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      className="relative cursor-pointer rounded-[16px] p-5 transition-all duration-300 group"
      style={{
        background: isActive ? `rgba(${tool.rgb},0.07)` : "rgba(255,255,255,0.025)",
        border: `1px solid ${isActive ? `rgba(${tool.rgb},0.3)` : "rgba(255,255,255,0.06)"}`,
        borderLeft: `3px solid ${isActive ? tool.color : "transparent"}`,
        transform: isActive ? "translateX(3px)" : "translateX(0)",
        boxShadow: isActive ? `0 8px 32px rgba(${tool.rgb},0.12)` : "none",
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        {/* Logo badge */}
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-[11px] font-bold font-syne shrink-0"
          style={{
            background: `rgba(${tool.rgb},0.15)`,
            border: `1.5px solid rgba(${tool.rgb},0.35)`,
            color: tool.color,
          }}
        >
          {tool.logo}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-white leading-none mb-0.5">{tool.fullName}</p>
          <p className="text-[10px] text-[#444] truncate">{tool.vendor}</p>
        </div>
        <span
          className="text-[9px] font-semibold tracking-[0.08em] uppercase px-2 py-1 rounded-full shrink-0"
          style={{
            background: `rgba(${tool.rgb},0.12)`,
            border: `1px solid rgba(${tool.rgb},0.25)`,
            color: tool.color,
          }}
        >
          {tool.badge}
        </span>
      </div>
      <p className="text-[12px] text-[#666] leading-relaxed line-clamp-2">{tool.desc}</p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────────────────────────────────────── */
export default function DataMigrationSection() {
  const [activePhase, setActivePhase]   = useState(0);
  const [activeTool, setActiveTool]     = useState(0);
  const [phaseAnim, setPhaseAnim]       = useState(false);

  const [sectionRef, sectionVis]  = useInView(0.05);
  const [statsRef, statsVis]      = useInView(0.2);
  const [pipeRef, pipeVis]        = useInView(0.3);
  const [phaseRef, phaseVis]      = useInView(0.1);
  const [toolRef, toolVis]        = useInView(0.1);

  const switchPhase = (i) => {
    if (i === activePhase) return;
    setPhaseAnim(true);
    setTimeout(() => { setActivePhase(i); setPhaseAnim(false); }, 180);
  };

  const reveal = (delay = "0s") =>
    sectionVis
      ? { animation: `dmReveal 0.65s cubic-bezier(0.4,0,0.2,1) ${delay} forwards` }
      : { opacity: 0 };

  const ap = DMF_PHASES[activePhase];
  const at = TOOLS[activeTool];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

        @keyframes dmReveal   { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes dmGlow     { 0%,100%{opacity:.38} 50%{opacity:.72} }
        @keyframes dmPulse    { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.3);opacity:.6} }
        @keyframes dmSpin     { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes dmSlide    { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        @keyframes dmDash     { to{stroke-dashoffset:0} }
        @keyframes dmMqee     { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes dmBlink    { 0%,100%{opacity:1} 50%{opacity:.3} }
        @keyframes dmRipple   { 0%{transform:scale(1);opacity:.6} 100%{transform:scale(2.4);opacity:0} }

        .dm-root { font-family:'Plus Jakarta Sans',sans-serif; }
        .dm-font-syne { font-family:'Syne',sans-serif; }

        .dm-phase-btn {
          transition: all .25s cubic-bezier(0.4,0,0.2,1);
          cursor: pointer;
          border-radius: 12px;
          padding: 10px 14px;
          font-family: inherit;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: .04em;
          border: 1px solid rgba(255,255,255,0.07);
          background: transparent;
          color: #555;
          flex: 1;
          white-space: nowrap;
        }
        .dm-phase-btn:hover { background:rgba(255,255,255,0.04); color:#888; }

        .dm-phase-detail { transition: opacity .18s ease, transform .18s ease; }
        .dm-phase-detail.out { opacity:0; transform:translateY(8px); }

        .dm-tool-detail {
          transition: opacity .22s ease, transform .22s ease;
        }
        .dm-tool-detail.out { opacity:0; transform:translateX(10px); }

        .dm-capability-item {
          transition: all .2s ease;
        }
        .dm-capability-item:hover { background:rgba(255,255,255,0.05) !important; transform:translateX(3px); }

        .dm-cta-btn {
          transition: all .25s ease;
        }
        .dm-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(212,168,83,0.18);
        }

        .dm-glow-ring {
          animation: dmRipple 2.5s ease-out infinite;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative overflow-hidden text-white dm-root"
        style={{ background: "white", padding: "68px 0 120px" }}
      >

        {/* ── Particle BG ── */}
        <div className="absolute inset-0 pointer-events-none opacity-55">
          <ParticleCanvas />
        </div>

        {/* ── Ambient glows ── */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            top: -320, left: "22%", width: 800, height: 800,
            background: "radial-gradient(circle,rgba(212,168,83,0.045) 0%,transparent 65%)",
            animation: "dmGlow 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            bottom: -250, right: "12%", width: 560, height: 560,
            background: "radial-gradient(circle,rgba(91,155,213,0.04) 0%,transparent 65%)",
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            top: "40%", left: "-8%", width: 400, height: 400,
            background: "radial-gradient(circle,rgba(107,191,122,0.03) 0%,transparent 65%)",
          }}
        />

        {/* ── Grid texture ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.018,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.9) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.9) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* ── Diagonal accent ── */}
        <div
          className="absolute pointer-events-none opacity-[0.035]"
          style={{
            top: "30%", left: "-5%", right: "-5%", height: 1,
            background: "linear-gradient(90deg,transparent,rgba(91,155,213,0.9),transparent)",
            transform: "rotate(-1.5deg)",
          }}
        />

        <div className="relative max-w-[1200px] mx-auto px-5 md:px-8 xl:px-11">

          {/* ══════════════════════════════════════════
              HEADER
          ══════════════════════════════════════════ */}
          <div className="mb-16" style={reveal("0.04s")}>
            {/* Badge */}
         <h2 className="mb-12 text-[clamp(38px,6vw,58px)] font-sans font-extrabold text-center tracking-tight bg-gradient-to-r text-transparent bg-clip-text from-gray-500 via-gray-800 to-black drop-shadow-lg dark:text-white">
Data Migration Transperancy
</h2>
            <div className="flex flex-col justify-between gap-32 lg:flex-row lg:items-end">
              <div>
                <h2
                  className="dm-font-syne text-blue-400 font-extrabold leading-[1.05] tracking-[-0.03em] mb-5 max-w-[640px]"
                  style={{ fontSize: "clamp(30px,5vw,58px)" }}
                >
                  Your data arrives<br />
                  <span
                    className="text-transparent bg-clip-text"
                    style={{
                      backgroundImage: "linear-gradient(90deg,#C8962A,#F5D07A,#6BBF7A)",
                      backgroundSize: "200% auto",
                    }}
                  >
                    complete. Verified. Safe.
                  </span>
                </h2>
                <p className="text-[15px] text-[#575757] max-w-[540px] leading-[1.8]">
                  We don't move a single record without a paper trail. Our DMF-driven process, tracked inside Microsoft LCS and Azure DevOps, gives you full transparency from first extract to go-live cutover.
                </p>
              </div>

              {/* Live indicator */}
              <div
                className="flex items-center self-start gap-3 px-5 py-3 shrink-0 rounded-2xl lg:self-auto"
                style={{ background: "rgba(107,191,122,0.07)", border: "1px solid rgba(107,191,122,0.2)" }}
              >
                <div className="relative flex items-center justify-center w-4 h-4">
                  <div
                    className="absolute w-4 h-4 rounded-full opacity-60"
                    style={{ background: "#6BBF7A", animation: "dmRipple 2.2s ease-out infinite" }}
                  />
                  <div className="w-2 h-2 rounded-full" style={{ background: "#6BBF7A" }} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-red-600 leading-none">Live Tracking Active</p>
                  <p className="text-[9px] text-[#4a4a4a] mt-0.5">Azure DevOps · LCS</p>
                </div>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════
              STATS ROW
          ══════════════════════════════════════════ */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 gap-3 mb-16 md:grid-cols-4"
            style={reveal("0.12s")}
          >
            {INTEGRITY_STATS.map((stat, i) => (
              <AnimStat key={i} stat={stat} visible={statsVis} delay={i * 90} />
            ))}
          </div>

          {/* ══════════════════════════════════════════
              DATA PIPELINE VISUALISER
          ══════════════════════════════════════════ */}
          <div
            ref={pipeRef}
            className="rounded-[22px] p-6 md:p-10 mb-6"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.07)",
              ...reveal("0.18s"),
            }}
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-[10px] text-[#444] tracking-[0.14em] uppercase font-semibold mb-1">
                  Live Migration Pipeline
                </p>
                <p className="text-[13px] text-[#777]">End-to-end data flow — AX 2012 to D365 F&O</p>
              </div>
              <div
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-[11px] font-semibold"
                style={{ background: "rgba(212,168,83,0.08)", border: "1px solid rgba(212,168,83,0.2)", color: "#D4A853" }}
              >
                <span style={{ animation: "dmBlink 1.4s ease infinite" }}>●</span> DMF Active
              </div>
            </div>
            <DataPipeline visible={pipeVis} />
          </div>

          {/* ══════════════════════════════════════════
              DMF PHASES  +  PHASE DETAIL
          ══════════════════════════════════════════ */}
          <div
            ref={phaseRef}
            className="grid grid-cols-1 xl:grid-cols-[1fr_420px] gap-5 mb-6"
            style={reveal("0.24s")}
          >
            {/* LEFT: phase tabs + cards */}
            <div
              className="rounded-[22px] overflow-hidden"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              {/* Tab bar */}
              <div
                className="flex flex-wrap gap-2 p-4"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                {DMF_PHASES.map((p, i) => (
                  <button
                    key={p.id}
                    className="dm-phase-btn"
                    onClick={() => switchPhase(i)}
                    style={{
                      background: i === activePhase ? `rgba(${p.rgb},0.1)` : "transparent",
                      borderColor: i === activePhase ? `rgba(${p.rgb},0.35)` : "rgba(255,255,255,0.07)",
                      color: i === activePhase ? p.color : "#555",
                    }}
                  >
                    <span className="mr-1.5 text-[10px]">{p.phase}</span>
                    {p.short}
                  </button>
                ))}
              </div>

              {/* Phase detail */}
              <div className={`p-6 dm-phase-detail ${phaseAnim ? "out" : ""}`}>
                {/* Phase header */}
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-12 h-12 rounded-[14px] flex items-center justify-center shrink-0"
                    style={{
                      background: `rgba(${ap.rgb},0.12)`,
                      border: `1.5px solid rgba(${ap.rgb},0.3)`,
                      color: ap.color,
                    }}
                  >
                    {ap.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-[9px] font-bold tracking-[0.14em] uppercase px-2.5 py-1 rounded-full"
                        style={{ background: `rgba(${ap.rgb},0.12)`, border: `1px solid rgba(${ap.rgb},0.25)`, color: ap.color }}
                      >
                        Phase {ap.phase}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white dm-font-syne">{ap.title}</h3>
                  </div>
                  {/* Stat badge */}
                  <div
                    className="px-4 py-3 text-center shrink-0 rounded-xl"
                    style={{ background: `rgba(${ap.rgb},0.07)`, border: `1px solid rgba(${ap.rgb},0.2)` }}
                  >
                    <p className="text-lg font-bold leading-none dm-font-syne" style={{ color: ap.color }}>{ap.stat.value}</p>
                    <p className="text-[9px] text-[#444] tracking-wide mt-1 uppercase">{ap.stat.label}</p>
                  </div>
                </div>

                <p className="text-[13.5px] text-[#888] leading-[1.8] mb-5">{ap.desc}</p>

                {/* Tools used */}
                <div>
                  <p className="text-[10px] text-[#3a3a3a] tracking-[0.12em] uppercase font-semibold mb-3">
                    Tools Used
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {ap.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[11px] px-3 py-1.5 rounded-lg font-medium"
                        style={{
                          background: `rgba(${ap.rgb},0.07)`,
                          border: `1px solid rgba(${ap.rgb},0.2)`,
                          color: ap.color,
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Progress dots */}
                <div className="flex items-center gap-2 pt-5 mt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  {DMF_PHASES.map((_, i) => (
                    <div
                      key={i}
                      onClick={() => switchPhase(i)}
                      className="transition-all duration-300 rounded-full cursor-pointer"
                      style={{
                        width: i === activePhase ? 20 : 6,
                        height: 6,
                        background: i === activePhase ? ap.color : "rgba(255,255,255,0.12)",
                      }}
                    />
                  ))}
                  <span className="ml-auto text-[11px] text-[#444]">{activePhase + 1} of {DMF_PHASES.length}</span>
                </div>
              </div>
            </div>

            {/* RIGHT: vertical phase stepper */}
            <div className="flex flex-col gap-3">
              {DMF_PHASES.map((p, i) => (
                <div
                  key={p.id}
                  onClick={() => switchPhase(i)}
                  className="relative flex gap-4 px-4 py-4 transition-all duration-300 cursor-pointer group rounded-2xl"
                  style={{
                    background: i === activePhase ? `rgba(${p.rgb},0.07)` : "rgba(255,255,255,0.02)",
                    border: `1px solid ${i === activePhase ? `rgba(${p.rgb},0.28)` : "rgba(255,255,255,0.05)"}`,
                    borderLeft: `3px solid ${i === activePhase ? p.color : "transparent"}`,
                    transform: i === activePhase ? "translateX(4px)" : "translateX(0)",
                  }}
                >
                  {/* Phase number */}
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-[10px] font-bold shrink-0 dm-font-syne"
                    style={{
                      background: `rgba(${p.rgb},${i === activePhase ? "0.18" : "0.07"})`,
                      border: `1px solid rgba(${p.rgb},${i === activePhase ? "0.4" : "0.15"})`,
                      color: i === activePhase ? p.color : "#555",
                    }}
                  >
                    {p.phase}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-[13px] font-semibold leading-none mb-1 ${i === activePhase ? "text-white" : "text-[#666]"}`}>
                      {p.title}
                    </p>
                    <p className="text-[11px] text-[#3a3a3a] truncate">{p.tools[0]} · {p.tools[1]}</p>
                  </div>
                  {i === activePhase && (
                    <div
                      className="shrink-0 w-1.5 h-1.5 rounded-full self-center"
                      style={{ background: p.color, animation: "dmPulse 2s ease-in-out infinite" }}
                    />
                  )}
                </div>
              ))}

              {/* Integrity guarantee card */}
              <div
                className="p-5 mt-2 rounded-2xl"
                style={{ background: "rgba(107,191,122,0.04)", border: "1px solid rgba(107,191,122,0.15)" }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="flex items-center justify-center w-8 h-8 text-sm rounded-xl shrink-0"
                    style={{ background: "rgba(107,191,122,0.12)", border: "1px solid rgba(107,191,122,0.25)" }}
                  >
                    ✓
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-white mb-1">Data Integrity Guarantee</p>
                    <p className="text-[11px] text-[#555] leading-relaxed">
                      We guarantee 100% record reconciliation between source and target. Any discrepancy is our responsibility to resolve — before go-live, at no additional cost.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════
              TOOLS SECTION — DMF · LCS · Azure DevOps
          ══════════════════════════════════════════ */}
          <div
            ref={toolRef}
            className="rounded-[22px] overflow-hidden mb-6"
            style={{
              background: "rgba(255,255,255,0.018)",
              border: "1px solid rgba(255,255,255,0.07)",
              ...reveal("0.3s"),
            }}
          >
            <div
              className="flex flex-wrap items-center justify-between gap-4 px-6 py-6 md:px-8"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
            >
              <div>
                <p className="text-[10px] text-[#444] tracking-[0.14em] uppercase font-semibold mb-1">
                  Our Toolstack
                </p>
                <h3 className="text-xl font-bold text-white dm-font-syne">DMF · LCS · Azure DevOps</h3>
              </div>
              <p className="text-[13px] text-[#555] max-w-[380px]">
                Three Microsoft-native platforms working in concert — so your migration is traceable at every step.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-0">
              {/* Tool list */}
              <div
                className="flex flex-col gap-2 p-5"
                style={{ borderRight: "1px solid rgba(255,255,255,0.05)" }}
              >
                {TOOLS.map((tool, i) => (
                  <ToolCard
                    key={tool.id}
                    tool={tool}
                    isActive={i === activeTool}
                    onClick={() => setActiveTool(i)}
                  />
                ))}
              </div>

              {/* Tool detail */}
              <div className={`p-6 md:p-8 dm-tool-detail ${activeTool !== activeTool ? "out" : ""}`}>
                <div className="flex items-start gap-5 mb-6">
                  {/* Big logo */}
                  <div
                    className="w-16 h-16 rounded-[18px] flex items-center justify-center text-[15px] font-bold dm-font-syne shrink-0"
                    style={{
                      background: `rgba(${at.rgb},0.14)`,
                      border: `2px solid rgba(${at.rgb},0.3)`,
                      color: at.color,
                      boxShadow: `0 8px 32px rgba(${at.rgb},0.15)`,
                    }}
                  >
                    {at.logo}
                  </div>
                  <div>
                    <div
                      className="inline-flex items-center gap-1.5 text-[9px] font-semibold tracking-[0.1em] uppercase
                                 px-2.5 py-1 rounded-full mb-2"
                      style={{
                        background: `rgba(${at.rgb},0.1)`,
                        border: `1px solid rgba(${at.rgb},0.25)`,
                        color: at.color,
                      }}
                    >
                      {at.badge}
                    </div>
                    <h3 className="text-2xl font-bold leading-tight text-white dm-font-syne">{at.fullName}</h3>
                    <p className="text-[12px] text-[#444] mt-0.5">{at.vendor}</p>
                  </div>
                </div>

                <p className="text-[14px] text-[#888] leading-[1.8] mb-6">{at.desc}</p>

                {/* Capabilities */}
                <div>
                  <p className="text-[10px] text-[#3a3a3a] tracking-[0.12em] uppercase font-semibold mb-3">
                    What we use it for
                  </p>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {at.capabilities.map((cap, ci) => (
                      <div
                        key={cap}
                        className="dm-capability-item flex items-center gap-2.5 px-4 py-2.5 rounded-xl"
                        style={{
                          background: "rgba(255,255,255,0.025)",
                          border: "1px solid rgba(255,255,255,0.06)",
                          animationDelay: `${ci * 0.06}s`,
                          opacity: toolVis ? 1 : 0,
                          animation: toolVis ? `dmSlide 0.45s ease ${ci * 0.06}s both` : "none",
                        }}
                      >
                        <span className="text-[8px]" style={{ color: at.color }}>◆</span>
                        <span className="text-[12px] text-[#aaa]">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom bar */}
                <div
                  className="flex items-center gap-3 pt-5 mt-6"
                  style={{ borderTop: `1px solid rgba(${at.rgb},0.08)` }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: at.color, animation: "dmPulse 2s ease-in-out infinite" }}
                  />
                  <span className="text-[11px] text-[#444]">
                    Live in every active migration project
                  </span>
                  <a
                    href="#contact"
                    className="ml-auto text-[11px] font-semibold tracking-[0.06em] no-underline
                               px-4 py-2 rounded-xl transition-all duration-200"
                    style={{
                      background: `rgba(${at.rgb},0.08)`,
                      border: `1px solid rgba(${at.rgb},0.25)`,
                      color: at.color,
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = `rgba(${at.rgb},0.16)`;
                      e.currentTarget.style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = `rgba(${at.rgb},0.08)`;
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    Ask us how →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════
              BOTTOM CTA BANNER
          ══════════════════════════════════════════ */}
          <div
            className="rounded-[22px] px-7 md:px-12 py-9 flex flex-col md:flex-row items-start md:items-center gap-8 justify-between mb-14"
            style={{
              background: "rgba(212,168,83,0.03)",
              border: "1px solid rgba(212,168,83,0.13)",
              ...reveal("0.38s"),
            }}
          >
            <div className="flex-1">
              <p
                className="text-[11px] tracking-[0.12em] uppercase font-semibold mb-3"
                style={{ color: "#D4A853" }}
              >
                What your team sees — always
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2">
                {[
                  "Record counts — source vs. target",
                  "Validation error logs (zero tolerance)",
                  "Sprint velocity in Azure DevOps",
                  "Environment status in LCS",
                  "Cutover readiness checklist",
                  "Reconciliation sign-off tracker",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-[12px] text-[#666]">
                    <span className="text-[8px] shrink-0" style={{ color: "#D4A853" }}>◆</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <a
              href="#contact"
              className="dm-cta-btn shrink-0 inline-flex items-center gap-2 no-underline
                         font-semibold text-[13px] tracking-[0.06em] px-7 py-4 rounded-2xl"
              style={{
                background: "linear-gradient(135deg,rgba(212,168,83,0.18),rgba(212,168,83,0.08))",
                border: "1px solid rgba(212,168,83,0.42)",
                color: "#D4A853",
              }}
            >
              Start Your Migration Audit &rarr;
            </a>
          </div>

          {/* ══════════════════════════════════════════
              MARQUEE
          ══════════════════════════════════════════ */}
          <div style={reveal("0.44s")}>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 28 }}>
              <p className="text-[10px] text-[#303030] tracking-[0.14em] uppercase font-semibold text-center mb-4">
                Migration capabilities
              </p>
              <div
                className="overflow-hidden"
                style={{
                  maskImage: "linear-gradient(90deg,transparent 0%,black 10%,black 90%,transparent 100%)",
                  WebkitMaskImage: "linear-gradient(90deg,transparent 0%,black 10%,black 90%,transparent 100%)",
                }}
              >
                <div
                  className="flex gap-3"
                  style={{ animation: "dmMqee 28s linear infinite", width: "max-content" }}
                >
                  {[
                    "DMF Framework", "LCS Environment Mgmt", "Azure DevOps CI/CD",
                    "Data Cleansing", "Entity Mapping", "Staging Validation",
                    "Cutover Planning", "Rollback Strategy", "Zero Downtime Migration",
                    "Post Go-Live Reconciliation", "DMF Framework", "LCS Environment Mgmt",
                    "Azure DevOps CI/CD", "Data Cleansing", "Entity Mapping",
                    "Staging Validation", "Cutover Planning", "Rollback Strategy",
                  ].map((s, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 px-4 py-[7px] rounded-full text-[11px] whitespace-nowrap"
                      style={{ border: "1px solid rgba(212,168,83,0.13)", color: "rgba(212,168,83,0.55)" }}
                    >
                      <span className="inline-block w-1 h-1 rounded-full opacity-50" style={{ background: "#D4A853" }} />
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
