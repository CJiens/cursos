import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {  FormBuilder, FormGroup, FormsModule, Validators,ReactiveFormsModule } from "@angular/forms"
@Component({
  selector: 'app-register',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  fb = inject(FormBuilder);
  registerForm: FormGroup;
  formSubmitted = false;

  constructor() {
    this.registerForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", Validators.pattern("[0-9]{10}")],
      course: ["", Validators.required],
      message: [""],
    })
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log("Form submitted:", this.registerForm.value)
      this.formSubmitted = true
      // Here you would typically send the form data to your backend
      this.registerForm.reset()
      setTimeout(() => {
        this.formSubmitted = false
      }, 5000)
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.registerForm.controls).forEach((key) => {
        const control = this.registerForm.get(key)
        control?.markAsTouched()
      })
    }
  }
}
