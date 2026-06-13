

// === Artefakt Klasse ===

export class Artifact {

    // === Constructor ===
    constructor(titel, kurzbeschreibung, C_TaskArea, arbeitszeit) {

        this.Titel = titel;

        if (kurzbeschreibung.length > 255) {
            throw new Error("Die Kurzbeschreibung darf maximal 255 Zeichen lang sein.");
        }
        this.kurzbeschreibung = kurzbeschreibung;

        this.C_TaskArea = C_TaskArea;

        this.arbeitszeit = arbeitszeit;

    }

    // === Titel ===

    get Titel() {
        return this._titel;
    }
    set Titel(value) {
        this._titel = value;
    }

    // === Kurzbeschreibung ===

    get kurzbeschreibung() {
        return this._kurzbeschreibung;
    }

    set kurzbeschreibung(value) {
        if (value.length > 255) {
            throw new Error("Die Kurzbeschreibung darf maximal 255 Zeichen lang sein.");
        }
        this._kurzbeschreibung = value;
    }

    // === C_TaskArea ===
    get C_TaskArea() {
        return this._C_TaskArea;
    }

    set C_TaskArea(value) {
        this._C_TaskArea = value;
    }

    // === C_arbeitszeit ===
    get C_arbeitszeit() {
        return this._C_arbeitszeit;
    }

    set C_arbeitszeit(value) {
        this._C_arbeitszeit = value;
    }


}
