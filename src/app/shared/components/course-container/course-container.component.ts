import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-container',
  templateUrl: './course-container.component.html',
  styleUrls: ['./course-container.component.scss']
})
export class CourseContainerComponent implements OnInit {

  @Input() isFeatured = false;
  @Input() showCourses = 3;
  classShowBook: number;
  constructor() { }

  ngOnInit(): void {
    this.fetchCourses();
    this.classShowBook = 12 / this.showCourses;
  }

  fetchCourses(): void {}
}
