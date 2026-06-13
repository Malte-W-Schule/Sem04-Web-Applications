

export class Project_TaskArea {

    // === Constructor ===
    constructor(projektId, aufgabenbereichId) {

        this.projektId = projektId;

        this.aufgabenbereichId = aufgabenbereichId;

    }

    // === ProjektId ===
    set ProjektId(value) {
        this._projektId = value;
    }

    get ProjektId() {
        return this._projektId;
    }

    // === AufgabenbereichId ===
    set AufgabenbereichId(value) {
        this._aufgabenbereichId = value;
    }

    get AufgabenbereichId() {
        return this._aufgabenbereichId;
    }

}

