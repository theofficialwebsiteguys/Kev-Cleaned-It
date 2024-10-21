import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }

  sendEmail() {
    this.submitted = true; // Set to true to show the spinner and disable the button

    const formData = new FormData();
    formData.append('name', this.contactForm.get('name')?.value);
    formData.append('email', this.contactForm.get('email')?.value);
    formData.append('phone', this.contactForm.get('phone')?.value);


    // this.firebaseService.sendEmail(formData).subscribe(
    //     response => {
    //         console.log('Email sent successfully!', response);
    //         this.successMessage = 'Your website template request has been submitted successfully!';
    //         this.submitted = false; // Reset the submitted flag
    //     },
    //     error => {
    //         console.error('Error sending email:', error);
    //         this.submitted = false; // Reset the submitted flag even if there's an error
    //     }
    // );
}
  
}
