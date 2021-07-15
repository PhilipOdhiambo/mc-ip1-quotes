import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-new-quote-form',
  templateUrl: './new-quote-form.component.html',
  styleUrls: ['./new-quote-form.component.css']
})
export class NewQuoteFormComponent implements OnInit {

  newQuote:Quote;
  @Output() newQuoteEmitter = new EventEmitter<Quote>()

  constructor() {
    this.newQuote = new Quote('','','',new Date())
  }

  onSubmit(form:any) {
    this.newQuoteEmitter.emit(this.newQuote)   
  }

  ngOnInit(): void {
  }

}
