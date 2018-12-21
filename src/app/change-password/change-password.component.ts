import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ChangePasswordValidators } from './changepassword.validators';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  form= new FormGroup({
  	oldpassword: new FormControl('', [
  		Validators.required,
  		ChangePasswordValidators.oldpasswordMismatch
  	]),
	newpassword: new FormControl('', [
  		Validators.required
  	]),
  	confpassword: new FormControl('', [
  		Validators.required,
  		ChangePasswordValidators.confirmPassword
  	])
  });

  get oldpassword(){
  	return this.form.get('oldpassword');
  }

  get newpassword(){
  	return this.form.get('newpassword');
  }

  get confpassword(){
  	return this.form.get('confpassword');
  }

}
