import {Book} from './book.model';
import { Material } from '../shared/material.model';
import { Injectable } from '@angular/core';
import { orderListService } from '../order-list/order-list.service';
import { Subject } from 'rxjs';

@Injectable()

export class BookService{
    
    booksChanged= new Subject<Book[]>();
    private books:Book[] = [
        new Book('Think and grow rich','Napolean hill','A book which will change your mind','https://images-na.ssl-images-amazon.com/images/I/51Uw5tYiqsL.jpg',
        [
            new Material('Think and grow rich By Napolean hill',10),
            new Material('Think and grow rich By Napolean hill',20)
        ]),
        new Book('how to talk to anyone','Leil lowndes','how to talk to anyone is one of the greatest book ever','https://images-na.ssl-images-amazon.com/images/I/41nmCIbswGL._SX324_BO1,204,203,200_.jpg',[
            new Material('how to talk to anyone by Leil lowndes',10),
            new Material('how to talk to anyone by Leil lowndes',20)
        ]),
      ];
      
      constructor(private slService:orderListService){}

      setBooks(books:Book[]){
          this.books=books;
          this.booksChanged.next(this.books.slice());
    }
      getBooks(){
          return this.books.slice();
      }

      getBook(index:number){
          return this.books[index];
      }

      addMaterialsToOrderList(materials:Material[]){
          this.slService.addMaterials(materials);

      }

      addBook(book:Book){
          this.books.push(book);
          this.booksChanged.next(this.books.slice());
      }

      updateBook(index:number, newBook:Book){
          this.books[index] = newBook; 
          this.booksChanged.next(this.books.slice());
      }

      deleteBook(index:number){
          this.books.splice(index,1);
          this.booksChanged.next(this.books.slice());
      }
}