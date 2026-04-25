export interface TeacherNeed {
  id: string | number;
  numeroPoste?: number;
  subject: string;
  location: Location;
  grandeCategorie?: string;
  title?: string;
  quotite?: string;
  description?: string;
  gradeLevel?: string;
  priority?: Priority;
  nbPostes?: number;
  concours?: string;
  createdAt: string;
}

// export type Subject = 
//   | 'Mathematics' 
//   | 'French' 
//   | 'History & Geography' 
//   | 'Sciences' 
//   | 'Arts' 
//   | 'Languages' 
//   | 'Physical Education';

export type Priority = 'Low' | 'Medium' | 'High' | 'Urgent' | '';

export interface Location {
  establishment: string;
  academia?: string;
  lat: number;
  lng: number;
}