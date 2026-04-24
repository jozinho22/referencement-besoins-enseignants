export const getPriorityColor = (priority: string | undefined) => {
  switch (priority) {
    case 'Urgent': 
      return { text: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200', hex: 'red' };
    case 'High': 
      return { text: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200', hex: 'orange' };
    case 'Medium': 
      return { text: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-200', hex: 'yellow' };
    case 'Low': 
      return { text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200', hex: 'blue' };
    default: 
      return { text: 'text-slate-600', bg: 'bg-slate-50', border: 'border-slate-200', hex: 'blue' };
  }
};