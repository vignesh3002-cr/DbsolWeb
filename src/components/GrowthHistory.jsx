import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";


const stats = [
  { num: "500+", label: "Happy Clients", color: "text-blue-700" },
  { num: "98%", label: "Retention Rate", color: "text-green-700" },
  { num: "12", label: "Industry Awards", color: "text-yellow-600" },
  { num: "18", label: "Countries Served", color: "text-blue-700" },
  { num: "200+", label: "Team Members", color: "text-green-700" },
];

const milestones = [
  {
    year: "2015",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m226-559 78 33q14-28 29-54t33-52l-56-11-84 84Zm142 83 114 113q42-16 90-49t90-75q70-70 109.5-155.5T806-800q-72-5-158 34.5T492-656q-42 42-75 90t-49 90Zm155-121.5q0-33.5 23-56.5t57-23q34 0 57 23t23 56.5q0 33.5-23 56.5t-57 23q-34 0-57-23t-23-56.5ZM565-220l84-84-11-56q-26 18-52 32.5T532-299l33 79Zm313-653q19 121-23.5 235.5T708-419l20 99q4 20-2 39t-20 33L538-80l-84-197-171-171-197-84 167-168q14-14 33.5-20t39.5-2l99 20q104-104 218-147t235-24ZM157-321q35-35 85.5-35.5T328-322q35 35 34.5 85.5T327-151q-25 25-83.5 43T82-76q14-103 32-161.5t43-83.5Zm57 56q-10 10-20 36.5T180-175q27-4 53.5-13.5T270-208q12-12 13-29t-11-29q-12-12-29-11.5T214-265Z"/></svg>,
    title: "Company Founded",
    desc: "Launched with a bold vision to deliver world-class services. Onboarded our first 5 enterprise clients within 90 days of inception.",
    tags: [
      { label: "Foundation", style: "bg-blue-100 text-blue-700" },
      { label: "5 Clients", style: "bg-yellow-100 text-yellow-700 border border-yellow-300" },
    ],
    metric: "$0 → $120K",
    metricStyle: "bg-blue-100 text-blue-700",
    iconBg: "bg-blue-100",
    yearStyle: "bg-blue-100 text-blue-700",
    lineGrad: "from-blue-500 to-green-500",
  },
  {
    year: "2017",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m387-412 35-114-92-74h114l36-112 36 112h114l-93 74 35 114-92-71-93 71ZM240-40v-309q-38-42-59-96t-21-115q0-134 93-227t227-93q134 0 227 93t93 227q0 61-21 115t-59 96v309l-240-80-240 80Zm410-350q70-70 70-170t-70-170q-70-70-170-70t-170 70q-70 70-70 170t70 170q70 70 170 70t170-70ZM320-159l160-41 160 41v-124q-35 20-75.5 31.5T480-240q-44 0-84.5-11.5T320-283v124Zm160-62Z"/></svg>,
    title: "First Industry Award & ISO Certification",
    desc: "Recognized as Top Emerging Service Provider. Achieved ISO 9001:2015 certification, boosting client trust and opening enterprise-tier contracts.",
    tags: [
      { label: "ISO Certified", style: "bg-green-100 text-green-700" },
      { label: "Award", style: "bg-blue-100 text-blue-700" },
      { label: "50 Clients", style: "bg-yellow-100 text-yellow-700 border border-yellow-300" },
    ],
    metric: "2× Growth",
    metricStyle: "bg-green-100 text-green-700",
    iconBg: "bg-green-100",
    yearStyle: "bg-green-100 text-green-700",
    lineGrad: "from-green-500 to-yellow-400",
  },
  {
    year: "2019",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-7-.5-14.5T799-507q-5 29-27 48t-52 19h-80q-33 0-56.5-23.5T560-520v-40H400v-80q0-33 23.5-56.5T480-720h40q0-23 12.5-40.5T563-789q-20-5-40.5-8t-42.5-3q-134 0-227 93t-93 227h200q66 0 113 47t47 113v40H400v110q20 5 39.5 7.5T480-160Z"/></svg>,
    title: "International Expansion — 8 Countries",
    desc: "Opened regional offices in 3 continents. Established strategic partnerships with Fortune 500 companies and government bodies.",
    tags: [
      { label: "Global Reach", style: "bg-yellow-100 text-yellow-700 border border-yellow-300" },
      { label: "Partnerships", style: "bg-blue-100 text-blue-700" },
      { label: "150 Clients", style: "bg-green-100 text-green-700" },
    ],
    metric: "8 Countries",
    metricStyle: "bg-yellow-100 text-yellow-700",
    iconBg: "bg-yellow-100",
    yearStyle: "bg-yellow-100 text-yellow-700",
    lineGrad: "from-yellow-400 to-blue-500",
  },
  {
    year: "2020",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-80q-26 0-47-12.5T400-126q-33 0-56.5-23.5T320-206v-142q-59-39-94.5-103T190-590q0-121 84.5-205.5T480-880q121 0 205.5 84.5T770-590q0 77-35.5 140T640-348v142q0 33-23.5 56.5T560-126q-12 21-33 33.5T480-80Zm-80-126h160v-36H400v36Zm0-76h160v-38H400v38Zm-8-118h58v-108l-88-88 42-42 76 76 76-76 42 42-88 88v108h58q54-26 88-76.5T690-590q0-88-61-149t-149-61q-88 0-149 61t-61 149q0 63 34 113.5t88 76.5Zm88-162Zm0-38Z"/></svg>,
    title: "Digital Transformation During COVID-19",
    desc: "Pivoted 100% remote within 10 days. Launched our proprietary digital delivery platform that cut project turnaround by 40%.",
    tags: [
      { label: "Innovation", style: "bg-blue-100 text-blue-700" },
      { label: "Resilience", style: "bg-green-100 text-green-700" },
      { label: "Tech Platform", style: "bg-yellow-100 text-yellow-700 border border-yellow-300" },
    ],
    metric: "40% Faster",
    metricStyle: "bg-red-100 text-red-700",
    iconBg: "bg-red-50",
    yearStyle: "bg-blue-100 text-blue-700",
    lineGrad: "from-blue-500 to-green-500",
  },
  {
    year: "2022",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M320-414v-306h120v306l-60-56-60 56Zm200 60v-526h120v406L520-354ZM120-216v-344h120v224L120-216Zm0 98 258-258 142 122 224-224h-64v-80h200v200h-80v-64L524-146 382-268 232-118H120Z"/></svg>,
    title: "Series A Funding & 350+ Clients Milestone",
    desc: "Secured $12M Series A. Crossed 350 active clients. Launched dedicated customer success & 24×7 support division.",
    tags: [
      { label: "$12M Funding", style: "bg-green-100 text-green-700" },
      { label: "350 Clients", style: "bg-blue-100 text-blue-700" },
      { label: "Support Desk", style: "bg-yellow-100 text-yellow-700 border border-yellow-300" },
    ],
    metric: "$12M Raised",
    metricStyle: "bg-green-100 text-green-700",
    iconBg: "bg-green-100",
    yearStyle: "bg-green-100 text-green-700",
    lineGrad: "from-green-500 to-blue-500",
  },
  {
    year: "2024",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M160-120v-200q0-33 23.5-56.5T240-400h480q33 0 56.5 23.5T800-320v200H160Zm200-320q-83 0-141.5-58.5T160-640q0-83 58.5-141.5T360-840h240q83 0 141.5 58.5T800-640q0 83-58.5 141.5T600-440H360ZM240-200h480v-120H240v120Zm120-320h240q50 0 85-35t35-85q0-50-35-85t-85-35H360q-50 0-85 35t-35 85q0 50 35 85t85 35Zm28.5-91.5Q400-623 400-640t-11.5-28.5Q377-680 360-680t-28.5 11.5Q320-657 320-640t11.5 28.5Q343-600 360-600t28.5-11.5Zm240 0Q640-623 640-640t-11.5-28.5Q617-680 600-680t-28.5 11.5Q560-657 560-640t11.5 28.5Q583-600 600-600t28.5-11.5ZM480-200Zm0-440Z"/></svg>,
    title: "AI-Powered Services Launch",
    desc: "Integrated AI & automation across our service stack. Achieved 98% client retention. Won 3 consecutive industry excellence awards.",
    tags: [
      { label: "AI Integration", style: "bg-blue-100 text-blue-700" },
      { label: "98% Retention", style: "bg-green-100 text-green-700" },
      { label: "3 Awards", style: "bg-yellow-100 text-yellow-700 border border-yellow-300" },
    ],
    metric: "98% Retained",
    metricStyle: "bg-blue-100 text-blue-700",
    iconBg: "bg-blue-100",
    yearStyle: "bg-blue-100 text-blue-700",
    lineGrad: "from-blue-500 to-yellow-400",
  },
  {
    year: "2025",
    icon: "⭐",
    title: "500+ Clients · 18 Countries · #1 Rated",
    desc: "Ranked #1 in our sector for client satisfaction. Serving 500+ clients across 18 countries with 200+ team members and zero major SLA breaches for 24 consecutive months.",
    tags: [
      { label: "500+ Clients", style: "bg-blue-100 text-blue-700" },
      { label: "#1 Rated", style: "bg-green-100 text-green-700" },
      { label: "18 Countries", style: "bg-yellow-100 text-yellow-700 border border-yellow-300" },
    ],
    metric: "Present",
    metricStyle: "bg-gradient-to-br from-blue-600 to-green-600 text-white",
    iconBg: "bg-gradient-to-br from-blue-600 to-green-600",
    yearStyle: "bg-blue-700 text-white",
    lineGrad: null,
    isLast: true,
  },
];

