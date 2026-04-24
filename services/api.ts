import rawData from '@/data/teacher-needs.json';
import { TeacherNeed, Priority, Location } from '@/types/need';

export async function getTeacherNeeds(): Promise<TeacherNeed[]> {
  return rawData.map((item) => ({
    ...item,
    id: String(item.id), // On s'assure que l'ID est bien une string
    createdAt: new Date(item.createdAt),
    priority: item.priority as Priority,
    location: item.location as Location
  }));
}