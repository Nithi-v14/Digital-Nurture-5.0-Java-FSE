import { AbstractControl, ValidationErrors } from '@angular/forms';
export function noCourseCode(
  control: AbstractControl
): ValidationErrors | null {

  const value = control.value;

  if (value && value.toString().startsWith('XX')) {
    return { noCourseCode: true };
  }

  return null;
}
export function simulateEmailCheck(
    control: AbstractControl
): Promise<ValidationErrors | null> {

    return new Promise((resolve) => {

        setTimeout(() => {

            if (
                control.value &&
                control.value.includes('test@')
            ) {

                resolve({
                    emailTaken: true
                });

            } else {

                resolve(null);

            }

        }, 800);

    });

}