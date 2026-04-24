import { TeacherNeed } from '@/types/need';

interface NeedCardProps {
  need: TeacherNeed;
}

export default function NeedCard({ need }: NeedCardProps) {
  // Petite logique pour la couleur de la priorité
  const priorityColors = {
    Low: 'bg-blue-100 text-blue-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    High: 'bg-orange-100 text-orange-800',
    Urgent: 'bg-red-100 text-red-800',
  };

  return (
    <div className="p-5 border rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white">
      <div className="flex justify-between items-start mb-3">
        <span className="text-xs font-semibold px-2 py-1 rounded bg-slate-100 text-slate-600">
          {need.subject}
        </span>
        <span className={`text-xs font-bold px-2 py-1 rounded ${priorityColors[need.priority]}`}>
          {need.priority}
        </span>
      </div>
      <h3 className="font-bold text-lg mb-2 text-gray-800">{need.title}</h3>
      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{need.description}</p>
      <div className="text-xs text-gray-400 mt-auto">
        Grade: {need.gradeLevel}
      </div>
    </div>
  );
}