import { Component, OnInit } from '@angular/core';
import { IInstructor } from 'src/app/shared/interfaces/instructor';
import { ExamService } from 'src/app/shared/services/exam/exam.service';

@Component({
  selector: 'app-instructor-container',
  templateUrl: './instructor-container.component.html',
  styleUrls: ['./instructor-container.component.scss']
})
export class InstructorContainerComponent implements OnInit {

  instructors: IInstructor[];
  constructor(
    private examService: ExamService
  ) { }

  ngOnInit(): void {
    this.fetchInstructor();
  }

  fetchInstructor(): void {
    this.examService.getInstructors().subscribe(
      instructores => this.instructors = instructores
    );
  }
}
