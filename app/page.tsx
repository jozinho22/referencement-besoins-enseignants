// src/app/page.tsx (PAS DE "use client" ICI)
import MapWrapper from '@/components/MapWrapper';
import NeedList from '@/components/NeedList'; // Si NeedList est un Client Component
import { getTeacherNeeds } from '@/services/api';

export default async function Home() {
  // 1. Récupération des données côté serveur (très rapide)
  const needs = await getTeacherNeeds();

  return (
    <main className="container mx-auto p-4 space-y-8">
      <h1 className="text-3xl font-bold">Portail des Besoins Enseignants</h1>
      <section>
        <NeedList initialNeeds={needs} />
      </section>
    </main>
  );
}