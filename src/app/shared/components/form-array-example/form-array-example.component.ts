import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array-example',
  templateUrl: './form-array-example.component.html',
  styleUrls: ['./form-array-example.component.css']
})

export class FormArrayExampleComponent {
  constructor(private fb: FormBuilder) { }

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    phoneNumbers: this.fb.array([
      this.fb.control('')
    ])
  });

  get phoneNumbers() {  
    return this.profileForm.get('phoneNumbers') as FormArray;
  }

  addPhoneNumber() {
    this.phoneNumbers.push(this.fb.control(''));
  }

  removePhoneNumberField = (i: any) => {
    this.phoneNumbers.removeAt(i)
  }

  onSubmit() {
    console.log(this.profileForm);
  }

}
