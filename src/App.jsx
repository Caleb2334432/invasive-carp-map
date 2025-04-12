import { useState } from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function App() {
  const [year, setYear] = useState("2025");

  const carpData = {
    2016: [],
    2017: ["Region 1"],
    2018: ["Region 1"],
    2019: ["Region 1"],
    2020: ["Region 1", "Region 2", "Region 3"],
    2021: ["Region 1", "Region 2", "Region 3"],
    2022: ["Region 1", "Region 2", "Region 3"],
    2023: ["Region 1", "Region 2", "Region 3", "Region 4"],
    2024: ["Region 1", "Region 2", "Region 3", "Region 4"],
    2025: ["Region 1", "Region 2", "Region 3", "Region 4"]
  };

  const regions = {
    "Region 1": [[
      [41.7, -87.6], [41.6, -87.7], [41.5, -87.6], [41.6, -87.5], [41.7, -87.6]
    ]],
    "Region 2": [[
      [41.0, -88.0], [40.9, -88.1], [40.8, -88.0], [40.9, -87.9], [41.0, -88.0]
    ]],
    "Region 3": [[
      [40.3, -89.0], [40.2, -89.1], [40.1, -89.0], [40.2, -88.9], [40.3, -89.0]
    ]],
    "Region 4": [[
      [39.6, -90.0], [39.5, -90.1], [39.4, -90.0], [39.5, -89.9], [39.6, -90.0]
    ]],
    "Region 5": [[
      [39.2, -91.2], [39.1, -91.3], [39.0, -91.2], [39.1, -91.1], [39.2, -91.2]
    ]]
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Invasive Carp Map Viewer</h1>
      <label className="block mb-2 font-medium">Select Year:</label>
      <select
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="mb-4 p-2 border rounded"
      >
        {Object.keys(carpData).map((yr) => (
          <option key={yr} value={yr}>{yr}</option>
        ))}
      </select>
      <MapContainer center={[40.5, -89.0]} zoom={7} style={{ height: "500px", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {carpData[year].map((region, idx) => (
          <Polygon
            key={idx}
            positions={regions[region]}
            pathOptions={{ color: "red", fillOpacity: 0.5 }}
          />
        ))}
      </MapContainer>
    </div>
  );
}