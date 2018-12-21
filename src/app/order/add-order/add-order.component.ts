import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent {
	selectedIndex:number=0;

  	clickMe(val: number){
    	this.selectedIndex=val;
  	}
  	
  	
}
