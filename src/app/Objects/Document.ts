export class Document {

    // tempD: Document;
    ID: number;
    // fromEmail: string; // might not be needed
    toEmail: string;
    title: string;
    Reference: string;
    Origin: string;
    Risks: string;
    Resume: string;
    Mesures: string;
    EstablishedBy: string;
    NameResp: string;
    Date: string;

    constructor(ID: number,
        // fromEmail: string,
        toEmail: string,
        title: string,
        Reference: string,
        Origin: string,
        Risks: string,
        Resume: string,
        Mesures: string,
        EstablishedBy: string,
        NameResp: string,
        Date: string) {
        this.ID = ID;
        // this.fromEmail = fromEmail;
        this.toEmail = toEmail;
        this.title = title;
        this.Reference = Reference;
        this.Origin = Origin;
        this.Risks = Risks;
        this.Resume = Resume;
        this.Mesures = Mesures;
        this.EstablishedBy = EstablishedBy;
        this.NameResp = NameResp;
        this.Date = Date;
    }

    public reset() {
        this.ID = 0;
        // this.fromEmail = '';
        this.toEmail = '';
        this.title = '';
        this.Reference = '';
        this.Origin = '';
        this.Risks = '';
        this.Resume = '';
        this.Mesures = '';
        this.EstablishedBy = '';
        this.NameResp = '';
        this.Date = '';
    }

    set(document: Document) {
        this.ID = document.ID;
        // this.fromEmail = document.fromEmail;
        this.toEmail = document.toEmail;
        this.title = document.title;
        this.Reference = document.Reference;
        this.Origin = document.Origin;
        this.Risks = document.Risks;
        this.Resume = document.Resume;
        this.Mesures = document.Mesures;
        this.EstablishedBy = document.EstablishedBy;
        this.NameResp = document.NameResp;
        this.Date = document.Date;
    }

    public duplicate() {
        return new Document(this.ID,
        // this.fromEmail,
        this.toEmail,
        this.title,
        this.Reference,
        this.Origin,
        this.Risks,
        this.Resume,
        this.Mesures,
        this.EstablishedBy,
        this.NameResp,
        this.Date);
    }

    toString() {
        return (this.ID + '     ' +
                // this.fromEmail + '    ' +
                this.toEmail + '    ' +
                this.title + '   ' +
                this.Reference + '    ' +
                this.Origin + '    ' +
                this.Risks + '    ' +
                this.Resume + '    ' +
                this.Mesures + '    ' +
                this.EstablishedBy + '    ' +
                this.NameResp + '    ' +
                this.Date);
    }
}
