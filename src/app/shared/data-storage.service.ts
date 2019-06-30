import { Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import { BookService } from '../books/book.service';
import { Book } from '../books/book.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService{
    constructor(private http:Http,private bookService:BookService,private authService:AuthService){}

    // storeBooks(){
    //     const token = this.authService.getToken();
    //     return this.http.put('https://my-proj-32e5f.firebaseio.com/books.json?auth=' +token,this.bookService.getBooks())

    // }

    // getBooks(){
    //     const token= this.authService.getToken();
    //     this.http.get('https://my-proj-32e5f.firebaseio.com/books.json?auth='+ token)
    //         .subscribe(
    //             (response:Response) =>{
    //                 const books:Book[] =response.json();
    //                 this.bookService.setBooks(books);
    //             }
    //         );
    // }

}
