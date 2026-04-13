import { useEffect, useState } from "react";
import Globe from "react-globe.gl";

const clients = [
  { lat: 13.0827, lng: 80.2707, label: "Chennai 🇮🇳" },
  { lat: 11.0106, lng: 76.5821, label: "Coimbatore 🇮🇳" },
  { lat: 40.7128, lng: -74.0060, label: "USA 🇺🇸" },
  { lat: 51.5072, lng: -0.1276, label: "UK 🇬🇧" },
];

export default function GlobePage() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // ✅ Responsive resize
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🎈 Floating animation + glow
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes float {
        from { transform: translateY(0px); }
        to { transform: translateY(-8px); }
      }

      @keyframes glow {
        0% { box-shadow: 0 0 5px rgba(59,130,246,0.6); }
        100% { box-shadow: 0 0 20px rgba(59,130,246,1); }
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="w-full min-h-screen text-white flex flex-col items-center bg-black">

      {/* Title */}
      <h1 className="text-xl md:text-3xl font-bold py-4 text-center">
        Our Clients Around the World 🌍
      </h1>

      <p className="mb-4 text-gray-300 text-sm md:text-base text-center">
        Tap & rotate to explore 🌏
      </p>

      {/* 🌌 Background */}
      <div className="w-full h-[60vh] md:h-[80vh] relative bg-gradient-to-br from-blue-900 via-black to-indigo-900 overflow-hidden">

        {/* ⭐ Fake stars */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:20px_20px]"></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Globe */}
        <div className="relative z-10 w-full h-full">
          <Globe
            width={size.width}
            height={size.height * 0.7}

            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"

            // 🎈 Balloon markers
            htmlElementsData={clients}
            htmlLat="lat"
            htmlLng="lng"
            htmlElement={(d) => {
              const el = document.createElement("div");

              el.innerHTML = `
                <div style="
                  background: linear-gradient(135deg, #3b82f6, #06b6d4);
                  color: white;
                  padding: 5px 10px;
                  border-radius: 999px;
                  font-size: 10px;
                  font-weight: 500;
                  white-space: nowrap;
                  animation: float 2s ease-in-out infinite alternate, glow 1.5s infinite alternate;
                  cursor: pointer;
                ">
                  🎈 ${d.label}
                </div>
              `;

              // 🎯 Click interaction
              el.onclick = () => {
                alert(`Client Location: ${d.label}`);
              };

              return el;
            }}

            backgroundColor="rgba(0,0,0,0)"

            // 🌍 Globe effects
            atmosphereColor="blue"
            atmosphereAltitude={0.25}

            onGlobeReady={(globe) => {
              const controls = globe.controls();

              controls.autoRotate = true;
              controls.autoRotateSpeed = 0.3;

              // 📱 Better mobile UX
              controls.enableZoom = true;
              controls.enablePan = false;
            }}
          />
        </div>
      </div>
    </div>
  );
}