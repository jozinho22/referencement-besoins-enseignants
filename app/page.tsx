import { getTeacherNeeds } from '@/services/api';
import NeedList from '@/components/NeedList';

export default async function Home() {
  // On récupère les données sur le serveur
  const needs = await getTeacherNeeds();

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Plateforme des Besoins Enseignants
          </h1>
          <p className="text-gray-600 mt-2">
            Consultez et filtrez les demandes par matière.
          </p>
        </header>
        <NeedList />
      </div>
    </main>
  );
}