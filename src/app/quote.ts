export class Quote {
    upvotes:number;
    downvotes:number;
    showDetail:boolean
    constructor(
        public quote: string,
        public author:string,
        public submitBy:string,
        public submitDate:Date,
    ) {
        this.upvotes = 0;
        this.downvotes = 0;
        this.showDetail = false;
    }

}
