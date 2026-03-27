
import { useState, useEffect, useRef, useCallback } from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    id: 1,
    tag: "Migration Rescue",
    accentHex: "#D4A853",
    accentAlpha10: "rgba(212,168,83,0.10)",
    accentAlpha16: "rgba(212,168,83,0.16)",
    accentAlpha20: "rgba(212,168,83,0.20)",
    accentAlpha28: "rgba(212,168,83,0.28)",
    accentAlpha40: "rgba(212,168,83,0.40)",
    accentAlpha55: "rgba(212,168,83,0.55)",
    industry: "Heavy Manufacturing",
    migration: "AX 2012 → D365 F&O",
    duration: "8 months",
    avatar: "JW",
    speaker: "James Whitfield",
    role: "CFO, Meridian Manufacturing",
    pain: "Our old system was a black box. We were stuck on an outdated version of AX, and every time we tried to pull a financial report, it felt like crossing our fingers and hoping for the best.",
    solution: "The team didn't just 'flip a switch.' They mapped out our entire Procure-to-Pay process and migrated over twenty years of data without us losing a single day of operations.",
    result: "Now, our Project Managers see real-time costs on their tablets in the field. The headache of manual reconciliation is completely gone. We finally have a single source of truth.",
    stats: [
      { value: "100%", label: "Data Integrity" },
      { value: "0",    label: "Days Downtime" },
      { value: "3x",   label: "Faster Reports" },
    ],
    videoId: "2hg2qZVDGWs",
  },
  {
    id: 2,
    tag: "Cloud Transformation",
    accentHex: "#5B9BD5",
    accentAlpha10: "rgba(91,155,213,0.10)",
    accentAlpha16: "rgba(91,155,213,0.16)",
    accentAlpha20: "rgba(91,155,213,0.20)",
    accentAlpha28: "rgba(91,155,213,0.28)",
    accentAlpha40: "rgba(91,155,213,0.40)",
    accentAlpha55: "rgba(91,155,213,0.55)",
    industry: "Supply Chain & Logistics",
    migration: "On-Premise to Azure Cloud",
    duration: "6 months",
    avatar: "PN",
    speaker: "Priya Nambiar",
    role: "Head of Finance, Apex Logistics",
    pain: "We were running 14 spreadsheets to reconcile what should have been one report. Our finance team spent entire Fridays just manually checking numbers that never aligned.",
    solution: "They redesigned our chart of accounts, automated our AP workflows, and moved everything to the cloud. The whole migration was zero-disruption — our teams didn't miss a beat.",
    result: "Month-end close went from 20 days down to 6. Our team now has time to do actual analysis instead of data entry. It's transformed what finance means in our business.",
    stats: [
      { value: "14→1",   label: "Reports Unified" },
      { value: "6 days", label: "Month-End Close" },
      { value: "70%",    label: "Manual Work Cut" },
    ],
    videoId: "i9HpWkKZtuk",
  },
  {
    id: 3,
    tag: "App Modernisation",
    accentHex: "#6BBF7A",
    accentAlpha10: "rgba(107,191,122,0.10)",
    accentAlpha16: "rgba(107,191,122,0.16)",
    accentAlpha20: "rgba(107,191,122,0.20)",
    accentAlpha28: "rgba(107,191,122,0.28)",
    accentAlpha40: "rgba(107,191,122,0.40)",
    accentAlpha55: "rgba(107,191,122,0.55)",
    industry: "Real Estate & Property",
    migration: "Legacy Web to Mobile + D365",
    duration: "4 months",
    avatar: "DO",
    speaker: "David Osei",
    role: "Operations Director, Pinnacle RE",
    pain: "Our site managers were calling the office for purchase order approvals. Everything was paper-based and we had zero visibility on project costs until month-end — pure chaos.",
    solution: "They built us a custom Android and iOS app that syncs live with D365. Approvals happen on-site, budgets update in real time, and our ERP finally talks to our project managers.",
    result: "We cut procurement cycle time by 60%. Site managers have the data before they walk into a meeting. It's the digital transformation we always talked about but never executed.",
    stats: [
      { value: "60%",        label: "Faster Procurement" },
      { value: "Live",       label: "Cost Visibility" },
      { value: "iOS+Android",label: "Custom App" },
    ],
    videoId: "2hg2qZVDGWs",
  },
];

