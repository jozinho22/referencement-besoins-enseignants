export type Subject = 
  | 'Mathematics' 
  | 'French' 
  | 'History & Geography' 
  | 'Sciences' 
  | 'Arts' 
  | 'Languages' 
  | 'Physical Education';

export type Priority = 'Low' | 'Medium' | 'High' | 'Urgent';

export interface TeacherNeed {
  id: string;
  subject: Subject;
  title: string;
  description: string;
  gradeLevel: string; // e.g., "Middle School", "10th Grade"
  createdAt: string;
  priority: Priority;
}