"use client";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { TeacherNeed } from '@/types/TeacherNeed';

import { getPriorityColor } from '@/utils/colors';


export default function NeedMap({ needs }: { needs: TeacherNeed[]}) {

  return (
    <div className="h-[500px] w-full rounded-2xl overflow-hidden border-2 border-slate-100 shadow-lg z-0">
      <MapContainer 
        center={[46.6033, 1.8883]} 
        zoom={6} 
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false} // Plus agréable pour la navigation dans la page
      >
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {needs.map((need) => {
        const colors = getPriorityColor(need.priority);

        // Icons courtesy of pointhi/leaflet-color-markers (MIT License)
        /**
         * LICENSE NOTICE:
         * The map markers used in this component are provided by 'leaflet-color-markers'.
         * Copyright (c) 2013-2020, Thomas Pointhuber
         * Copyright (c) 2010-2019, Vladimir Agafonkin
         * Licensed under the BSD 2-Clause License.
         */
        const customIcon = L.icon({
            iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${colors.hex}.png`,
            shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });

        return (
            <Marker key={need.id} position={[need.location.lat, need.location.lng]} icon={customIcon}>
                <Popup>
                    <div className="p-2 min-w-[150px]">
                      <div className={`p-4 rounded-xl border ${colors.border} ${colors.bg}`}>
                        <span className={`text-xs font-bold uppercase tracking-wider ${colors.text}`}>
                          {need.priority}
                        </span>
                        <h3 className="text-lg font-bold text-slate-600 mt-1">{need.subject}</h3>
                      </div>
                      <p className="text-sm">📍 <strong>{need.location.academia}</strong></p>
                      
                      {/* Couleur synchronisée ici */}
                      <p className={`text-sm mt-1 font-bold ${colors.text}`}>
                          {need.nbPostes ? `poste${need.nbPostes > 1 ? "s" : ""}` : ""}                         
                          {need.priority ? ` (${need.priority})` : ""}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex flex-col wrap flex-start items-start gap-4">
                          <span className="text-sm font-semibold text-blue-600"><u>Académie :</u> {need.location.academia}</span>
                          {need.location.academia !== need.location.establishment ? 
                            <span className="text-sm font-semibold text-orange-600"><u>Établissement :</u> {need.location.establishment}</span>
                            : ""
                          }
                        </div>
                      </div>
                    </div>
                </Popup>
          </Marker>
        )})}
      </MapContainer>
    </div>
  );
}