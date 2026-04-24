"use client";

import { useState, useEffect } from 'react';
import { TeacherNeed, Subject } from '@/types/need';
import { getTeacherNeeds } from '@/services/api';
import NeedCard from './NeedCard';

export default function NeedList() {
  // 1. États pour les données et le filtre
  const [needs, setNeeds] = useState<TeacherNeed[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<Subject | 'All'>('All');
  const [isLoading, setIsLoading] = useState(true);

  // 2. Chargement des données au montage du composant
  useEffect(() => {
    async function loadData() {
      const data = await getTeacherNeeds();
      setNeeds(data);
      setIsLoading(false);
    }
    loadData();
  }, []); // [] signifie : s'exécute une seule fois au chargement

  // 3. Logique de filtrage basée sur les besoins récupérés
  const filteredNeeds = selectedSubject === 'All' 
    ? needs 
    : needs.filter(need => need.subject === selectedSubject);

  // 4. Extraction des matières uniques pour les boutons de filtre
  const availableSubjects = Array.from(new Set(needs.map(n => n.subject)));

  if (isLoading) return <p className="text-center py-10">Chargement des données nationales...</p>;

  return (
    <section>
      {/* --- BARRE DE FILTRES --- */}
      <div className="flex flex-wrap gap-3 mb-10">
        <button
          onClick={() => setSelectedSubject('All')}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer border
            ${selectedSubject === 'All' 
              ? 'bg-blue-600 text-white border-blue-600 shadow-md' 
              : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-300'}`}
        >
          Tous
        </button>

        {availableSubjects.map((subject) => (
          <button
            key={subject}
            onClick={() => setSelectedSubject(subject as Subject)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer border
              ${selectedSubject === subject 
                ? 'bg-blue-600 text-white border-blue-600 shadow-md' 
                : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-300'}`}
          >
            {subject}
          </button>
        ))}
      </div>

      {/* --- GRILLE DE RÉSULTATS --- */}
      {filteredNeeds.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNeeds.map((need) => (
            <NeedCard key={need.id} need={need} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-xl border-2 border-dashed border-gray-200">
          <p className="text-gray-500">Aucun besoin trouvé pour cette matière.</p>
        </div>
      )}
    </section>
  );
}