export class Group {

    ID: number;
    Name: string;
    Responsible: string;

    constructor(ID: number, Name: string, Responsible: string) {
        this.ID = ID;
        this.Name = Name;
        this.Responsible = Responsible;
    }

    public reset() {
        this.ID = 0;
        this.Name = '';
        this.Responsible = '';
    }

    public Set(ID: number, Name: string, Responsible: string) {
        this.ID = ID;
        this.Name = Name;
        this.Responsible = Responsible;
    }

    public softSet(Name: string, Responsible: string) {
        this.Name = Name;
        this.Responsible = Responsible;
    }

    public duplicate() {
        return new Group(this.ID, this.Name, this.Responsible);
    }

    toString() {
        return (this.ID + '    ' +
                this.Name + '   ' +
                this.Responsible);
    }

}
