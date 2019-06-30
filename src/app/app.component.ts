import { Component,OnInit } from '@angular/core';
// import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

loadedFeature='book'

ngOnInit(){
  // firebase.initializeApp({
  //   apiKey: "AIzaSyBXL6bG3S17_T-wO4ETdJjXbGs-fEp-8nA",
  //   authDomain: "my-proj-32e5f.firebaseapp.com",

  // });
}

onNavigate(feature:string){
  this.loadedFeature=feature;
}
}
