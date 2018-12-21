import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
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
		productAvail: new FormArray([], Validators.required),
		status: new FormControl('', Validators.required),

	});

	addProductcities(productCities: HTMLInputElement){
  		this.productCity.push(new FormControl(productCities.value));
  		productCities.value = '';
  	}

  	removeCity(cityName: FormControl){
  		let index = this.productCity.controls.indexOf(cityName);
  		this.productCity.removeAt(index);
  	}

  	get productCity(){
  		return this.form.get('productAvail') as FormArray;
  	}

	get pname(){
		return this.form.get('pname');
	}
  	
  	get uid(){
		return this.form.get('uid');
	}

	get status(){
		return this.form.get('status');
	}

	addProduct(f){
	console.log(f.value);
		this.form.setErrors({
			invalidProduct:true		
		});
	}
}
