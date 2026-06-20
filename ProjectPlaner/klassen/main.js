
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