const PHASES = [
  { key: "pain",     label: "The Pain",     icon: "◈", color: "#E05252" },
  { key: "solution", label: "The Solution", icon: "◉", color: "#D4A853" },
  { key: "result",   label: "The Result",   icon: "◆", color: "#6BBF7A" },
];

const TIMELINE = [
  { num: "01", label: "Discovery & Audit",    desc: "We map your P2P, O2C, and finance workflows end-to-end before writing a single line of config." },
  { num: "02", label: "Data Migration",       desc: "Every record validated, cleaned, and migrated — zero data loss, guaranteed." },
  { num: "03", label: "Configuration",        desc: "D365 F&O tailored to your chart of accounts, legal entities, and dimensions." },
  { num: "04", label: "Go-Live & Hypercare",  desc: "Parallel run, cutover, and 30-day hypercare — we don't leave until you're stable." },
];

const SERVICES = [
  "D365 F&O Implementation",
  "AX 2012 Migration",
  "Power BI & Reporting",
  "Responsive Web Dev",
  "iOS & Android Apps",
  "Azure Cloud Setup",
];

/* ─────────────────────────────────────────────────────────────────────────────
   HOOKS
───────────────────────────────────────────────────────────────────────────── */
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ─────────────────────────────────────────────────────────────────────────────
   ANIMATED COUNTER
───────────────────────────────────────────────────────────────────────────── */
function AnimCounter({ target, visible }) {
  const [display, setDisplay] = useState("0");
  const ran = useRef(false);
  useEffect(() => {
    if (!visible || ran.current) return;
    ran.current = true;
    const num = parseFloat(target.replace(/[^0-9.]/g, ""));
    if (isNaN(num)) { setDisplay(target); return; }
    const suffix = target.replace(/[0-9.]/g, "");
    let i = 0;
    const iv = setInterval(() => {
      i++;
      setDisplay(Math.round((num * i) / 40) + suffix);
      if (i >= 40) { setDisplay(target); clearInterval(iv); }
    }, 28);
    return () => clearInterval(iv);
  }, [visible, target]);
  return <>{display}</>;
}

