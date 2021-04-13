import { Component, OnInit } from '@angular/core';

import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {


  quotes: Quote[] = [
    new Quote(
      1,
      'Tony Stark',
      'Bitcoin will do to banks what email did to the postal industry',
      'Hall finney',
      new Date(2021, 4,10 )
    ),
    new Quote(
      2,
      'Blobfish ii',
      'The greatest glory in living lies not in never falling, but in rising every time we fall ',
      '-Nelson Mandela',
      new Date(2021, 3, 14)
    ),
    new Quote(
      3,
      'Elon Musk',
      'Self-driving cars are the natural extension of active safety and obviously something we should do.',
      'John Doe',
      new Date(2021, 3, 14)
    ),
  ];
  upvoteQuote(index: number) {
    this.quotes[index].upVotes += 1;
  }
  downvoteQuote(index: number) {
    this.quotes[index].downVotes += 1;
  }
  addNewQuote(quote: Quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.unshift(quote);
  }
  checkHighestUpvote(): Quote[] {
    return this.quotes.sort((a: Quote, b: Quote) => b.upVotes - a.upVotes);
  }
  setHighest() {
    let highQuote = { ...this.checkHighestUpvote() };
    return highQuote[0];
  }
  deleteQuote(toDelete: boolean, index: number) {
    console.log('Clicked');

    this.quotes.splice(index, 1);
  }
  constructor() {}

  ngOnInit(): void {}
}
