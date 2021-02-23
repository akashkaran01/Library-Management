import { BooksDTO } from './BooksDTO';

export class BookIssueDTO{
    userName : string;
    issueBookDate : Date;
    returnBookDate : Date;
    books : BooksDTO[];
    serverResponse : string;
    //bookIssueId : number;

    constructor(
        userName?: string,
        issueBookDate?:Date,
        returnBookDate?:Date,
        books?:BooksDTO[],
        serverResponse:string="",
        //bookIssueId:number=null
    ){
        this.userName = userName;
        this.issueBookDate = issueBookDate;
        this.returnBookDate = returnBookDate;
        this.books = books;
        this.serverResponse=serverResponse;
        //this.bookIssueId=bookIssueId;
    }
}