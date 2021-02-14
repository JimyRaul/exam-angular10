import { Component, Input, OnInit } from '@angular/core';
import { ICourse } from 'src/app/shared/interfaces/course';
import { ExamService } from 'src/app/shared/services/exam/exam.service';

@Component({
  selector: 'app-course-container',
  templateUrl: './course-container.component.html',
  styleUrls: ['./course-container.component.scss']
})
export class CourseContainerComponent implements OnInit {

  @Input() isFeatured = false;
  @Input() showCourses = 3;
  courses: ICourse[];
  classShowBook: number;
  constructor(
    private examService: ExamService
  ) { }

  ngOnInit(): void {
    this.fetchCourses();
    this.classShowBook = 12 / this.showCourses;
  }

  fetchCourses(): void {
    if (this.isFeatured) {
      this.examService.getFeaturedCourses().subscribe(
        cursos => this.courses = cursos
      );
    } else {
      this.examService.getCourses().subscribe(
        cursos => this.courses = cursos
      );
    }
  }
}
