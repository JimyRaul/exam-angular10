import { Component, Input, OnInit } from '@angular/core';
import { IInstructor } from 'src/app/shared/interfaces/instructor';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.scss']
})
export class InstructorComponent implements OnInit {

  @Input() instructor: IInstructor;
  constructor() { }

  ngOnInit(): void {
  }

}
