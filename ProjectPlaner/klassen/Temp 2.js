
// Artifact

{
    "id": 1,
        "name": "Projekt 1 - ER-Diagramm",
            "shortdesc": "ER-Diagramm erstellen",
                "longdesc": "Ein ER-Diagramm für den Projektmanager",
                    "planedtime": "7:30",
                        "realtime": "7:50",
                            "taskid": 1
},


// task:
[
    {
        "id": 1,
        "name": "Konzeption - P1",
        "shortdesc": "Konzeption des Projektmanagers",
        "project": 1
    },


// projects:
    [
        {
            "id": 1,
            "name": "Implementierung des Projektmanagers",
            "shortdesc": "Das Semesterprojekt für WBA.",
            "longdesc": "In diesem Projekt lernen Sie die Grundlangen der Webentwicklung an einem einfachen Projekt kennen.",
            "logourl": "https://scl.fh-bielefeld.de/WBA/projectmanager.avif",
            "maintainer": "Grit Behrens",
            "start": "2024-04-01T08:20:28.438Z",
            "end": "2024-07-17T08:20:28.438Z"
        },




export class Project_Artifact {

    constructor(projectId, artifact, arbeitszeit) {





        export class Project_TaskArea {

            // === Constructor ===
            constructor(projektId, aufgabenbereichId) {



                export class Project {

                    // === Constructor ===
                    constructor(titel, kurzbeschreibung, logoPath, startDate) {



                        export class TaskArea {

                            // === Constructor ===
                            constructor(titel, kurzbeschreibung) {



                                export class Artifact {

                                    // === Constructor ===
                                    constructor(titel, kurzbeschreibung, C_TaskArea, arbeitszeit) {