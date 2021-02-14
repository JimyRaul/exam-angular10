import { Component, Input, OnInit } from '@angular/core';
import { ICourse } from '../../interfaces/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  @Input() course: ICourse;
  constructor() { }

  ngOnInit(): void {
  }

}
