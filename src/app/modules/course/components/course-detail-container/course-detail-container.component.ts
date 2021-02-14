import { Component, Input, OnInit } from '@angular/core';
import { ICourse } from 'src/app/shared/interfaces/course';
import { ExamService } from 'src/app/shared/services/exam/exam.service';

@Component({
  selector: 'app-course-detail-container',
  templateUrl: './course-detail-container.component.html',
  styleUrls: ['./course-detail-container.component.scss']
})
export class CourseDetailContainerComponent implements OnInit {

  @Input() courseId: number;
  @Input() course: ICourse;
  constructor(
    private examService: ExamService
  ) { }

  ngOnInit(): void {
    this.fetchCourse();
  }

  fetchCourse(): void {
    this.examService.getCourse(this.courseId).subscribe(
      course => this.course = course
    );
  }
}
