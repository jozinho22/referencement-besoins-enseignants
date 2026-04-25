"use client";
import { useState } from 'react';
import NeedCard from './NeedCard';
import TEACHER_NEEDS from "@/data/agri-teacher-needs.json";
import { TeacherNeed } from "@/types/TeacherNeed";
import { getSubjectsColor } from '@/utils/utils';
import { isMobile } from '@/utils/utils';

import MapWrapper from './MapWrapper'; // Importe ton wrapper ici

export default function Content() {
  const [activeFilter, setActiveFilter] = useState('Tous');

  const initialNeeds = TEACHER_NEEDS as TeacherNeed[];

  // 1. On calcule la liste filtrée UNE SEULE FOIS ici
  const filteredNeeds = activeFilter === 'Tous' 
    ? initialNeeds 
    : initialNeeds.filter(need => need.subject === activeFilter);

  const subjects = ['Tous', ...Array.from(new Set(initialNeeds.map(n => n.subject)))];
  let count = 0;
  const cardBaseStyle = "border-2 rounded-xl p-4 transition-all";

  return (
    <div className="space-y-8">

      {/* Barre de Filtres */}
      <div className="flex flex-wrap gap-2 pb-4 border-b">
        {subjects.map(subject => (
          <button style={{cursor: "pointer"}}
            key={subject}
            onClick={() => setActiveFilter(subject)}
            className={`${cardBaseStyle} ${getSubjectsColor(subject).hover} px-4 py-2 rounded-full text-sm font-medium transition-all
              ${activeFilter === subject 
                // ? `${getSubjectsColor(subject).bg} text-white shadow-md`
                ? `bg-white ${getSubjectsColor(subject).text} shadow-md ${getSubjectsColor(subject).border}`
                : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-400'}`}
          >
            {subject}
          </button>
        ))}
      </div>

      {/* LA CARTE : Elle reçoit maintenant les besoins filtrés ! */}
      <section className="w-full">
        <MapWrapper needs={filteredNeeds} />
        <h2 className="text-sm text-gray-500 mt-2">
          Affichage de {filteredNeeds.length} besoin(s) sur la carte
        </h2>
      </section>

      {/* LA GRILLE DE CARTES */}
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${isMobile() ? `gap-6`: `gap-10`}`}>
        {filteredNeeds.map((need, index) => (
          <NeedCard key={need.id} need={need} numero={index} />
        ))}
      </div>

      {/* Message vide */}
      {filteredNeeds.length === 0 && (
        <div className="text-center py-20 bg-gray-50 rounded-xl border-2 border-dashed">
          <p className="text-gray-500 font-medium">Aucun poste disponible pour cette matière.</p>
        </div>
      )}
    </div>
  );
}