import { TeacherNeed } from '@/types/TeacherNeed';
import { getPriorityColor } from '@/utils/colors';


export default function NeedCard({ need }: {need: TeacherNeed}) {

  const colors = getPriorityColor(need.priority);

  return (
    <div className="p-5 border rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white">
      <div className={`p-4 m-2 rounded-xl border ${colors.border} ${colors.bg}`}>
        <span className={`text-xs font-bold uppercase tracking-wider ${colors.text}`}>
          {need.priority}
        </span>
        <h3 className="text-lg font-bold text-slate-600 mt-1">{need.subject}</h3>
      </div>
      <h3 className="font-bold text-lg mb-2 text-slate-600">{need.title}</h3>
      <p className="text-sm text-slate-600 mb-4 line-clamp-2">{need.description}</p>
      <div className="text-xs text-gray-400 mt-auto">
        Grade: {need.gradeLevel}
      </div>

      <div className="flex justify-between items-center">
        <div className="flex flex-col wrap flex-start items-start gap-4">
          <span className="text-sm font-semibold text-blue-600"><u>Académie :</u> {need.location.academia}</span>
          {need.location.academia !== need.location.establishment ? 
            <span className="text-sm font-semibold text-orange-600"><u>Établissement :</u> {need.location.establishment}</span>
            : ""
          }
        </div>
        
        {/* <span className={`${colors.bg} text-xs px-2 py-1 rounded ${colors.text}`}>
          {need.nbPostes} poste{need.nbPostes > 1 ? "s" : ""}
        </span> */}
      </div>
    </div>
  );
}