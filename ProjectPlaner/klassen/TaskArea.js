

// === Aufgabenbereich Klasse ===
export class TaskArea {

        // === Constructor ===
        constructor(titel, kurzbeschreibung) {

            this.Titel = titel;

            if (kurzbeschreibung.length > 255) {
                throw new Error("Die Kurzbeschreibung darf maximal 255 Zeichen lang sein.");
            }
            this.kurzbeschreibung = kurzbeschreibung;

        }

    // === Titel ===

    get Titel() {
            return this._titel;
    }

    set Titel(value) {
            this._titel = value;
        }

    // === Kurzbeschreibung ===

    get Kurzbeschreibung() {
            return this._kurzbeschreibung;
        }

    set Kurzbeschreibung(value) {
            if (value.length > 255) {
                throw new Error("Die Kurzbeschreibung darf maximal 255 Zeichen lang sein.");
            }
            this._kurzbeschreibung = value;
        }

}
