const fs = require('fs');
const pdf = require('pdf-parse');

const path = require("path");

const PDF_PATH = path.join(__dirname, "2026-109_final.pdf");

async function extractData() {
    if (!fs.existsSync(PDF_PATH)) {
        console.error(`Le fichier ${PDF_PATH} est introuvable.`);
        return;
    }

    const dataBuffer = fs.readFileSync(PDF_PATH);
    
    try {
        // Utilisation de pdf-parse (on s'assure d'appeler la fonction correctement)
        const data = await pdf(dataBuffer);
        const lines = data.text.split('\n');
        
        let results = [];
        let currentGrandeCategorie = "";
        let currentSubject = "";
        let currentConcours = "";
        let currentAcademia = "";
        let globalId = 1;

        console.log("Analyse en cours...");

        for (let i = 0; i < lines.length; i++) {
            let line = lines[i].trim();
            if (!line) continue;

            // 1. Détection de la Grande Catégorie (Ex: SCIENTIFIQUES)
            // On cherche des mots clés en début de bloc
            if (line.match(/^(SCIENTIFIQUES|LITTERAIRES|ECONOMIE|TECHNIQUES|SITES ET PAYSAGES|SERVICES|SPORT)/i)) {
                currentGrandeCategorie = line;
            }

            // 2. Détection Matière / Type de concours
            // Structure type : "Mathématiques / Professeurs certifiés..."
            if (line.includes('/') && (line.toLowerCase().includes('professeurs') || line.includes('PCEA') || line.includes('PLPA'))) {
                const parts = line.split('/');
                currentSubject = parts[0].trim();
                
                // Extraction de l'acronyme
                const concoursBrut = parts[1].trim();
                if (concoursBrut.includes("agrégés")) currentConcours = "PAEN";
                else if (concoursBrut.includes("certifiés")) currentConcours = "PCEA";
                else if (concoursBrut.includes("lycée professionnel")) currentConcours = "PLPA";
                else currentConcours = concoursBrut;
            }

            // 3. Détection d'une ligne de poste (Regex pour trouver le numéro de poste à 4-5 chiffres suivi de V ou SV)
            // Format : [Region/Etablissement] [Numero] [V/SV] [Description]
            const posteMatch = line.match(/(.*?)\s+(\d{4,5})\s+(V|SV)\b(.*)/);
            
            if (posteMatch) {
                const establishmentPart = posteMatch[1].trim();
                const numPoste = posteMatch[2];
                const statut = posteMatch[3];
                const description = posteMatch[4].trim();

                // Filtrage : Uniquement les postes Vacants (V)
                if (statut === 'V') {
                    
                    // Gestion de la région (Academia)
                    // Si la ligne contient un nom de région connu, on met à jour
                    const regions = ["Occitanie", "Nouvelle Aquitaine", "Auvergne-Rhône-Alpes", "Bretagne", "Grand Est", "Hauts-de-France", "Ile-de-France", "Normandie", "Pays de la Loire", "Provence Alpes Côte d'Azur", "Centre-Val de Loire", "Bourgogne-Franche-Comté", "Corse", "Guadeloupe", "Guyane", "Martinique", "Mayotte", "La Réunion"];
                    
                    for (let reg of regions) {
                        if (establishmentPart.startsWith(reg)) {
                            currentAcademia = reg;
                            break;
                        }
                    }

                    results.push({
                        id: globalId++,
                        numeroPoste: parseInt(numPoste),
                        subject: currentSubject || "Non spécifié",
                        location: {
                            establishment: establishmentPart,
                            academia: currentAcademia || "A déterminer",
                            lat: 0, // Remplissage manuel ou via API plus tard
                            lng: 0
                        },
                        grandeCategorie: currentGrandeCategorie || "Non spécifiée",
                        quotite: "100",
                        priority: "High",
                        concours: currentConcours || "Non spécifié",
                        description: description,
                        createdAt: "2026-02-25T00:00:00Z"
                    });
                }
            }
        }

        fs.writeFileSync('postes_vacants.json', JSON.stringify(results, null, 2));
        console.log(`Succès ! ${results.length} postes 'V' extraits dans postes_vacants.json`);

    } catch (error) {
        console.error("Erreur lors de l'extraction :", error);
    }
}

extractData();