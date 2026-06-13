

import { projectTimeCalculator } from '../services/ProjectTimeCalculator.js';


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
var artifactA1 = new Artifact("Artefakt 1", "Dies ist ein Beispielartefakt.", "TaskAreaA", 5);
var artifactA2 = new Artifact("Artefakt 2", "Dies ist ein weiteres Beispielartefakt.", "TaskAreaB", 8);
// B
var artefactB3 = new Artifact("Artefakt 3", "Dies ist ein drittes Beispielartefakt.", "TaskAreaC", 12);
var artifactB4 = new Artifact("Artefakt 4", "Dies ist ein viertes Beispielartefakt.", "TaskAreaA", 3);
// C
var artefactC5 = new Artifact("Artefakt 5", "Dies ist ein fünftes Beispielartefakt.", "TaskAreaB", 7);
var artefactC6 = new Artifact("Artefakt 6", "Dies ist ein sechstes Beispielartefakt.", "TaskAreaC", 15);

// Beispiele Aufgabenbereiche
// A
var TaskAreaA = new TaskArea("TaskArea A", "Dies ist der erste Aufgabenbereich.");
// B
var TaskAreaB = new TaskArea("TaskArea B", "Dies ist der zweite Aufgabenbereich.");
// C
var TaskAreaC = new TaskArea("TaskArea C", "Dies ist der dritte Aufgabenbereich.");



// Listen
var Projectliste = [projectA, projectB, projectC];

var Artifactliste = [artifactA1, artifactA2, artefactB3, artifactB4, artefactC5, artefactC6];

var TaskAreaListe = [TaskAreaA, TaskAreaB, TaskAreaC];


// Verbindungsobjekte  Projekt &  Aufgabenbereich
// A
var projectTaskAreaA = new Project_TaskArea(0, 0);
// B
var projectTaskAreaB = new Project_TaskArea(1, 1);
// C
var projectTaskAreaC = new Project_TaskArea(2, 2);

// Verbindungsobjekte Projekt & Artefakt
// A
var projectArtifactA1 = new Project_Artifact(0, 0, 5);
var projectArtifactA2 = new Project_Artifact(0, 1, 8);
// B
var projectArtifactB3 = new Project_Artifact(1, 2, 12);
var projectArtifactB4 = new Project_Artifact(1, 3, 3);
// C
var projectArtifactC5 = new Project_Artifact(2, 4, 7);
var projectArtifactC6 = new Project_Artifact(2, 5, 15);


// Listen Verbindungen
var Projekt_Aufgabenbereich_Liste = [projectTaskAreaA, projectTaskAreaB, projectTaskAreaC];

var project_Artifact_Liste = [projectArtifactA1, projectArtifactA2, projectArtifactB3, projectArtifactB4, projectArtifactC5, projectArtifactC6];



const projektIdFuerSuche = 1;

const berechneteZeit = projectTimeCalculator(projektIdFuerSuche, project_Artifact_Liste);

// 3. In der Konsole ausgeben
console.log(`Die gesamte Arbeitszeit für Projekt-ID ${projektIdFuerSuche} beträgt: ${berechneteZeit} Stunden.`);

