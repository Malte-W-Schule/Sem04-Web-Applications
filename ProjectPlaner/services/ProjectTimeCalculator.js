


// services/ProjectTimeCalculator.js

export function projectTimeCalculator(projectID, artifactProjectList) {
    let totalTime = 0;

    for (let i = 0; i < artifactProjectList.length; i++) {
        // HIER: Klammern weg bei .projectId und .arbeitszeit, da es Getter sind!
        if (artifactProjectList[i].projectId == projectID) {
            totalTime += artifactProjectList[i].arbeitszeit;
        }
    }
    return totalTime;
}