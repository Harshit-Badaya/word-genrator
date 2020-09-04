import { Component } from '@angular/core';

import arrayWords from "../utlis/words"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';
  
  words = '';
  limit = 10;


handleSlideChange(newLimit : number){
  this.limit = newLimit;
}


genrate(){
  this.words = arrayWords.slice(0,this.limit).join(" ");
  console.log(this.words);
} 

}
