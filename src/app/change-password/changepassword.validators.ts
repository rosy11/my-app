import { AbstractControl, ValidationErrors } from '@angular/forms';

export class ChangePasswordValidators{

	static oldpasswordMismatch(control: AbstractControl): ValidationErrors | null {
		if((control.value as string) !== '1234' && (control.value as string) !== '')
			return { oldpasswordMismatch: true};
		return null;
	}

	static confirmPassword(control: AbstractControl): ValidationErrors | null {
		console.log('hi');
		let newPassword = control.get('newpassword');
		let confPassword = control.get('confpassword');
		console.log(control.get('newpassword'));
		console.log(control.get('confpassword'));
		if(newPassword !== confPassword)
			return { confirmPassword: true };
		return null;
	}
	
}