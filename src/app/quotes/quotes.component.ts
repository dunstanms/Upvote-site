import { Component, OnInit } from '@angular/core';

import { QuoteService } from './quotes.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})

export class QuotesComponent implements OnInit {
  
  quotes: any;

  constructor(private quoteService: QuoteService){}

  ngOnInit(): void {
    this.quotes = this.quoteService.getQuotes();
  }

  addNewQuote(quote:any){
    this.quoteService.addQuote(quote);
  }

  voteQuote(quote:any,type:number){
    this.quoteService.voteQuote(quote,type);
  }

  toggleDetails(quote:any,show:boolean){
    this.quoteService.toggleQuoteDetails(quote,show);
  }

  deleteQuote(quote:any){
    this.quoteService.deleteQuote(quote);
  }

}