export interface Location {
  name: string;
  lat: number;
  lng: number;
}

// On exporte le type généré par Prisma comme étant LE type de référence
export interface TeacherNeed {
  id: string | number;
  subject: string;
  title: string;
  nbPostes: number;
  academie: string;
  description: string;
  teacher: string;
  gradeLevel: string;
  priority: Priority;
  location: Location;
  createdAt: Date;
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