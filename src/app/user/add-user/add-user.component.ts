import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent{

  	constructor() { }

 	onSubmit(f) {
    	console.log(f.value);  // { first: '', last: '' }
    	console.log(f.valid);  // false
  	}

}
