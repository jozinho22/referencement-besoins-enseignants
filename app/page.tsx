// src/app/page.tsx
import { DynamicContent } from '@/components/DynamicContent';

export default function Home() {
  return (
    <main className="container mx-auto p-4 space-y-8">
      <h1 className="text-2xl font-bold">Portail des Besoins Enseignants</h1>
      <section>
        {/* On appelle le pont qui gère le ssr: false proprement */}
        <DynamicContent />
      </section>
    </main>
  );
}