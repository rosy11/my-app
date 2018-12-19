import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { productidValidators } from './productid.validators';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

	form = new FormGroup({
		pname: new FormControl('', [
			Validators.required,
			Validators.minLength(3)
		]),
		uid: new FormControl('', [
			Validators.required,
			productidValidators.cannotContainSpace,
			
		], productidValidators.shouldBeunique),
		status: new FormControl('', Validators.required)
	});

	get pname(){
		return this.form.get('pname');
	}
  	
  	get uid(){
		return this.form.get('uid');
	}

	get status(){
		return this.form.get('status');
	}

	addProduct(){
	//console.log('hi');
		this.form.setErrors({
			invalidProduct:true		
		});
	}
}
