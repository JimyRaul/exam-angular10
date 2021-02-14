import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.scss']
})
export class InstructorComponent implements OnInit {

  @Input() instructor: any;
  constructor() { }

  ngOnInit(): void {
  }

}