// Animated counter hook
function useCountUp(target, duration = 1400, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const isFloat = target.toString().includes(".");
    const num = parseFloat(target);
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(isFloat ? (eased * num).toFixed(1) : Math.floor(eased * num));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatCard({ num, label, color, inView }) {
  const raw = parseFloat(num.replace(/[^0-9.]/g, ""));
  const suffix = num.replace(/[0-9.]/g, "");
  const animated = useCountUp(raw, 1200, inView);
  return (
    <div className="flex flex-col items-center justify-center flex-1 px-3 py-4 transition-transform duration-300 border-r border-blue-100 last:border-r-0 hover:scale-105">
      <div className={`text-2xl font-medium tracking-tight ${color}`}>
        {inView ? `${animated}${suffix}` : `0${suffix}`}
      </div>
      <div className="mt-1 text-xs text-center text-gray-400">{label}</div>
    </div>
  );
}

function TrendChart() {
  const [drawn, setDrawn] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setDrawn(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const years = ["2015", "2017", "2019", "2020", "2022", "2024", "2025"];
  const xPositions = [30, 134, 238, 312, 416, 520, 626];

  const revPoints = [92, 82, 68, 55, 38, 28, 18];
  const cliPoints = [96, 90, 80, 65, 48, 38, 28];
  const satPoints = [88, 84, 72, 62, 44, 34, 24];

  const toPath = (xs, ys) => xs.map((x, i) => `${i === 0 ? "M" : "L"}${x},${ys[i]}`).join(" ");
  const toArea = (xs, ys) => `${toPath(xs, ys)} L${xs[xs.length - 1]},100 L${xs[0]},100Z`;

  return (
    <div ref={ref} className="px-6 py-4 bg-blue-50/40">
      <div className="mb-2 text-xs font-semibold tracking-widest text-gray-400">REVENUE GROWTH & CLIENT EXPANSION</div>
      <svg viewBox="0 0 660 115" className="w-full" aria-hidden="true">
        <defs>
          <linearGradient id="rg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1565C0" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#1565C0" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2E7D32" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#2E7D32" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F9A825" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#F9A825" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[20, 50, 80].map((y) => (
          <line key={y} x1="20" y1={y} x2="650" y2={y} stroke="#dde5f5" strokeWidth="0.5" />
        ))}
        {/* Revenue area */}
        <path d={toArea(xPositions, revPoints)} fill="url(#rg)" />
        <path
          d={toPath(xPositions, revPoints)}
          fill="none"
          stroke="#1565C0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="700"
          strokeDashoffset={drawn ? "0" : "700"}
          style={{ transition: "stroke-dashoffset 1.5s ease 0.2s" }}
        />
        {/* Client area */}
        <path d={toArea(xPositions, cliPoints)} fill="url(#cg)" />
        <path
          d={toPath(xPositions, cliPoints)}
          fill="none"
          stroke="#2E7D32"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="700"
          strokeDashoffset={drawn ? "0" : "700"}
          style={{ transition: "stroke-dashoffset 1.5s ease 0.5s" }}
        />
        {/* Satisfaction dashed */}
        <path d={toArea(xPositions, satPoints)} fill="url(#sg)" />
        <path
          d={toPath(xPositions, satPoints)}
          fill="none"
          stroke="#F9A825"
          strokeWidth="1.5"
          strokeDasharray="5 3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Animated dots at latest */}
        {drawn && (
          <>
            <circle cx="626" cy="18" r="6" fill="#1565C0" className="opacity-75 animate-ping" style={{ animationDuration: "1.8s" }} />
            <circle cx="626" cy="18" r="4" fill="#1565C0" />
            <circle cx="626" cy="18" r="2" fill="white" />
            <circle cx="626" cy="28" r="4" fill="#2E7D32" />
            <circle cx="626" cy="28" r="2" fill="white" />
          </>
        )}
        {/* Year labels */}
        {years.map((y, i) => (
          <text key={y} x={xPositions[i]} y="112" textAnchor="middle" fontSize="9" fill="#bbb" fontFamily="sans-serif">
            {y}
          </text>
        ))}
        <text x="18" y="24" textAnchor="end" fontSize="8" fill="#ccc" fontFamily="sans-serif">High</text>
        <text x="18" y="84" textAnchor="end" fontSize="8" fill="#ccc" fontFamily="sans-serif">Low</text>
      </svg>
    </div>
  );
}

