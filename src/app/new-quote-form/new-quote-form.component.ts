import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quote } from '../quote';

@Component({
  selector: 'app-new-quote-form',
  templateUrl: './new-quote-form.component.html',
  styleUrls: ['./new-quote-form.component.css']
})
export class NewQuoteFormComponent implements OnInit {

  newQuote:Quote;
  @Output() newQuoteOut = new EventEmitter<Quote>()

  constructor() {
    this.newQuote = new Quote('','','',new Date())
  }

  onSubmit(form:NgForm) {
    if (!form.valid) {
      for (const name in form.controls) {
        if (form.controls[name].invalid) {
          form.form.get(name)?.markAsDirty()
        }
      }
      return
    }
    this.newQuote.submitDate = new Date();
    this.newQuoteOut.emit(this.newQuote)
    this.newQuote = new Quote('','','',new Date())
    form.reset()
    
  }


  ngOnInit(): void {
  }

}
