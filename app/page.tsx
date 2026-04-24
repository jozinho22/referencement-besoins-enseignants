"use client";

import { useState } from 'react'; // On importe le hook pour gérer l'état
import NeedCard from '@/components/NeedCard';
import { TeacherNeed, Subject } from '@/types/need';

// Nos données de test (Mock Data)
const MOCK_NEEDS: TeacherNeed[] = [
  {
    id: '1',
    subject: 'Mathematics',
    title: 'Scientific Calculators',
    description: 'Looking for 10 Casio calculators for my 9th grade class. Many students cannot afford their own this year.',
    gradeLevel: '9th Grade',
    createdAt: '2024-05-20',
    priority: 'Medium',
  },
  {
    id: '2',
    subject: 'French',
    title: 'Classic Literature Set',
    description: 'Need 30 copies of "The Miser" by Molière for our upcoming theater project.',
    gradeLevel: '8th Grade',
    createdAt: '2024-05-21',
    priority: 'Urgent',
  },
  {
    id: '3',
    subject: 'Sciences',
    title: 'Microscope Slides',
    description: 'Prepared slides for biology lessons, specifically plant and animal cell structures.',
    gradeLevel: '10th Grade',
    createdAt: '2024-05-22',
    priority: 'Low',
  }
];

const SUBJECTS: (Subject | 'All')[] = ['Mathematics', 'French', 'History & Geography', 'Sciences', 'Arts', 'Languages', 'Physical Education'];

export default function Home() {

  const [selectedSubject, setSelectedSubject] = useState<Subject | 'All'>('All');
  // On filtre les besoins en fonction de la matière sélectionnée
  const filteredNeeds = selectedSubject === 'All' 
    ? MOCK_NEEDS 
    : MOCK_NEEDS.filter(need => need.subject === selectedSubject);

  return (
    <main className="min-h-screen p-8 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold mb-2 text-blue-600">Teacher Needs</h1>
          <p className="text-gray-500">Find and support classroom requirements.</p>
        </header>
        
        {/* 3. La barre de filtres */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {/* Bouton "All" spécial */}
          <button
            onClick={() => setSelectedSubject('All')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all
              ${selectedSubject === 'All' 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-white text-gray-600 hover:bg-gray-100 border'}`}
          >
            All
          </button>

          {/* Boutons pour chaque matière issue de ton SUBJECTS_LIST */}
          {SUBJECTS.map((subject) => (
            <button
              key={subject}
              onClick={() => {
                console.log("Subject clicked:", subject); // Petit log pour débugger
                setSelectedSubject(subject);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                ${selectedSubject === subject 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border'}`}
            >
              {subject}
            </button>
          ))}
        </div>

        {/* 4. La Grille d'affichage des besoins filtrés */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNeeds.map((need) => (
            <NeedCard key={need.id} need={need} />
          ))}
        </div>

        {/* Message si aucun besoin ne correspond */}
        {filteredNeeds.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            No needs listed for this subject yet.
          </div>
        )}
      </div>
    </main>
  );
}