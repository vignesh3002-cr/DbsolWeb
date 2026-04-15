import { useEffect, useState } from "react";
import Globe from "react-globe.gl";

const clients = [
  { lat: 13.0827, lng: 80.2707, label: "Chennai 🇮🇳" },
  { lat: 11.0106, lng: 76.5821, label: "Coimbatore 🇮🇳" },
  { lat: 40.7128, lng: -74.006, label: "USA 🇺🇸" },
  { lat: 51.5072, lng: -0.1276, label: "UK 🇬🇧" },
];

export default function GlobePage() {
  const [size, setSize] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center 
      bg-white/20 dark:bg-gray-900 
      bg-[radial-gradient(rgba(255,255,255,0.25)_1px,transparent_1px)] 
      bg-[size:20px_20px]"
    >
      {/* 🌍 Globe Section */}
      <div className="w-full h-[60vh] md:h-[80vh] relative overflow-hidden">

        {/* 📝 Title */}
        <div className="relative z-10 pt-4 text-center">
          <h1 className="text-xl md:text-3xl font-bold text-black dark:text-gray-200">
            Our Clients Around the World 🌍
          </h1>

          <p className="mt-1 text-sm md:text-base text-black dark:text-gray-200">
            Tap & rotate to explore 🌏
          </p>
        </div>

        {/* 🌍 Globe */}
        <div className="relative z-10 w-full h-full">
          <Globe
            width={size.width}
            height={size.height * 0.7}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"

            htmlElementsData={clients}
            htmlLat="lat"
            htmlLng="lng"
            htmlElement={(d) => {
              const el = document.createElement("div");

              // 👇 Tailwind applied here
              el.className = "cursor-pointer";

              const inner = document.createElement("div");
              inner.className =
                "bg-gradient-to-br from-blue-500 to-cyan-400 text-white px-2 py-1 rounded-full text-[10px] font-medium whitespace-nowrap animate-float animate-glow";

              inner.innerText = `🎈 ${d.label}`;

              el.appendChild(inner);

              el.onclick = () => {
                alert("Client Location: " + d.label);
              };

              return el;
            }}

            backgroundColor="rgba(0,0,0,0)"
            atmosphereColor="blue"
            atmosphereAltitude={0.25}

            onGlobeReady={(globe) => {
              const controls = globe.controls();

              controls.autoRotate = true;
              controls.autoRotateSpeed = 0.3;
              controls.enableZoom = true;
              controls.enablePan = false;
            }}
          />
        </div>
      </div>
    </div>
  );
}