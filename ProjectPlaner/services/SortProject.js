import { projectTimeCalculator } from '../services/ProjectTimeCalculator.js';

export function sortProject(ProjectList, sortCriteria = "Time", artifactProjectList = []) {

    var sortedProjectList = [];
    let myMap = new Map();

    switch (sortCriteria) {
        case "Time":
            // Arbeits zeit 
            for (let i = 0; i < ProjectList.length; i++) {
                myMap.set(
                    ProjectList[i],
                    projectTimeCalculator(artifactProjectList[i].projectId, artifactProjectList)
                );
            }
            break;

        case "Date":
            // Umwandlung in milisec (Zeitstempel) für die Sortierung
            for (let i = 0; i < ProjectList.length; i++) {
                let dateAsNumber = new Date(ProjectList[i].StartDate).getTime();
                myMap.set(
                    ProjectList[i],
                    dateAsNumber
                );
            }
            break;
    } 

    // sortieren nach Wert (Zeit oder Datum)
    while (myMap.size > 0) {
        let maxKey = null;
        let maxValue = -Infinity;

        // Höchsten Wert suchen
        for (let [key, value] of myMap.entries()) {
            if (value > maxValue) {
                maxValue = value;
                maxKey = key;
            }
        }
        // Liste hinzufügen
        sortedProjectList.push(maxKey);
        // Aus der Map löschen
        myMap.delete(maxKey);
    }

    return sortedProjectList;
}