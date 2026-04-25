export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-12 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          
          {/* Section Gauche : Logo & Copyright */}
          <div className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 tracking-tight">
              Observatoire Enseignants 2026
            </h2>
            <p className="text-sm text-slate-500">
              &copy; {currentYear} — Prototype pédagogique.
            </p>
          </div>

          {/* Section Droite : Crédits Légaux */}
          <div className="max-w-md">
            <h3 className="text-s font-semibold text-slate-400 uppercase tracking-widest mb-3">
              Crédits et Licences
            </h3>
            <ul className="text-xs text-slate-500 space-y-2 leading-relaxed">
              <li>
                <strong>Cartographie :</strong> Données © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">OpenStreetMap</a> contributors.
              </li>
              <li>
                <strong>Librairie :</strong> <a href="https://leafletjs.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Leaflet</a> (BSD 2-Clause). Copyright © 2010-2019 Vladimir Agafonkin, CloudMade.
              </li>
              <li>
                <strong>Icônes :</strong> <a href="https://github.com/pointhi/leaflet-color-markers" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Leaflet-color-markers</a> (BSD 2-Clause). Copyright © 2013-2020 Thomas Pointhuber.
              </li>
              <li>
                <strong>Données :</strong> Simulations basées sur les tendances de l'Éducation agricole.
              </li>
            </ul>
          </div>
        </div>

        {/* Note de bas de page */}
        <div className="mt-8 pt-6 border-t border-slate-200 text-[12px] text-slate-400 text-center">
          Ce site est un outil de visualisation de données à but éducatif et n'est pas affilié au Ministère de l'Agriculture.
          <br /> <br />Ce site est pour l'instant en test.
          <br /> <br /> <br /> <br /><strong>Créé par :</strong> Josselin DOUINEAU, professeur de mathématiques.
        </div>
      </div>
    </footer>
  );
}