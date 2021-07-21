import { Component, EventEmitter, Input, OnInit, AfterViewInit, Output, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit, AfterViewInit {

  @Input() quote?:Quote
  @Output() upvote = new EventEmitter()
  @Output() downvote = new EventEmitter()
  @Output() quoteDelete = new EventEmitter()
  @ViewChild('detail') detail:ElementRef

 

  constructor(private renderer:Renderer2) {}
  private unlistener:()=>void;

  voteUp($event) {
    this.upvote.emit()
    $event.target.focus()
  }

  voteDown() {
    this.downvote.emit()
  }

  deleteQuote(){
    this.quoteDelete.emit();
  }


  ngOnInit(): void {


  }
  ngAfterViewInit() {
    this.renderer.listen(this.detail.nativeElement, 'click', event => {
      event.target.focus()
    })
  }

}
