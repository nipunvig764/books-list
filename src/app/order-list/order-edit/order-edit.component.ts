import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { Material } from 'src/app/shared/material.model';
import { orderListService } from '../order-list.service';


@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit,OnDestroy {
  @ViewChild('f') slForm:NgForm;
  subscription:Subscription;  
  editMode=false;
  editedItemIndex:number;
  editedItem:Material;
  

  constructor(private slService:orderListService) { }

  ngOnInit() {
    this.subscription=this.slService.startedEditing
      .subscribe(
        (index:number) =>
        {
          this.editedItemIndex=index;
          this.editMode=true;
          this.editedItem=this.slService.getMaterial(index);
          this.slForm.setValue({
            name:this.editedItem.name,
            amount:this.editedItem.amount
          })
        }
        );
  }

onSubmit(form:NgForm){
  const value=form.value;
  const newMaterial = new Material(value.name,value.amount);
  if(this.editMode){
    this.slService.upDateMaterial(this.editedItemIndex,newMaterial)

  } else{
    this.slService.addMaterial(newMaterial);
  }
  this.editMode=false;
  form.reset();

}

onClear(){
  this.slForm.reset();
  this.editMode=false;
}

onDelete(){
  this.slService.deleteMaterial(this.editedItemIndex);
  this.onClear();
}

ngOnDestroy(){
  this.subscription.unsubscribe();
}

}

