import { TeacherNeed } from '@/types/TeacherNeed';
import { getPriorityColor } from '@/utils/colors';

interface NeedCardProps {
  need: TeacherNeed;
}

export default function NeedCard({ need }: NeedCardProps) {

  const colors = getPriorityColor(need.priority);

  return (
    <div className="p-5 border rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white">
      <div className={`p-4 m-4 rounded-xl border ${colors.border} ${colors.bg}`}>
        <span className={`text-xs font-bold uppercase tracking-wider ${colors.text}`}>
          {need.priority}
        </span>
        <h3 className="text-lg font-bold text-slate-900 mt-1">{need.subject}</h3>
      </div>
      <h3 className="font-bold text-lg mb-2 text-gray-800">{need.title}</h3>
      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{need.description}</p>
      <div className="text-xs text-gray-400 mt-auto">
        Grade: {need.gradeLevel}
      </div>

      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold text-blue-600"><u>Académie :</u> {need.academie}</span>
        <span className={`${colors.bg} text-xs px-2 py-1 rounded ${colors.text}`}>
          {need.nbPostes} postes
        </span>
      </div>
    </div>
  );
}