function MilestoneCard({ m, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex items-start gap-4 px-3 py-4 transition-all duration-300 border-b cursor-default rounded-xl hover:bg-blue-50/60 group border-blue-50 last:border-b-0"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s, background 0.2s`,
      }}
    >
      {/* Year + line column */}
      <div className="flex flex-col items-center min-w-[52px] pt-1">
        <span className={`text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap ${m.yearStyle}`}>
          {m.year}
        </span>
        {!m.isLast && (
          <div className={`w-0.5 flex-1 min-h-[32px] mt-1 rounded-full bg-gradient-to-b ${m.lineGrad}`} />
        )}
      </div>

      {/* Icon */}
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0 shadow-sm ${m.iconBg} group-hover:scale-110 transition-transform duration-200`}
      >
        {m.icon}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="mb-1 text-sm font-medium leading-snug text-gray-800">{m.title}</div>
        <div className="mb-2 text-xs leading-relaxed text-gray-500">{m.desc}</div>
        <div className="flex flex-wrap gap-1.5">
          {m.tags.map((t) => (
            <span key={t.label} className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${t.style}`}>
              {t.label}
            </span>
          ))}
        </div>
      </div>

      {/* Metric */}
      <div
        className={`text-xs font-semibold px-3 py-2 rounded-lg self-start flex-shrink-0 text-center min-w-[72px] ${m.metricStyle}`}
      >
        {m.metric}
      </div>
    </div>
  );
}

