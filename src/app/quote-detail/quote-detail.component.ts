import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote?:Quote
  @Output() upvote = new EventEmitter()
  @Output() downvote = new EventEmitter()
  @Output() quoteDelete = new EventEmitter()



  constructor() { }

  voteUp() {
    this.upvote.emit()
  }

  voteDown() {
    this.downvote.emit()
  }

  deleteQuote(){
    this.quoteDelete.emit();
  }


  ngOnInit(): void {
  }

}
