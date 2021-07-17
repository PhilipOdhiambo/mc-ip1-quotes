import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTopQuote]'
})
export class TopQuoteDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.border = "3px solid #43a746"
    this.elem.nativeElement.style.color = "white";
  }

}
