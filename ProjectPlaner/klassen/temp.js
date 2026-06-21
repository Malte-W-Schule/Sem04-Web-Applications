
let url = 'https://scl.fh-bielefeld.de/WBA/projectsAPI';

// == local chach holen und erneut versuchen ==
const queue = JSON.parse(localStorage.getItem('offlineQueue')) || [];

if (queue.length > 0) {
    // alte liste removen, damit objekte "neu" hinzugefügt werden können
    localStorage.removeItem('offlineQueue');

    // hinzufügen ; wenn seite noch offline, werden in sie in postdata einfach local wieder hinzugefügt
    queue.forEach(item => postData(url, item.data));
}
// == local sorage end ==


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

fetch('../JSON/projects.json').then(                                // Datei fetchapi.json wurde gefunden 
    function (response) {                                           // dann gibt Funktion den Inhalt von response als json zurück
        console.log("Get response as json-Promise");
        return response.json();
    }
).then(                                                             // die Datei konnte erfolgreich in json umgewandelt werden
    function (jsonData) {                                           // rufe Funktion jsonData auf
        console.log("recieved data: " + jsonData);

        // for each json object
        jsonData.forEach(item => {
            // neues Object
            const newProject = new Project(item.name, item.shortdesc, item.shortdesc, item.logourl, item.start);
            projectMap.set(item.id, newProject);
        });

        console.log("Project Map erfolgreich befüllt:", projectMap);
    }
).catch(function (err) {
    console.log("Opps, Something went wrong!", err);
})
// == end Json Projects ==


// === Json Task ===

fetch('../JSON/tasks.json').then(                                // Datei fetchapi.json wurde gefunden 
    function (response) {                                           // dann gibt Funktion den Inhalt von response als json zurück
        console.log("Get response as json-Promise");
        return response.json();
    }
).then(                                                             // die Datei konnte erfolgreich in json umgewandelt werden
    function (jsonData) {                                           // rufe Funktion jsonData auf
        console.log("recieved data: " + jsonData);

        // for each json object
        jsonData.forEach(item => {
            // neues Object
            const newProject = new TaskArea(item.name, item.shortdesc);
            taskAreaMap.set(item.id, newProject);


            // zuordnen der Task zu Projekt
            let ProjectTaskArea = new Project_TaskArea(item.project, item.id);
            projectTaskAreaMap.set(item.id, ProjectTaskArea);


        });

        console.log("TaskArea Map erfolgreich befüllt:", taskAreaMap);
        console.log("ProjektTaskAreaMap erfolgreich befüllt:", projectTaskAreaMap);
    }
).catch(function (err) {
    console.log("Opps, Something went wrong!", err);
})
// == end Json Task ==





// === Json Artifact ===

fetch('../JSON/artefacts.json').then(                                // Datei fetchapi.json wurde gefunden 
    function (response) {                                           // dann gibt Funktion den Inhalt von response als json zurück
        console.log("Get response as json-Promise");
        return response.json();
    }
).then(                                                             // die Datei konnte erfolgreich in json umgewandelt werden
    function (jsonData) {                                           // rufe Funktion jsonData auf
        console.log("recieved data: " + jsonData);

        // for each json object
        jsonData.forEach(item => {
            // neues Object
            const newProject = new Artifact(item.name, item.shortdesc, item.taskid, item.realtime);
            artifactMap.set(item.id, newProject);

            // Project-id getten
            let project_taskarea = projectTaskAreaMap.get(item.taskid);
            let projectID = project_taskarea.projektId;
            // hinzufügen zu artifact_project map

            let projectArtifact = new Project_Artifact(projectID, item.id, item.realtime);
            projectArtifactMap.set(item.id, projectArtifact);
        });

        console.log("Artifact Map erfolgreich befüllt:", artifactMap);
        console.log("ProjectArtifactMap erfolgreich befüllt:", projectArtifactMap);
    }
).catch(function (err) {
    console.log("Opps, Something went wrong!", err);
})

// == end Json ARtifact ==


// === POST API ===


let data = [
    new Project("titel", "kurzbeschreibung", "logoPath", new Date()),
    new TaskArea("titel", "kurzbeschreibung"),
    new Artifact("titel", "kurzbeschreibung", "C_TaskArea", "arbeitszeit")]

function postData(url, data) { // url zu der die Daten gesendet werden sollen
    // Default options are marked with *
    return fetch(url, {
        body: JSON.stringify(data), // welcher 'Content-Type‘ soll mitgeliefert werden-> mitgesendete Daten in JSON-String umwandeln
        cache: 'no-cache',  // *default, no-cache, (reload, force-cache, only-if-cached)
        credentials: 'same-origin', // (include, *omit )-> Anfrage geht an den gleichen Server
        headers: {
            'user-agent': 'Mozilla/4.0 MDN Example',
            'content-type': 'application/json'
        },
        method: 'POST',  // Default: *GET, (PUT, DELETE, etc.)       
        mode: 'cors',  // no-cors, *same-origin  
    })
        .then(response => response.json()) // parst response zu JSON-Objekt
}

window.onload = function () {
    postData(url, data).then(
        function (data) {
            console.log(data);
        }
    )
        // JSON from `response.json()` call
        .catch(error => {

            console.log("Daten nicht gesendet. Speichere im LocalStorage...");

            // localstorage holen,
            const offlineQueue = JSON.parse(window.localStorage.getItem('offlineQueue')) || [];

            // eintrag hinzufügen
            offlineQueue.push(data);
            console.log(offlineQueue);

            // in localStorage speichern
            window.localStorage.setItem('offlineQueue', JSON.stringify(offlineQueue));

        }
        );
}


// LocalStorage abspeichern


