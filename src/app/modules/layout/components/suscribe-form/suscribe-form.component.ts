import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-suscribe-form',
  templateUrl: './suscribe-form.component.html',
  styleUrls: ['./suscribe-form.component.scss']
})
export class SuscribeFormComponent implements OnInit {

  suscribeForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.suscribeForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]]
    });
  }

  get email(): AbstractControl {
    return this.suscribeForm.get('email');
  }

  toSuscribe(suscribeForm): void {
  }
}
