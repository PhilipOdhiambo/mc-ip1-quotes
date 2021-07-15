import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-new-quote-form',
  templateUrl: './new-quote-form.component.html',
  styleUrls: ['./new-quote-form.component.css']
})
export class NewQuoteFormComponent implements OnInit {

  newQuote:Quote;

  constructor() {
    this.newQuote = new Quote('','','',new Date())
  }

  onSubmit(form:any) {
    
  }

  ngOnInit(): void {
  }

}
