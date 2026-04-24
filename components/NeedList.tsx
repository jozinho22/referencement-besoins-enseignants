"use client";
import { useState } from 'react';
import { TeacherNeed } from '@/types/need';
import NeedCard from './NeedCard';
import MapWrapper from './MapWrapper'; // Importe ton wrapper ici

export default function NeedList({ initialNeeds }: { initialNeeds: TeacherNeed[] }) {
  const [activeFilter, setActiveFilter] = useState('Tous');

  // 1. On calcule la liste filtrée UNE SEULE FOIS ici
  const filteredNeeds = activeFilter === 'Tous' 
    ? initialNeeds 
    : initialNeeds.filter(need => need.subject === activeFilter);

  const subjects = ['Tous', ...Array.from(new Set(initialNeeds.map(n => n.subject)))];

  return (
    <div className="space-y-8">
      {/* Barre de Filtres */}
      <div className="flex flex-wrap gap-2 pb-4 border-b">
        {subjects.map(subject => (
          <button style={{cursor: "pointer"}}
            key={subject}
            onClick={() => setActiveFilter(subject)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all
              ${activeFilter === subject 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-400'}`}
          >
            {subject}
          </button>
        ))}
      </div>

      {/* LA CARTE : Elle reçoit maintenant les besoins filtrés ! */}
      <section className="w-full">
        <MapWrapper needs={filteredNeeds} />
        <p className="text-sm text-gray-500 mt-2">
          Affichage de {filteredNeeds.length} besoin(s) sur la carte
        </p>
      </section>

      {/* LA GRILLE DE CARTES */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNeeds.map(need => (
          <NeedCard key={need.id} need={need} />
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