export class BooksDTO{
    bookName : string;
    authorName : string;
    publishedYear : Date;
    serverResponse : string;
    isSelected: boolean;

    constructor(
        bookName?:string,
        authorName?:string,
        publishedYear?: Date,
        serverResponse:string="",
        isSelected:boolean= false
    ){
        this.bookName = bookName;
        this.authorName = authorName;
        this.publishedYear = publishedYear;
        this.serverResponse=serverResponse;
        this.isSelected = isSelected;
    }
}