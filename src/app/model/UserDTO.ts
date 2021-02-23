export class UserDTO {

    username : string;
    password : string;
    firstName : string;
    lastName : string;
    dob : Date;
    mob_No : number;
    email : string;
    approved : boolean;
    serverResponse : string;

    constructor(
        username?:string,
        password?:string,
        firstName?:string,
        lastName?:string,
        dob?:Date,
        mob_No?:number,
        email?:string,
        approved:boolean=false,
        serverResponse:string=""
    ){
        this.username=username;
        this.password=password;
        this.firstName=firstName;
        this.lastName=lastName;
        this.dob=dob;
        this.mob_No=mob_No;
        this.email=email;
        this.approved=approved;
        this.serverResponse=serverResponse;
    }

}