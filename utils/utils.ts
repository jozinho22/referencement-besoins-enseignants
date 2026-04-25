export const getPriorityColor = (priority: string | undefined) => {
  switch (priority) {
    case 'Urgent': 
      return { text: "text-red-600", bg: "bg-white-2", border: "border-red-600", hex: "red" };
    case 'High': 
      return { text: "text-orange-600", bg: "bg-white-2", border: "border-orange-600", hex: "orange" };
    case 'Medium': 
      return { text: "text-yellow-600", bg: "bg-white-2", border: "border-yellow-600", hex: "yellow" };
    case 'Low': 
      return { text: "text-blue-600", bg: "bg-white-2", border: "border-blue-600", hex: "blue" };
    default: 
      return { text: "text-zinc-600", bg: "bg-white-2", border: "border-zinc-600", hex: "zinc" };
  }
};

export const getSubjectsColor = (subject: string | undefined) => {
  switch (subject) {
    case 'Mathématiques': 
      return { text: "text-blue-600", hover: "hover:text-blue-600 hover:border-blue-600", bg: "bg-white-2", border: "border-blue-600", hex: "blue" };
    case 'Mathématiques Physique-Chimie': 
      return { text: "text-orange-600", hover: "hover:text-orange-600 hover:border-orange-600", bg: "bg-white-2", border: "border-orange-600", hex: "orange" };
    case 'Physique-Chimie': 
      return { text: "text-violet-600", hover: "hover:text-violet-600 hover:border-violet-600", bg: "bg-violet-2", border: "border-violet-600", hex: "violet" };
    default: 
      return { text: "text-zinc-600", hover: "hover:text-zinc-600 hover:border-zinc-600", bg: "bg-white-2", border: "border-zinc-600", hex: "zinc" };
  }
};

const buildColorObject = (color: string) => {
  console.log(color)
  return { text: `text-${color}-600`, bg: `bg-white-2`, border: `border-${color}-600`, hex: `${color}` };
}

// const capitalize = (str: string) => str ? str.charAt(0).toUpperCase() + str.slice(1) : "";

const tailwindColors = [
  // Gris (différentes températures)
  { name: 'slate', label: 'Ardoise (Bleuté)', type: 'neutral' },
  { name: 'gray', label: 'Gris Neutre', type: 'neutral' },
  { name: 'zinc', label: 'Zinc (Métal)', type: 'neutral' },
  { name: 'neutral', label: 'Neutre Absolu', type: 'neutral' },
  { name: 'stone', label: 'Pierre (Chaud)', type: 'neutral' },

  // Couleurs Chaudes
  { name: 'red', label: 'Rouge', type: 'chromatic' },
  { name: 'orange', label: 'Orange', type: 'chromatic' },
  { name: 'amber', label: 'Ambre', type: 'chromatic' },
  { name: 'yellow', label: 'Jaune', type: 'chromatic' },

  // Verts / Nature
  { name: 'lime', label: 'Citron Vert', type: 'chromatic' },
  { name: 'green', label: 'Vert', type: 'chromatic' },
  { name: 'emerald', label: 'Émeraude', type: 'chromatic' },
  { name: 'teal', label: 'Sarcelle', type: 'chromatic' },

  // Bleus
  { name: 'cyan', label: 'Cyan', type: 'chromatic' },
  { name: 'sky', label: 'Bleu Ciel', type: 'chromatic' },
  { name: 'blue', label: 'Bleu', type: 'chromatic' },
  { name: 'indigo', label: 'Indigo', type: 'chromatic' },

  // Violets / Roses
  { name: 'violet', label: 'Violet', type: 'chromatic' },
  { name: 'purple', label: 'Pourpre', type: 'chromatic' },
  { name: 'fuchsia', label: 'Fuchsia', type: 'chromatic' },
  { name: 'pink', label: 'Rose', type: 'chromatic' },
  { name: 'rose', label: 'Rose Foncé', type: 'chromatic' }
];

type LeafletColorMarkers = 'Green' | 'Orange' | 'Yellow' | 'Violet' | 'Grey' | 'Black';

// Exemple de liste simple des noms uniquement
const colorNames = tailwindColors.map(c => c.name);

// Exemple de liste des nuances (shades) habituelles
const colorShades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

export const isMobile = () => document.body.offsetWidth < 450;


