import { Material } from '../shared/material.model';

export class Book{
  Materials: any;
  materials(materials: any): any {
    throw new Error("Method not implemented.");
  }
    public name:string;
    public author:string;
    public description:string;
    public imagePath:string;
    public material:Material[];


constructor(name:string,auth:string,desc:string,imagePath:string,material:Material[]){
    this.name=name;
    this.author=auth;
    this.imagePath=imagePath;
    this.description=desc;
    this.material=material;
}

}