export default function GrowthJourney() {
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsVisible(true); }, { threshold: 0.3 });
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="flex items-start justify-center min-h-screen px-4 py-4 bg-gray-50">
      <div className="w-full overflow-hidden bg-white border border-blue-100 shadow-lg rounded-2xl">

        {/* ── HEADER ── */}
        <div className="relative px-8 overflow-hidden bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 py-7">
          {/* Animated grid bg */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg,white 0,white 1px,transparent 1px,transparent 60px),repeating-linear-gradient(0deg,white 0,white 1px,transparent 1px,transparent 40px)",
              animation: "bgScroll 10s linear infinite",
            }}
          />
          {/* Glow blobs */}
          <div className="absolute top-0 right-0 w-64 h-full rounded-full bg-green-400/10 blur-3xl" />
          <div className="absolute bottom-0 w-48 h-24 rounded-full left-1/3 bg-yellow-300/10 blur-2xl" />

          <div className="relative">
            <h1 className="text-2xl font-medium tracking-tight text-white">Our Growth Journey</h1>
            <p className="mt-1 text-sm text-blue-200">Milestones that define who we are & where we're headed</p>
          </div>
          <div className="absolute hidden -translate-y-1/2 right-8 top-1/2 sm:block">
            <span className="bg-white/10 border border-white/20 text-white/90 text-xs font-medium px-4 py-1.5 rounded-full">
              Est. 2015 · 10 Years Strong
            </span>
          </div>
          <style>{`@keyframes bgScroll { to { background-position: 60px 0; } }`}</style>
        </div>

        {/* ── STATS ROW ── */}
        <div ref={statsRef} className="flex border-b border-blue-50">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} inView={statsVisible} />
          ))}
        </div>

        {/* ── TREND CHART ── */}
        <TrendChart />

        {/* ── MILESTONES ── */}
        <div className="px-4 py-2">
          {milestones.map((m, i) => (
            <MilestoneCard key={m.year} m={m} index={i} />
          ))}
        </div>

        {/* ── FOOTER LEGEND ── */}
        <div className="flex flex-wrap items-center gap-5 px-6 py-3 border-t border-blue-100 bg-blue-50/60">
          <span className="text-xs font-semibold tracking-widest text-gray-400">TREND LINES:</span>
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-700 inline-block" />
            Revenue Growth
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <span className="w-2.5 h-2.5 rounded-full bg-green-700 inline-block" />
            Client Expansion
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <svg width="22" height="10" className="inline-block">
              <line x1="0" y1="5" x2="22" y2="5" stroke="#F9A825" strokeWidth="1.5" strokeDasharray="4 2" />
            </svg>
            Client Satisfaction
          </div>
          <span className="hidden ml-auto text-xs text-gray-300 sm:block">10 Years · Trusted & Verified</span>
        </div>

      </div>
    </div>
  );
}
