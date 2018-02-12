import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	answer;
  constructor(public navCtrl: NavController) {
  		this.answer = '0';
  }
  addToExp(value){
  		if(this.answer=='0'){
  			this.answer=value;
  		}else{
  			this.answer+=value;
  		}
  }
  removeLast(){
  	this.answer=this.answer.substring(0,this.answer.length-1);
  }
  clear(){
  	this.answer='';
  }
  evaluate(){
  	if(this.answer!=''){
  		try{
  			var answer=eval(this.answer);
  			this.answer=answer.toString();
  		}
  		catch(err){
  			this.answer=this.answer;
  		}
  	}
  }
}
