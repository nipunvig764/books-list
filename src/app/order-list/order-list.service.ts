import { Material } from '../shared/material.model';
import { Subject } from 'rxjs';



export class orderListService{
    materialsChanged= new Subject<Material[]>();
    startedEditing=new Subject<number>();
    private materials:Material[]=
      [
        new Material('Think and grow rich by napolean hill',20),
        new Material('How to talk to anyone',10)
      ];
  

    getMaterials(){
        return this.materials.slice();
    }

    getMaterial(index:number){
      return this.materials[index];
    }

    addMaterial(material:Material){
        this.materials.push(material);
        this.materialsChanged.next(this.materials.slice());
    }

    upDateMaterial(index:number,newMaterial:Material){
      this.materials[index] = newMaterial;
      this.materialsChanged.next(this.materials.slice());
    }

    deleteMaterial(index:number){
      this.materials.splice(index,1);
      this.materialsChanged.next(this.materials.slice());
    }

    addMaterials(materials:Material[]){
      this.materials.push(...materials);
      this.materialsChanged.next(this.materials.slice())
    }

}