

// === Project ===
export class Project {

    // === Constructor ===
    constructor(titel, kurzbeschreibung, logoPath, startDate, min, max, span, arbeitszeit) {

        this.Titel = titel;

        if (kurzbeschreibung.length > 255) {
            throw new Error("Die Kurzbeschreibung darf maximal 255 Zeichen lang sein.");
        }
        this.kurzbeschreibung = kurzbeschreibung;

        this.LogoPath = logoPath;

        this.StartDate = new Date(startDate);

        this.Min = min;

        this.Max = max;

        this.Span = span;

        this.Arbeitszeit = arbeitszeit;

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

    // === LogoPath ===

    get LogoPath() {
        return this._logoPath;
    }
    
    set LogoPath(value) {
        this._logoPath = value;
    }

    // === startDate ===

    get StartDate() {
        return this._startDate;
    }

    set StartDate(value) {
        this._startDate = new Date(value);
    }
    // === Min ===
    set Min(value) {
        this._min = value;
    }

    get Min() {
        return this._min;
    }

    // === Max ===
    set Max(value) {
        this._max = value;
    }


    get Max() {
        return this._max;
    }

    // === Span ===
    set Span(value) {
        this._span = value;
    }
    get Span() {
        return this._span;
    }
    // === Arbeitszeit ===
    set Arbeitszeit(value) {
        this._arbeitszeit = value;
    }

    get Arbeitszeit() {
        return this._arbeitszeit;
    }

}
