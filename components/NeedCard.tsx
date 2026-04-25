import { TeacherNeed } from '@/types/TeacherNeed';
import { getPriorityColor, getSubjectsColor, isMobile } from '@/utils/utils';

export default function NeedCard({ need, numero }: {need: TeacherNeed, numero: number}) {

  // const colors = getPriorityColor(need.priority);
  const colors = getSubjectsColor(need.subject);

  return (
    <div className={`${isMobile() ? `p-3` : "p-4"} ${isMobile() ? `w-90vh` : ""} border rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white`}>
      <div className="text-m text-gray-600 mt-auto">Poste n°{numero}</div>
      <div className={`${isMobile() ? `p-2` : "p-3"} mr-auto ml-auto mt-2 mb-2 ${isMobile() ? `w-[90%]` : "w-[80%]"} rounded-xl border ${colors.border} ${colors.bg}`}>
        <span className={`text-xs ${colors.text} font-bold uppercase tracking-wider`}>
          {need.concours}
        </span>
        <div className="text-s font-bold text-slate-600 mt-1">{need.subject}</div>
      </div>
      {/* <h3 className="font-bold text-lg mb-2 text-slate-600">{need.title}</h3> */}
      <p className="text-sm text-slate-600 mb-4 line-clamp-2">{need.description}</p>
      {/* <div className="text-xs text-gray-400 mt-auto">
        Grade: {need.gradeLevel}
      </div> */}

      

      <div className={`flex flex-col wrap flex-start items-start ${isMobile() ? "gap-2" : "gap-4"}`}>
        
        <span className={`text-sm ${colors.text} font-semibold`}><u>Académie :</u> {need.location.academia}</span>
        <span className={`text-sm ${colors.text} font-semibold`}><u>Établissement :</u> {need.location.establishment}</span>
        {/* <span className={`${colors.bg} text-xs px-2 py-1 rounded ${colors.text}`}>
          {need.nbPostes} poste{need.nbPostes > 1 ? "s" : ""}
        </span> */}
        <div className="text-xs text-gray-500 mt-auto">
          N° poste au mouvement : {need.numeroPoste}
        </div> 

      </div>
      
    </div>
  );
}