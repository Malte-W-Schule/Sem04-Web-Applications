// 1. Beide URLs definieren
const statsUrl = 'http://localhost:8080/SmartDataLyser/smartdatalyser/statistic/minmaxspan?smartdataurl=http%3A%2F%2Flocalhost%3A8080%2FSmartData&collection=artifact&storage=public&column=arbeitszeit';
const projectUrl = 'http://localhost:8080/SmartData/smartdata/records/project';

// Globaler Zustand (falls für andere Programmteile benötigt)
var min = 0, max = 0, span = 0;
let projectMap = new Map();

// 2. Beide Fetches parallel starten und abwarten
Promise.all([
    fetch(statsUrl).then(res => {
        if (!res.ok) throw new Error(`Stats-Fehler: ${res.status}`);
        return res.json();
    }),
    fetch(projectUrl).then(res => {
        if (!res.ok) throw new Error(`Projects-Fehler: ${res.status}`);
        return res.json();
    })
])
    .then(([statsData, projectJson]) => {
        // Erst jetzt haben wir GARANTIERT alle Daten!

        // Statistiken zuweisen
        min = statsData.min;
        max = statsData.max;
        span = statsData.span;
        console.log('--- API Ergebnis Statistiken eingetroffen ---', { min, max, span });

        // Projekte verarbeiten
        console.log("recieved project data: ", projectJson);
        projectJson.records.forEach(item => {

            // Vorsicht bei: new Date(undefined) -> das erzeugt ein "Invalid Date" Objekt!
            // Besser: Erst prüfen ob vorhanden, sonst Fallback-String parsen
            const projectDate = item.start_date ? new Date(item.start_date) : new Date("2024-07-01");

            const newProject = new Project(
                item.titel ?? "Unbenanntes Projekt",
                item.kurzbeschreibung ?? "Keine Beschreibung vorhanden.",
                item.logo_path ?? "kein logo path vorhanden",
                projectDate,
                min,
                max,
                span,
                item.arbeitszeit ?? 0
            );
            projectMap.set(item.id, newProject);
        });

        console.log("Project Map erfolgreich befüllt:", projectMap);
    })
    .catch(err => {
        console.error("Etwas ist beim Laden fehlgeschlagen:", err.message);
    });