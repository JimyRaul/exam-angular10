import { Component, Input, OnInit } from '@angular/core';
import { ICourse } from 'src/app/shared/interfaces/course';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {

  @Input() courseId: number;
  course: ICourse;
  constructor() { }

  ngOnInit(): void {
    this.fetchCourse();
  }

  fetchCourse(): void {
  }
}
