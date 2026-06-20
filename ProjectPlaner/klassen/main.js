
// main
import { projectTimeCalculator } from '../services/ProjectTimeCalculator.js';

import { sortProject } from '../services/SortProject.js';

import { Project } from './Project.js';
import { Artifact } from './Artifact.js';
import { TaskArea } from './TaskArea.js';
import { Project_TaskArea } from './ProjectTaskArea.js';
import { Project_Artifact } from './ProjectArtifact.js';


// Beispiele Klassen

// A
var projectA = new Project("Projekt 1", "Dies ist ein Beispielprojekt.", "logo.png", "2024-01-01");
// B
var projectB = new Project("Projekt 2", "Dies ist ein weiteres Beispielprojekt.", "logo2.png", "2024-02-01");
// C
var projectC = new Project("Projekt 3", "Dies ist ein drittes Beispielprojekt.", "logo3.png", "2024-03-01");

// Beispiele Artefakte
// A
var artifactA1 = new Artifact("Artefakt 1", "Dies ist ein Beispielartefakt.", "TaskAreaA", 12);
var artifactA2 = new Artifact("Artefakt 2", "Dies ist ein weiteres Beispielartefakt.", "TaskAreaB", 3);
// B 
var artifactB3 = new Artifact("Artefakt 3", "Dies ist ein drittes Beispielartefakt.", "TaskAreaC", 7); 
var artifactB4 = new Artifact("Artefakt 4", "Dies ist ein viertes Beispielartefakt.", "TaskAreaA", 15); 
// C
var artifactC5 = new Artifact("Artefakt 5", "Dies ist ein fünftes Beispielartefakt.", "TaskAreaB", 5);
var artifactC6 = new Artifact("Artefakt 6", "Dies ist ein sechstes Beispielartefakt.", "TaskAreaC", 8);

// Beispiele Aufgabenbereiche
// A
var TaskAreaA = new TaskArea("TaskArea A", "Dies ist der erste Aufgabenbereich.");
// B
var TaskAreaB = new TaskArea("TaskArea B", "Dies ist der zweite Aufgabenbereich.");
// C
var TaskAreaC = new TaskArea("TaskArea C", "Dies ist der dritte Aufgabenbereich.");



// Listen
var Projectliste = [projectA, projectB, projectC];

var Artifactliste = [artifactA1, artifactA2, artifactB3, artifactB4, artifactC5, artifactC6];

var TaskAreaListe = [TaskAreaA, TaskAreaB, TaskAreaC];


// Verbindungsobjekte  Projekt &  Aufgabenbereich
// A
var projectTaskAreaA = new Project_TaskArea(0, 0);
// B
var projectTaskAreaB = new Project_TaskArea(1, 1);
// C
var projectTaskAreaC = new Project_TaskArea(2, 2);

// Verbindungsobjekte Projekt & Artefakt
// constructor(projectId, artifact, arbeitszeit) {
// A
var projectArtifactA1 = new Project_Artifact(0, 0, artifactA1.arbeitszeit);
var projectArtifactA2 = new Project_Artifact(0, 1, artifactA2.arbeitszeit);
// B
var projectArtifactB3 = new Project_Artifact(1, 2, artifactB3.arbeitszeit);
var projectArtifactB4 = new Project_Artifact(1, 3, artifactB4.arbeitszeit);
// C
var projectArtifactC5 = new Project_Artifact(2, 4, artifactC5.arbeitszeit);
var projectArtifactC6 = new Project_Artifact(2, 5, artifactC6.arbeitszeit);


// Listen Verbindungen
var Projekt_Aufgabenbereich_Liste = [projectTaskAreaA, projectTaskAreaB, projectTaskAreaC];

var project_Artifact_Liste = [projectArtifactA1, projectArtifactA2, projectArtifactB3, projectArtifactB4, projectArtifactC5, projectArtifactC6];


var berechneteZeit = projectTimeCalculator(
    0,
    project_Artifact_Liste);

// 3. In der Konsole ausgeben
console.log(`Die gesamte Arbeitszeit für Projekt-ID 1 beträgt: ${berechneteZeit} Stunden.`);


berechneteZeit = projectTimeCalculator(
    1,
    project_Artifact_Liste);

// 3. In der Konsole ausgeben
console.log(`Die gesamte Arbeitszeit für Projekt-ID 2 beträgt: ${berechneteZeit} Stunden.`);


berechneteZeit = projectTimeCalculator(
    2,
    project_Artifact_Liste);

// 3. In der Konsole ausgeben
console.log(`Die gesamte Arbeitszeit für Projekt-ID 3 beträgt: ${berechneteZeit} Stunden.`);

    


// ==== sort project test ====

const sortierteProjekteNachZeit = sortProject(
    Projectliste,
    "Date",
    project_Artifact_Liste
);


console.log("Projekte sortiert nach Zeit:");


for (let i = 0; i < sortierteProjekteNachZeit.length; i++) {
    let aktuellesProjekt = sortierteProjekteNachZeit[i];

    let projektId = Projectliste.indexOf(aktuellesProjekt);

    let zeit = projectTimeCalculator(projektId, project_Artifact_Liste);

    console.log(`${aktuellesProjekt.Titel} - Gesamte Arbeitszeit: ${zeit} Stunden ${aktuellesProjekt.StartDate}`);
}


// ===== Json Fetch =====

// Json Projects
fetch('../Json/projects.json').then(                                // Datei fetchapi.json wurde gefunden 
    function (response) {                                           // dann gibt Funktion den Inhalt von response als json zurück
        console.log("Get response as json-Promise");
        return response.json();
    }
).then(                                                             // die Datei konnte erfolgreich in json umgewandelt werden
    function (jsonData) {  // rufe Funktion jsonData auf
        console.log("recieved data: " + jsonData);


        // objekte erstellen
        const projectInstances = jsonData.map(item => {
            return new Project(item.id, item.name, item.description, item.logo, item.startDate);
        });
        console.log(projectInstances);

    }
).catch(function (err) {
    console.log("Opps, Something went wrong!", err);
})
