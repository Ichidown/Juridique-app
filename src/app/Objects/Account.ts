
export class Account {

    ID: number;
    Email: string;
    Name: string;
    LastName: string;

    constructor(ID: number, Email: string, Name: string, LastName: string) {
        this.ID = ID;
        this.Email = Email;
        this.Name = Name;
        this.LastName = LastName;
    }

    public reset() {
        this.ID = 0;
        this.Email = '';
        this.Name = '';
        this.LastName = '';
    }

    Set(ID: number, Email: string, Name: string, LastName: string) {
        this.ID = ID;
        this.Email = Email;
        this.Name = Name;
        this.LastName = LastName;
    }

    softSet(Email: string, Name: string, LastName: string) {
        this.Email = Email;
        this.Name = Name;
        this.LastName = LastName;
    }

    public duplicate() {
        return new Account(this.ID, this.Email, this.Name, this.LastName);
    }

    toString() {
        return (this.ID + '    ' +
                this.Email + '    ' +
                this.Name + '   ' +
                this.LastName);
    }
}
