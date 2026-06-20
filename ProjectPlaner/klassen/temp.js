
// date classen/werte getten
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

const day = String(yesterday.getDate()).padStart(2, '0');
const month = String(yesterday.getMonth() + 1).padStart(2, '0');


const year = yesterday.getFullYear();
const dateStr = `${year}-${month}-${day}`;

// tranlaate

projekt /
├── lang /
│   ├── de.js < --Nur deutsche Übersetzungen
│   └── en.js < --Nur englische Übersetzungen
├── services /
│   └── translate.js < --Logik zum Austauschen der Texte
└── main.js

export const de = {
    "menu": "Menü",
    "project": "Projekt",
    "description": "Kurzbeschreibung",
    "save_button": "Speichern" // Leicht zu erweitern!
};


export const en = {
    "menu": "Menu",
    "project": "Project",
    "description": "Short Description",
    "save_button": "Save"
};



const i18n = {
    de: {
        nav_menu: "Menü",
        proj_title: "Projekt",
        proj_desc: "Kurzbeschreibung"
    },
    en: {
        nav_menu: "Menu",
        proj_title: "Project",
        proj_desc: "Short Description"
    }
};


//
import { de } from '../lang/de.js';
import { en } from '../lang/en.js';

// Alle verfügbaren Sprachen in einer Map bündeln
const languages = new Map([
    ['de', de],
    ['en', en]
]);

// Standard-Sprache setzen
let currentLanguage = 'de';

// Funktion zum Wechseln der Sprache
export function setLanguage(langCode) {
    if (languages.has(langCode)) {
        currentLanguage = langCode;
        updatePageTexts(); // Stoßt das "Austauschen" auf der HTML-Seite an
    }
}

// Funktion, um einen bestimmten Begriff zu holen
export function t(key) {
    const currentDict = languages.get(currentLanguage);
    return currentDict[key] || key; // Fallback: Wenn Key nicht übersetzt, gib den Key selbst aus
}



// 

<h1 data-i18n="project">Projekt</h1>
<p data-i18n="description">Kurzbeschreibung</p>
JavaScript(updatePageTexts()):

function updatePageTexts() {
    // Suche alle HTML-Elemente, die ein "data-i18n" Attribut haben
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = t(key); // Nutzt die Übersetzungsfunktion von oben
    });
}




//    =======================



// Json Artefacts
fetch('https://scl.fh-bielefeld.de/WBA/artefacts.json').then(        // Datei fetchapi.json wurde gefunden 
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

    }
).catch(function (err) {
    console.log("Opps, Something went wrong!", err);
})

// Json task
fetch('https://scl.fh-bielefeld.de/WBA/artefacts.json').then(        // Datei fetchapi.json wurde gefunden 
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

    }
).catch(function (err) {
    console.log("Opps, Something went wrong!", err);
})




const data = [
    { "id": 1, "name": "Konzeption - P1", "shortdesc": "Konzeption des Projektmanagers", "project": 1 },
    { "id": 2, "name": "Implementierung - P1", "shortdesc": "Implementierung des Projektmanagers", "project": 1 },
    { "id": 3, "name": "Wartung - P1", "shortdesc": "Wartung des Projektmanagers", "project": 1 },
    { "id": 4, "name": "Konzeption - P2", "shortdesc": "Konzeption des Frühwarnsystems", "project": 2 },
    { "id": 5, "name": "Implementierung - P2", "shortdesc": "Implementierung des Frühwarnsystems", "project": 2 },
    { "id": 6, "name": "Wartung - P2", "shortdesc": "Wartung des Frühwarnsystems", "project": 2 },
    { "id": 7, "name": "Planung :|", "shortdesc": "Planung der Party", "project": 3 },
    { "id": 8, "name": "Durchführung :)", "shortdesc": "Durchführung der Party", "project": 3 },
    { "id": 9, "name": "Aufräumen :(", "shortdesc": "Das Aufträumen danach", "project": 3 }
];

// Instanziierung: Aus rohen Objekten echte Klassen-Instanzen machen
const taskInstances = data.map(item => {
    return new Task(item.id, item.name, item.shortdesc, item.project);
});



function postData(url, data) {
    // Default options are marked with *
    return fetch(url, {
        body: JSON.stringify(data),
        cache: 'no-cache‘,  
credentials: 'same-origin‘, 
// url zu der die Daten gesendet werden sollen
// welcher 'Content-Type‘ soll mitgeliefert werden-> 
// mitgesendete Daten in JSON-String umwandeln
// *default, no-cache, (reload, force-cache, only-if-cached)
// (include, *omit )-> Anfrage geht an den gleichen Server
headers: {
            'user-agent': 'Mozilla/4.0 MDN Example',
            'content-type': 'application/json'
        },
        method: 'POST‘,  
// Default: *GET, (PUT, DELETE, etc.) 
mode: 'cors‘,  
        // no-cors, *same-origin
    })
        .then(response => response.json()) // parst response zu JSON-Objekt
}





// ========================== test klassen und listen:


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



// Listen
var Projectliste = [projectA, projectB, projectC];

var Artifactliste = [artifactA1, artifactA2, artifactB3, artifactB4, artifactC5, artifactC6];

var TaskAreaListe = [TaskAreaA, TaskAreaB, TaskAreaC];





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
