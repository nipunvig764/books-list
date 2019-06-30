import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books:Book[];

  constructor(private bookService:BookService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.bookService.booksChanged
      .subscribe(
        (books:Book[]) => {
          this.books=books;
        } 
      );
    this.books=this.bookService.getBooks();
  }

  onNewBook(){
    this.router.navigate(['new'],{relativeTo:this.route});
  }
}
