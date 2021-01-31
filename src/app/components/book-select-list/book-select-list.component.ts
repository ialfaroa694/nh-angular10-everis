import { Component, OnInit, Input } from '@angular/core';
import { IBook } from '../book';

@Component({
  selector: 'app-book-select-list',
  templateUrl: './book-select-list.component.html',
  styleUrls: ['./book-select-list.component.scss']
})
export class BookSelectListComponent implements OnInit {

  @Input() bookSelect: IBook;

  constructor() { }

  ngOnInit(): void {    
    }
}
