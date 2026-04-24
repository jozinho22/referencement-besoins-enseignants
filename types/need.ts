// On exporte le type généré par Prisma comme étant LE type de référence
export interface TeacherNeed {
  id: string | number;
  subject: string;
  title: string;
  description: string;
  teacher: string;
  gradeLevel: string;
  priority: Priority;
  createdAt: Date;
  region?: string; // Optionnel, si tu l'ajoutes plus tard
}

export type Subject = 
  | 'Mathematics' 
  | 'French' 
  | 'History & Geography' 
  | 'Sciences' 
  | 'Arts' 
  | 'Languages' 
  | 'Physical Education';

export type Priority = 'Low' | 'Medium' | 'High' | 'Urgent';