import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { IBook } from '../book';
import { BookData } from './mock-data';

@Component({
  selector: 'app-book-list-example',
  templateUrl: './book-list-example.component.html',
  styleUrls: ['./book-list-example.component.scss']
})
export class BookListExampleComponent implements OnInit {

  books: IBook[];
  selectedBooks: IBook[];
  listBook: IBook[];
  
  constructor() { }

  ngOnInit(): void {
    this.books = this.fetchBook();
    this.selectedBooks = [];
    this.listBook = this.fetchBook();
  }

  fetchBook(): IBook[] {
    return BookData;
  }

  selectBook(book: IBook): void {
    this.selectedBooks.push(book); 
    
    for(let p in this.books){
      if(this.books[p] === book){       
       this.books[p].cantidad = this.books[p].cantidad + 1;       
       console.log(this.books[p].cantidad);
      }
    }
  }

}
