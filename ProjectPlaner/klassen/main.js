
/*
let url = 'https://scl.fh-bielefeld.de/WBA/projectsAPI';
let workingUlr = 'https://postman-echo.com/post';

//url = workingUlr;                                                                                                      /// <======== einkommentieren für 200 accept

let simulate = false;

// == local cache holen und erneut versuchen ==
const queue = JSON.parse(localStorage.getItem('offlineQueue')) || [];
if (queue.length > 0) {
    // alte liste removen, damit objekte "neu" hinzugefügt werden können
    localStorage.removeItem('offlineQueue');

    // elemente durchlaufen, erneut "uploaden"
    if (simulate) {
        queue.forEach(item => {
            postData_simulate(url, item).catch(err => {
                console.log("Queued item failed (CORS/Offline). Re-adding to queue.", err);
                const currentQueue = JSON.parse(localStorage.getItem('offlineQueue')) || [];
                currentQueue.push(item);
                localStorage.setItem('offlineQueue', JSON.stringify(currentQueue));
            });
        });
    } else {
        queue.forEach(item => {
            postData(url, item).catch(err => {
                console.log("Queued item failed (CORS/Offline). Re-adding to queue.", err);
                const currentQueue = JSON.parse(localStorage.getItem('offlineQueue')) || [];
                currentQueue.push(item);
                localStorage.setItem('offlineQueue', JSON.stringify(currentQueue));
            });
        });
    }
}
// == local storage end ==

// main
import { projectTimeCalculator } from '../services/ProjectTimeCalculator.js';
import { sortProject } from '../services/SortProject.js';
import { Project } from './Project.js';
import { Artifact } from './Artifact.js';
import { TaskArea } from './TaskArea.js';
import { Project_TaskArea } from './ProjectTaskArea.js';
import { Project_Artifact } from './ProjectArtifact.js';

// === Json Fetch ===
// === Listen ===
let projectMap = new Map();
let artifactMap = new Map();
let taskAreaMap = new Map();
let projectTaskAreaMap = new Map();
let projectArtifactMap = new Map();

// === FETCH API ===

// === Json Projects
fetch('./JSON/projects.json').then( 
    function (response) {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        console.log("Get response as json-Promise Json project");
        return response.json();
    }
).then(
    function (jsonData) {
        console.log("recieved data: ", jsonData);
        jsonData.forEach(item => {
            const newProject = new Project(item.name, item.shortdesc, item.shortdesc, item.logourl, item.start);
            projectMap.set(item.id, newProject);
        });
        console.log("Project Map erfolgreich befüllt:", projectMap);
    }
).catch(function (err) {
    console.log("Oops, Something went wrong with Projects!", err.message);
});
// == end Json Projects ==

// === Json Task ===
fetch('./JSON/tasks.json').then( // Pfad angepasst
    function (response) {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        console.log("Get response as json-Promise json task");
        return response.json();
    }
).then(
    function (jsonData) {
        console.log("recieved data: ", jsonData);
        jsonData.forEach(item => {
            const newProject = new TaskArea(item.name, item.shortdesc);
            taskAreaMap.set(item.id, newProject);

            let ProjectTaskArea = new Project_TaskArea(item.project, item.id);
            projectTaskAreaMap.set(item.id, ProjectTaskArea);
        });
        console.log("TaskArea Map erfolgreich befüllt:", taskAreaMap);
        console.log("ProjektTaskAreaMap erfolgreich befüllt:", projectTaskAreaMap);
    }
).catch(function (err) {
    console.log("Oops, Something went wrong with Tasks!", err.message);
});
// == end Json Task ==

// === Json Artifact ===
fetch('./JSON/artefacts.json').then( // Pfad angepasst
    function (response) {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        console.log("Get response as json-Promise json artifact");
        return response.json();
    }
).then(
    function (jsonData) {
        console.log("recieved data: ", jsonData);
        jsonData.forEach(item => {
            const newProject = new Artifact(item.name, item.shortdesc, item.taskid, item.realtime);
            artifactMap.set(item.id, newProject);

            let project_taskarea = projectTaskAreaMap.get(item.taskid);
            let projectID = project_taskarea.projektId;

            let projectArtifact = new Project_Artifact(projectID, item.id, item.realtime);
            projectArtifactMap.set(item.id, projectArtifact);
        });
        console.log("Artifact Map erfolgreich befüllt:", artifactMap);
        console.log("ProjectArtifactMap erfolgreich befüllt:", projectArtifactMap);
    }
).catch(function (err) {
    console.log("Oops, Something went wrong with Artifacts!", err.message);
});
// == end Json ARtifact ==


// === POST API ===
let data = [
    new Project("titel", "kurzbeschreibung", "logoPath", new Date()),
    new TaskArea("titel", "kurzbeschreibung"),
    new Artifact("titel", "kurzbeschreibung", "C_TaskArea", "arbeitszeit")
];

function postData(url, data) {
    return fetch(url, {
        body: JSON.stringify(data),                                                                                          /// <======== body unnöig/blöd wenn method get
        cache: 'no-cache',
        //credentials: 'same-origin',
        headers: {
        },
        method: 'POST',                                                                                                     /// <======== zu post für 200 accept
        mode: 'cors',
    }).then(response => {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
    });
}

function postData_simulate(url, data) {
    console.log("Sende Daten (simuliert)...", data);

    // zurückgeben eines Promise Objektes simulieren, 
    return new Promise((resolve) => {
        // Timeout um Ladezeiten zu simulieren
        setTimeout(() => {
            resolve({
                status: 200,
                message: "Queue wird geleert.",
                dataReceived: data
            });
        }, 500);
    });
}

window.onload = function () {
    if (simulate) {
        postData_simulate(url, data).then(
            function (responseData) {
                console.log(responseData);
            }
        ).catch(error => {
            console.log("Daten nicht gesendet. Speichere im LocalStorage...", error.message);

            const offlineQueue = JSON.parse(window.localStorage.getItem('offlineQueue')) || [];
            offlineQueue.push(data);
            console.log("Current Offline Queue:", offlineQueue);
            window.localStorage.setItem('offlineQueue', JSON.stringify(offlineQueue));
        });
    } else {
        postData(url, data).then(
            function (responseData) {
                console.log(responseData);
            }
        ).catch(error => {
            console.log("Daten nicht gesendet. Speichere im LocalStorage...", error.message);

            const offlineQueue = JSON.parse(window.localStorage.getItem('offlineQueue')) || [];
            offlineQueue.push(data);
            console.log("Current Offline Queue:", offlineQueue);
            window.localStorage.setItem('offlineQueue', JSON.stringify(offlineQueue));
        });
    }
}
*/

// 1. Die Ziel-URL definieren
const url = 'http://localhost:8080/SmartDataLyser/smartdatalyser/statistic/minmaxspan?smartdataurl=http%3A%2F%2Flocalhost%3A8080%2FSmartData&collection=artifact&storage=public&column=arbeitszeit';

// 2. Die GET-Anfrage mit fetch senden
fetch(url)
    .then(response => {
        // Prüfen, ob der Server erfolgreich geantwortet hat (Status 200-299)
        if (!response.ok) {
            throw new Error(`HTTP-Fehler! Status: ${response.status}`);
        }
        // Die Antwort als JSON parsen
        return response.json();
    })
    .then(data => {
        // 3. Ergebnisse übersichtlich in der Konsole ausgeben
        console.log('--- API Ergebnis ---');
        console.log('Min:', data.min);
        console.log('Max:', data.max);
        console.log('Span:', data.span);
        
        // Optional: Das gesamte Objekt anzeigen, falls die Keys anders heißen
        // console.log('Komplettes Datenobjekt:', data);
    })
    .catch(error => {
        // Fehlerbehandlung, falls der Server offline ist oder ein Fehler auftritt
        console.error('Fehler beim Abrufen der Daten:', error);
    });