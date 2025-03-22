"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function MapCm({
  latlong,
  setLatlong,
}: {
  latlong?: [number, number];
  setLatlong: Dispatch<SetStateAction<[number, number] | undefined>>;
}) {
  const [markerPosition, setMarkerPosition] = useState<[number, number]>([
    35.7, 51.4167,
  ]);

  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
  });

//   useEffect(() => {
//     if (!!latlong) {
//       setMarkerPosition(latlong);
//     }
//   }, [latlong]);

  const MapEvents = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setMarkerPosition([lat, lng]);
        setLatlong([lat, lng]);
      },
    });
    return null;
  };

  return (
    <MapContainer
      className="h-full"
      style={{ borderRadius: "10px" }}
      center={markerPosition}
      zoom={5}
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}"
        subdomains={["mt0", "mt1", "mt2", "mt3"]}
      />
      <Marker position={markerPosition} draggable={true}></Marker>
      <MapEvents />
    </MapContainer>
  );
}

export default MapCm;