/* ─────────────────────────────────────────────────────────────────────────────
   PARTICLE CANVAS
───────────────────────────────────────────────────────────────────────────── */
function ParticleCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    const pts = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      r: Math.random() * 1.4 + 0.3,
    }));
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach((p) => {
        p.x = (p.x + p.vx + canvas.width)  % canvas.width;
        p.y = (p.y + p.vy + canvas.height) % canvas.height;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(212,168,83,0.4)";
        ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < 115) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(212,168,83,${0.07 * (1 - d / 115)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return (
    <canvas
      ref={ref}
      className="absolute inset-0 block w-full h-full pointer-events-none"
    />
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   VIDEO MODAL
───────────────────────────────────────────────────────────────────────────── */
function VideoModal({ videoId, onClose }) {
  useEffect(() => {
    const h = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", h);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", h); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4
                 bg-black/90 backdrop-blur-xl animate-vm-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[920px] bg-[#0A0A0C] rounded-[20px] overflow-hidden
                   border border-[rgba(212,168,83,0.2)] shadow-modal animate-vm-slide-up"
      >
        {/* 16:9 iframe wrapper */}
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title="Client Testimonial"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
        <div className="flex items-center justify-between px-5 py-3">
          <span className="text-[11px] tracking-[0.06em] text-[#444]">Press ESC to close</span>
          <button
            onClick={onClose}
            className="bg-white/5 border border-white/10 text-[#777] rounded-lg
                       px-4 py-1.5 text-xs font-[family-name:inherit] cursor-pointer
                       hover:bg-white/10 transition-colors duration-200"
          >
            Close ✕
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   TIMELINE BLOCK
───────────────────────────────────────────────────────────────────────────── */
function TimelineBlock() {
  return (
    <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5">
      <p className="text-[14px] text-[#444] tracking-[0.12em] uppercase font-semibold mb-[18px]">
        Our Migration Process
      </p>
      {TIMELINE.map((step, i) => (
        <div key={i} className="flex gap-3.5">
          {/* Left: number + line */}
          <div className="flex flex-col items-center">
            <div
              className="w-[26px] h-[26px] rounded-full shrink-0 flex items-center justify-center
                         text-[9px] font-bold font-syne"
              style={{
                background: "rgba(212,168,83,0.10)",
                border: "1px solid rgba(212,168,83,0.30)",
                color: "#D4A853",
              }}
            >
              {step.num}
            </div>
            {i < TIMELINE.length - 1 && (
              <div
                className="w-4px flex-1 my-[3px]"
                style={{ background: "rgba(212,168,83,0.12)" }}
              />
            )}
          </div>
          {/* Right: text */}
          <div className={i < TIMELINE.length - 1 ? "pb-2" : ""}>
            <p className="text-xs font-bold text-[#c2b41c] mb-0.5">{step.label}</p>
            <p className="text-[11px] text-[#484848] leading-relaxed">{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────────────────────────────────────── */
export default function TestimonialsSection() {
  const [active,    setActive]    = useState(0);
  const [phase,     setPhase]     = useState("pain");
  const [modal,     setModal]     = useState(null);
  const [phaseAnim, setPhaseAnim] = useState(false);
  const [cardAnim,  setCardAnim]  = useState(false);

  const [sectionRef, sectionVisible] = useInView(0.05);
  const [statsRef,   statsVisible]   = useInView(0.30);

  const t            = TESTIMONIALS[active];
  const currentPhase = PHASES.find((p) => p.key === phase);
  const phaseWidth   = phase === "pain" ? "33%" : phase === "solution" ? "66%" : "100%";

  const switchCard = useCallback((i) => {
    if (i === active) return;
    setCardAnim(true);
    setTimeout(() => { setActive(i); setPhase("pain"); setCardAnim(false); }, 220);
  }, [active]);

  const switchPhase = useCallback((key) => {
    if (key === phase) return;
    setPhaseAnim(true);
    setTimeout(() => { setPhase(key); setPhaseAnim(false); }, 180);
  }, [phase]);

  /* Reveal utility — applied when section enters viewport */
  const reveal = (delay = "0s") =>
    sectionVisible
      ? { animation: `tmReveal 0.6s cubic-bezier(0.4,0,0.2,1) ${delay} forwards` }
      : { opacity: 0 };

  return (
    <>
      {/* ── Keyframes injected once (only what Tailwind can't JIT) ── */}
      <style>{`
        @keyframes tmReveal   { from{opacity:0;transform:translateY(26px)} to{opacity:1;transform:translateY(0)} }
        @keyframes tmGlow     { 0%,100%{opacity:.5} 50%{opacity:.85} }
        @keyframes tmPulse    { 0%,100%{transform:scale(1)} 50%{transform:scale(1.14)} }
        @keyframes tmFloat    { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }
        @keyframes spinRing   { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes marquee    { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes vmFadeIn   { from{opacity:0} to{opacity:1} }
        @keyframes vmSlideUp  { from{transform:translateY(40px) scale(0.96);opacity:0} to{transform:translateY(0) scale(1);opacity:1} }
        .animate-tm-reveal   { animation: tmReveal .6s cubic-bezier(0.4,0,0.2,1) forwards; }
        .animate-tm-glow     { animation: tmGlow 7s ease-in-out infinite; }
        .animate-tm-pulse    { animation: tmPulse 2.2s ease-in-out infinite; }
        .animate-tm-float    { animation: tmFloat 3.5s ease-in-out infinite; }
        .animate-spin-ring   { animation: spinRing 12s linear infinite; }
        .animate-marquee     { animation: marquee 24s linear infinite; }
        .animate-vm-fade-in  { animation: vmFadeIn .2s ease forwards; }
        .animate-vm-slide-up { animation: vmSlideUp .3s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        /* Sidebar hover */
        .sidebar-item { transition: all .25s cubic-bezier(0.4,0,0.2,1); }
        .sidebar-item:hover { background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.1); transform: translateX(3px); }
        /* Phase body transition */
        .phase-body { transition: opacity .18s ease, transform .18s ease; }
        .phase-body.anim-out { opacity: 0; transform: translateY(7px); }
        /* Card wrap transition */
        .card-wrap { transition: opacity .22s ease, transform .22s ease; }
        .card-wrap.anim-out { opacity: 0; transform: translateY(10px); }
        /* Stat card hover */
        .stat-card { transition: all .25s ease; }
        .stat-card:hover { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.13); transform: translateY(-2px); }
        /* Phase button hover */
        .phase-btn:hover { background: rgba(255,255,255,0.04); color: #888; }
        /* CTA hover */
        .ts-cta:hover { background: rgba(212,168,83,0.1); border-color: rgba(212,168,83,0.7); color: #E8C070; transform: translateY(-1px); }
        /* Play button hover */
        .play-btn:hover { transform: scale(1.16); background: rgba(255,255,255,0.22) !important; border-color: rgba(255,255,255,0.65) !important; }
        /* Clamp lines */
        .clamp-2 { display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; }
      `}</style>

      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-[#e5e5e5] font-jakarta text-white
                   py-[8px] md:py-[8px]"
      >
                      <h2 className="mb-8 text-[clamp(38px,6vw,60px)] font-sans font-extrabold text-center tracking-tight bg-gradient-to-r text-transparent bg-clip-text from-gray-500 via-gray-800 to-black drop-shadow-lg dark:text-white">
Client Success Stories
</h2>
        {/* ── Particle background ── */}
        <div className="absolute inset-0 pointer-events-none opacity-65">
          <ParticleCanvas />
        </div>

        {/* ── Radial glows ── */}
        <div
          className="absolute rounded-full pointer-events-none animate-tm-glow"
          style={{
            top: -260, left: "18%",
            width: 750, height: 750,
            background: "radial-gradient(circle,rgba(212,168,83,0.055) 0%,transparent 65%)",
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            bottom: -180, right: "8%",
            width: 520, height: 520,
            background: "radial-gradient(circle,rgba(91,155,213,0.04) 0%,transparent 65%)",
          }}
        />

        {/* ── Grid texture ── */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.022]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.9) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.9) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* ── Content wrapper ── */}
        <div className="relative max-w-[1200px] mx-auto px-5 md:px-8 xl:px-11">
          {/* ── HEADER ─────────────────────────────────────────────────── */}
          <div className="mb-11" style={reveal("0.05s")}>
            {/* Badge */}

            {/* Headline */}
            <h2 className="font-serif font-extrabold leading-[1.06] tracking-[-0.03em] text-white mb-[18px]
                           text-[clamp(48px,8vw,60px)] md:text-[clamp(58px,5vw,80px)]">
              Real migrations.<br />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(90deg,#C8962A,#F5D07A,#C8962A)",
                  backgroundSize: "200% auto",
                }}
              >
                Real results.
              </span>
            </h2>

            <p className="text-sm md:text-base text-[#585858] max-w-[500px] leading-[1.78]">
              From AX 2012 to modern cloud ERP — our clients talk about what the transformation actually felt like from the inside.
            </p>
          </div>

          {/* ── MAIN GRID ───────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_350px] gap-7 items-start">

            {/* ── LEFT PANEL ─────────────────────────────────────────────── */}
            <div
              className={`card-wrap ${cardAnim ? "anim-out" : ""}`}
              style={reveal("0.14s")}
            >
              {/* Tag row */}
              <div className="flex flex-wrap gap-2 mb-5">
                {[
                  { label: t.tag,       accent: true },
                  { label: t.migration, accent: false },
                  { label: t.industry,  accent: false },
                ].map(({ label, accent }, li) => (
                  <span
                    key={li}
                    className="text-[11px] px-[13px] py-[5px] rounded-full"
                    style={{
                      background: accent ? t.accentAlpha16 : "rgba(255,255,255,0.04)",
                      border:     `2px solid ${accent ? t.accentAlpha40 : "rgba(255,255,255,0.08)"}`,
                      color:      accent ? t.accentHex : "#585858",
                      fontWeight: accent ? 600 : 400,
                      letterSpacing: accent ? "0.08em" : "0.02em",
                      textTransform: accent ? "uppercase" : "none",
                    }}
                  >
                    {label}
                  </span>
                ))}
              </div>

              {/* ── VIDEO CARD ── */}
              <div
                className="relative rounded-[18px] overflow-hidden mb-5 bg-[#0F0F12]"
                style={{
                  border:      "1px solid rgba(255,255,255,0.07)",
                  aspectRatio: "16 / 7.5",
                  boxShadow:   "rgb(255 255 255 / 65%) 0px 20px 60px, rgba(107, 191, 122, 0.1) 0px 0px 0px 1px",
                  transition:  "box-shadow 0.4s ease",
                }}
              >
                {/* Thumbnail */}
                <img
                  src={`https://img.youtube.com/vi/${t.videoId}/maxresdefault.jpg`}
                  alt="Video thumbnail"
                  loading="lazy"
                  className="block object-cover w-full h-full"
                  onError={(e) => { e.target.style.display = "none"; }}
                />

                {/* Colour tint overlay */}
                <div
                  className="absolute inset-0 transition-all duration-500"
                  style={{
                    background: `radial-gradient(ellipse at 30% 55%,${t.accentAlpha16} 0%,transparent 60%)`,
                  }}
                />

                {/* Scanlines */}
                <div
                  className="absolute inset-0 opacity-[0.035] pointer-events-none"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(255,255,255,0.6) 2px,rgba(255,255,255,0.6) 3px)",
                  }}
                />

                {/* Centre overlay (play + label) */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-3.5"
                  style={{ background: "linear-gradient(135deg,rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.1) 55%,rgba(0,0,0,0.42) 100%)" }}
                >
                  <div className="relative">
                    {/* Spinning dashed ring */}
                    <div
                      className="absolute rounded-full pointer-events-none animate-spin-ring"
                      style={{
                        inset: -10,
                        border: "1px dashed rgba(212,168,83,0.25)",
                      }}
                    />
                    {/* Play button */}
                    <button
                      onClick={() => setModal(t.videoId)}
                      className="play-btn animate-tm-float w-[70px] h-[70px] rounded-full
                                 flex items-center justify-center text-white text-[22px]
                                 backdrop-blur-md cursor-pointer transition-all duration-300"
                      style={{
                        border:     "2px solid rgba(255,255,255,0.35)",
                        background: "rgba(255,255,255,0.10)",
                      }}
                    >
                      <span className="ml-1">&#9654;</span>
                    </button>
                  </div>
                  <span
                    className="text-xs tracking-[0.04em] backdrop-blur-md px-3.5 py-[5px] rounded-lg"
                    style={{
                      color:      "rgba(255,255,255,0.55)",
                      background: "rgba(0,0,0,0.50)",
                      border:     "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    Watch case study
                  </span>
                </div>

                {/* Speaker badge (bottom-left) */}
                <div
                  className="absolute bottom-3.5 left-3.5 flex items-center gap-2.5
                             rounded-xl px-3.5 py-2 backdrop-blur-2xl"
                  style={{
                    background:  "rgba(6,6,8,0.82)",
                    border:      `2px solid ${t.accentAlpha28}`,
                    boxShadow:   "0 8px 28px rgba(0,0,0,0.45)",
                    transition:  "border-color 0.4s ease",
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center
                               text-[11px] font-bold"
                    style={{
                      background: t.accentAlpha20,
                      border:     `2px solid ${t.accentAlpha55}`,
                      color:      t.accentHex,
                    }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-[#eee] leading-none mb-0.5">{t.speaker}</p>
                    <p className="text-[10px] text-[#c3c3c3] leading-none">{t.role}</p>
                  </div>
                </div>

                {/* Duration badge (top-right) */}
                <div
                  className="absolute top-3.5 right-3.5 rounded-lg px-3 py-[5px]
                             text-[11px] text-[#c4c4c4] backdrop-blur-xl"
                  style={{
                    background: "rgba(6,6,8,0.75)",
                    border:     "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  &#9203; {t.duration} project
                </div>
              </div>

              {/* ── PHASE TABS ── */}
              <div className="flex gap-2 mb-2.5">
                {PHASES.map((p) => (
                  <button
                    key={p.key}
                    onClick={() => switchPhase(p.key)}
                    className="phase-btn flex-1 py-2.5 rounded-xl cursor-pointer
                               font-[family-name:inherit] text-[11px] md:text-xs font-semibold
                               tracking-[0.04em] transition-all duration-[220ms]"
                    style={{
                      background:   phase === p.key ? `${p.color}12` : "transparent",
                      border:       `2px solid ${phase === p.key ? p.color + "45" : "rgba(255,255,255,0.07)"}`,
                      color:        phase === p.key ? p.color : "#555",
                    }}
                  >
                    <span className="mr-1">{p.icon}</span>
                    {p.label}
                  </button>
                ))}
              </div>

              {/* Progress bar */}
              <div className="h-0.5 rounded-full overflow-hidden mb-3.5" style={{ background: "rgba(255,255,255,0.05)" }}>
                <div
                  className="h-full rounded-full transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                  style={{
                    width:      phaseWidth,
                    background: `linear-gradient(90deg,${currentPhase?.color},${currentPhase?.color}77)`,
                    boxShadow:  `0 0 8px ${currentPhase?.color}55`,
                    transition: "width .4s cubic-bezier(0.4,0,0.2,1), background .35s ease",
                  }}
                />
              </div>

              {/* Quote box */}
              <div
                className="relative overflow-hidden rounded-r-2xl py-[22px] px-4 md:px-[26px] min-h-[106px]"
                style={{
                  background:  "rgba(255,255,255,0.022)",
                  border:      "1px solid rgba(255,255,255,0.07)",
                  borderLeft:  `3px solid ${currentPhase?.color}`,
                  transition:  "border-left-color 0.35s ease",
                }}
              >
                {/* Glow blob */}
                <div
                  className="absolute -top-[18px] -left-[18px] w-[110px] h-[110px] rounded-full pointer-events-none"
                  style={{
                    background: `radial-gradient(circle,${currentPhase?.color}12,transparent 70%)`,
                    transition: "background 0.35s ease",
                  }}
                />
                {/* Text */}
                <div className={`phase-body relative z-10 ${phaseAnim ? "anim-out" : ""}`}>
                  <p
                    className="text-[10px] tracking-[0.12em] uppercase font-semibold mb-2.5
                               flex items-center gap-1.5"
                    style={{ color: currentPhase?.color, transition: "color 0.35s ease" }}
                  >
                    <span>{currentPhase?.icon}</span>
                    {currentPhase?.label}
                  </p>
                  <p className="text-[13.5px] md:text-[15px] text-[#b8b8b8] leading-[1.85] italic m-0">
                    &ldquo;{t[phase]}&rdquo;
                  </p>
                </div>
              </div>

              {/* Stats row */}
              <div ref={statsRef} className="flex gap-2.5 mt-3.5 flex-nowrap">
                {t.stats.map((s, si) => (
                  <div
                    key={s.label}
                    className="flex flex-col items-center flex-1 gap-1 px-2 py-3 stat-card rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border:     "1px solid rgba(255,255,255,0.07)",
                      transitionDelay: `${si * 0.06}s`,
                    }}
                  >
                    <span className="font-syne font-bold text-green-600 text-[15px] md:text-[19px] tracking-tight leading-none">
                      <AnimCounter target={s.value} visible={statsVisible} />
                    </span>
                    <span className="text-[9px] tracking-[0.1em] uppercase text-[#4a4a4a] font-bold">{s.label}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* ── RIGHT SIDEBAR (desktop ≥ xl) ─────────────────────────── */}
            <div
              className="xl:flex flex-col gap-2.5"
              style={reveal("0.28s")}
            >
              {TESTIMONIALS.map((item, i) => (
                <div
                  key={item.id}
                  onClick={() => switchCard(i)}
                  className="sidebar-item cursor-pointer rounded-2xl p-[18px]"
                  style={{
                    border:     `1px solid ${i === active ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.05)"}`,
                    background: i === active ? "rgba(255,255,255,0.055)" : "rgba(255,255,255,0.02)",
                    borderLeft: `3px solid ${i === active ? item.accentHex : "transparent"}`,
                  }}
                >
                  {/* Speaker row */}
                  <div className="flex items-center gap-2.5 mb-2">
                    <div
                      className="w-[34px] h-[34px] rounded-full shrink-0 flex items-center justify-center
                                 text-[11px] font-bold"
                      style={{
                        background: item.accentAlpha20,
                        border:     `1.5px solid ${item.accentAlpha55}`,
                        color:      item.accentHex,
                      }}
                    >
                      {item.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-[13px] font-semibold leading-none mb-0.5 truncate"
                        style={{ color: i === active ? "black" : "#aaa" }}
                      >
                        {item.speaker}
                      </p>
                      <p className="text-[10px] text-[#444] truncate">{item.role}</p>
                    </div>
                    <span
                      className="text-[9px] px-2 py-[3px] rounded-full shrink-0 tracking-[0.06em] uppercase"
                      style={{
                        background: item.accentAlpha16,
                        border:     `1px solid ${item.accentAlpha40}`,
                        color:      item.accentHex,
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  {/* Quote snippet */}
                  <p
                    className="clamp-2 text-xs leading-[1.65] m-0"
                    style={{ color: i === active ? "#888" : "#444" }}
                  >
                    &ldquo;{item.result}&rdquo;
                  </p>

                  {/* Mini stats (active only) */}
                  {i === active && (
                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {item.stats.map((s) => (
                        <span
                          key={s.label}
                          className="text-[10px] px-[9px] py-[3px] rounded-md text-[#666]"
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            border:     "1px solid rgba(255,255,255,0.07)",
                          }}
                        >
                          <span className="text-[#42aa2f] font-semibold">{s.value}</span> {s.label}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <TimelineBlock />
            </div>
          </div>
               {/* CTA */}
              <a
                href="#contact"
                className="ts-cta block text-center no-underline px-6 py-[15px] rounded-xl
                           text-[20px] font-semibold tracking-[0.06em] font-[family-name:inherit]
                           transition-all duration-[250ms]"
                style={{
                  border:     "2px solid rgba(212,168,83,0.38)",
                  color:      "#D4A853",
                  background: "rgba(212,168,83,0.04)",
                }}
              >
                Book a Free Migration Audit &rarr;
              </a>

              {/* Trust */}
              <div
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border:     "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <span className="text-[13px]">&#128274;</span>
                <span className="text-[11px] tracking-[0.04em] text-[#3a3a3a]">
                  NDA-protected client engagements
                </span>
              </div>

        </div>
      </section>

      {modal && <VideoModal videoId={modal} onClose={() => setModal(null)} />}
    </>
  );
}
