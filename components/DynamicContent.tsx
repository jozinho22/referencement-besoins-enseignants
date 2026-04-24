"use client"; // <--- Important : ce fichier est un Client Component

import dynamic from 'next/dynamic';

// On déplace le chargement dynamique ici
export const DynamicContent = dynamic(() => import('./Content'), { 
  ssr: false,
  loading: () => <div className="p-10 text-center bg-slate-50 rounded-xl">Chargement de la carte et des données...</div>
});