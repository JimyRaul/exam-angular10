import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExamService } from 'src/app/shared/services/exam/exam.service';


@Component({
  selector: 'app-suscribe-form',
  templateUrl: './suscribe-form.component.html',
  styleUrls: ['./suscribe-form.component.scss']
})
export class SuscribeFormComponent implements OnInit {

  suscribeForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private suscribeService: ExamService
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
    if (suscribeForm.valid) {
      this.suscribeService.suscribeNews(suscribeForm.get('email').value).subscribe(
        res => console.log('Mail registrado')
      );
    }
  }
}
