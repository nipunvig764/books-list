import { Component, OnInit } from '@angular/core';
import { Material } from '../shared/material.model';
import { orderListService } from './order-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  material:Material[]
  private subscription:Subscription;
  constructor(private slService:orderListService) { }

  ngOnInit() {
    this.material=this.slService.getMaterials();
    this.subscription=this.slService.materialsChanged
    
      .subscribe(
        (material:Material[])=>{
          this.material=material;
        }
      );
  }

  onEditItem(index:number){
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  } 


  

}
