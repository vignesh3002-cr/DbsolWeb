import Globe from "react-globe.gl";

const clients = [
  { lat: 13.0827, lng: 80.2707, size: 0.3, color: "red" },
  { lat: 40.7128, lng: -74.0060, size: 0.3, color: "blue" },
  { lat: 51.5072, lng: -0.1276, size: 0.3, color: "green" },
];

export default function GlobePage() {
  return (
    <div className="h-screen w-full bg-black">
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        pointsData={clients}
        pointLat="lat"
        pointLng="lng"
        pointColor="color"
        pointAltitude={0.02}
        pointRadius="size"
      />
    </div>
  );
}