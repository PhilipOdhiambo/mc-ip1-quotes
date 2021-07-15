export class Quote {
    upvotes:number;
    downvotes:number;
    constructor(
        public quote: string,
        public author:string,
        public submitBy:string,
        public submitDate:Date,
    ) {
        this.upvotes = 0;
        this.downvotes = 0;
    }

}
