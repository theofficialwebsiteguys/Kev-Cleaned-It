import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm!: FormGroup;
  submitted: boolean = false;

  successMessage: string = ''; // Variable to hold the success message

  constructor(private fb: FormBuilder, private emailService: EmailService) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      proposal: ['', [Validators.required]] // added proposal field here
    });
  }

  sendEmail() {
    this.submitted = true; // Set to true to show the spinner and disable the button

    const formData = this.contactForm.value;

    this.emailService.submitForm(formData)
      .subscribe(response => {
        console.log('Form submitted successfully!', response);
        this.successMessage = 'Your website template request has been submitted successfully!';
        this.submitted = false; // Reset the submitted flag
      }, error => {
        console.error('Error submitting form', error);
        this.submitted = false; // Reset the submitted flag
      });
  }
  
}
