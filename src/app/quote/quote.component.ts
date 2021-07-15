import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]

  constructor() {
    this.quotes = [
      new Quote(
        "Computers are like bikinis. They save people a lot of guesswork.",
        "Sam Ewing",
        'Steven',
        new Date()
      ),
      new Quote(
        "No matter how slick the demo is in rehearsal, when you do it in front of a live audience, the probability of a flawless presentation is inversely proportional to the number of people watching, raised to the power of the amount of money involved.",
        "Mark Gibbs",
        'Philip',
        new Date()
      ),
      new Quote(
        "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
        "Bill Gates",
        'Philip',
        new Date()
      ),
      new Quote(
        "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
        "E. W. Dijkstra",
        'Owino',
        new Date()
      ),
      new Quote(
        "Two things are infinite: the universe and human stupidity; and I’m not sure about the universe.",
        "Albert Einstein",
        'Susan',
        new Date()
      )
    ]
   }

   onNewQuote(quote:Quote) {
    this.quotes.push(quote);
  }

  voteUp(index:number) {
    this.quotes[index].upvotes += 1
  }

  voteDown(index:number) {
    this.quotes[index].downvotes += 1
  }

  ngOnInit(): void {
  }

}
