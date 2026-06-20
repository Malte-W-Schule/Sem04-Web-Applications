
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