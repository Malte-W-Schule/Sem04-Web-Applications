
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