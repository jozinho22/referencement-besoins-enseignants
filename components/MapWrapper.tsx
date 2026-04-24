"use client";

import dynamic from 'next/dynamic';

// On importe le vrai composant de la carte seulement côté client
const NeedMap = dynamic(() => import('./NeedMap'), { 
  ssr: false,
  loading: () => <div className="h-[500px] w-full bg-slate-100 animate-pulse rounded-2xl" />
});

export default function MapWrapper({ needs }: { needs: any[] }) {
  return <NeedMap needs={needs} />;
}