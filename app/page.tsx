// src/app/page.tsx (PAS DE "use client" ICI)
import MapWrapper from '@/components/MapWrapper';
import NeedList from '@/components/NeedList'; // Si NeedList est un Client Component
import { TEACHER_NEEDS } from "@/data/teacher-needs";

export default async function Home() {
  // 1. Récupération des données côté serveur (très rapide)

  return (
    <main className="container mx-auto p-4 space-y-8">
      <h1 className="text-3xl font-bold">Portail des Besoins Enseignants</h1>
      <section>
        <NeedList />
      </section>
    </main>
  );
}