
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router} from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { BookService } from '../book.service';
import { Book } from '../book.model';


@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  id:number;
  editMode=false;
  bookForm:FormGroup
  

  constructor(private route:ActivatedRoute,private bookService:BookService,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  onSubmit(){
    // const newBook = new Book(
      // this.bookForm.value['name'],
      // this.bookForm.value['description'],
      // this.bookForm.value['imagePath'],
      // this.bookForm.value['author'],
      // this.bookForm.value['materials']);
    if (this.editMode){
      this.bookService.updateBook(this.id,this.bookForm.value);
    } else{
      this.bookService.addBook(this.bookForm.value);
    }
    this.onCancel()
  }

  onAddMaterial(){
    (<FormArray>this.bookForm.get('materials')).push(
      new FormGroup({
        'name':new FormControl(null,Validators.required),
        'amount':new FormControl(null,Validators.required
)
      })
    );
  }

  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.route});
    
  }

  private initForm(){
    let bookName='';
    let bookImagePath='';
    let bookDescription='';
    let bookMaterials = new FormArray([]);
    

    if (this.editMode){
      const book=this.bookService.getBook(this.id);
      bookName=book.name;
      bookImagePath=book.imagePath;
      bookDescription=book.description;
      if(book['materials']){
        for(let material of book.material){
          bookMaterials.push(
        new FormGroup({
          'name':new FormControl(material.name,Validators.required),
          'amount':new FormControl(material.amount,
            Validators.required
          ),
        })
      );
    }
  }

}

    this.bookForm=new FormGroup({
      'name':new FormControl(bookName,Validators.required),
      'imagePath':new FormControl(bookImagePath,Validators.required),
      'description':new FormControl(bookDescription,Validators.required),
      'materials':bookMaterials

    });
  }
}



