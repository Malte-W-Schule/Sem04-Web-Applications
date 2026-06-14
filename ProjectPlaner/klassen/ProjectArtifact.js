
// === Projekt_Artefakt Klasse ===

/*
Die Klasse "Project_Artifact" repräsentiert die Beziehung zwischen einem Projekt und einem Artefakt. Sie enthält Informationen über die Arbeitszeit, die für das Artefakt im Rahmen des Projekts aufgewendet wird.
Eigenschaften:
- projectId: Die ID des Projekts, mit dem das Artefakt verbunden ist.
- artifact: Das Artefakt selbst, das mit dem Projekt verbunden ist.
- arbeitszeit: Die Arbeitszeit, die für das Artefakt im Rahmen des Projekts aufgewendet wird.

*/
export class Project_Artifact {

    constructor(projectId, artifact, arbeitszeit) {
        this.projectId = projectId;
        this.artifact = artifact;
        this.arbeitszeit = arbeitszeit;
    }


    // === projectId ===
    set projectId(value) {
        this._projectId = value;
    }

    get projectId() {
        return this._projectId;
    }

    // === artifact ===
    set artifact(value) {
        this._artifact = value;
    }
    get artifact() {
        return this._artifact;
    }

    // === arbeitszeit ===
    set arbeitszeit(value) {
        this._arbeitszeit = value;
    }
    get arbeitszeit() {
        return this._arbeitszeit;
    }

}