import {  NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { OrderListComponent } from './order-list/order-list.component';
import { BookStartComponent } from './books/book-start/book-start.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BookEditComponent } from './books/book-edit/book-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

const appRoutes: Routes = [
  {path:'',redirectTo:'/books', pathMatch:'full'},
  {path:'books',component:BooksComponent,children:[
    {path:'',component:BookStartComponent},
    {path:'new',component:BookEditComponent},
    {path:':id',component:BookDetailComponent},
    
    {path:':id/edit',component:BookEditComponent}
  ]},
  {path:'order-list',component:OrderListComponent},
  {path:'signup',component:SignupComponent},
  {path:'signin',component:SigninComponent},
];

@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]

})
export class AppRoutingModule{

}

