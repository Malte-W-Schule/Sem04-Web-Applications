
    // === Projekt_Artefakt Klasse ===
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