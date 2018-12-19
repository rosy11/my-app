import { AbstractControl, ValidationErrors } from '@angular/forms';

export class productidValidators{
	static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
		if((control.value as string).indexOf(' ') >= 0)
			return { cannotContainSpace: true};
		return null;
	}

	static shouldBeunique(c: AbstractControl): Promise <ValidationErrors | null>{

		return new Promise((resolve,reject) => {

			setTimeout(() => {
				if(c.value === 'product1')
					resolve({shouldBeunique : true});
				else
					resolve(null);
			}, 2000);

		});
	}

	
}