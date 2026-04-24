export async function getTeacherNeeds() {
  try {
    // On utilise un chemin relatif. Next.js saura quoi faire.
    const response = await fetch('/api/teacher-needs');
    if (!response.ok) throw new Error('Erreur de chargement');
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}