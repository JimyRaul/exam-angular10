import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-detail-container',
  templateUrl: './course-detail-container.component.html',
  styleUrls: ['./course-detail-container.component.scss']
})
export class CourseDetailContainerComponent implements OnInit {

  @Input() courseId: number;
  constructor() { }

  ngOnInit(): void {
    this.fetchCourse();
  }

  fetchCourse(): void {
  }
}
