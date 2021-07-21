import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTopQuote]'
})
export class TopQuoteDirective {

  @Input()appTopQuote:boolean;

  constructor(private elem:ElementRef) {}

  ngOnInit() {

  }

  ngAfterViewInit() {
    if (this.appTopQuote) {
      this.elem.nativeElement.style.border = "3px solid #43a746"
      this.elem.nativeElement.style.color = "white";
    }
  }

}
