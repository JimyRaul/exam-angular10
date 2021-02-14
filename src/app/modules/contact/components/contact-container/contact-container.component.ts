import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-container',
  templateUrl: './contact-container.component.html',
  styleUrls: ['./contact-container.component.scss']
})
export class ContactContainerComponent implements OnInit {

  contactForm: FormGroup;
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  initForm(): void {
    this.contactForm = this.fb.group({
      fullName: [null, Validators.required],
      email: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      message: [null, Validators.required]
    });
  }

  get f(): any {
    return this.contactForm.controls;
  }

  onsubmit(): void {}
}
