import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CourseContainerComponent } from './Components/course-container/course-container.component';
import { CourseComponent } from './Components/course/course.component';
import { FormMessageErrorComponent } from './components/form-message-error/form-message-error.component';
import { ExamMockService } from './services/exam/exam-mock.service';
import { ExamApiService } from './services/exam/exam-api.service';
import { ExamService } from './services/exam/exam.service';


@NgModule({
  declarations: [
    CourseContainerComponent,
    CourseComponent,
    FormMessageErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CourseContainerComponent,
    FormMessageErrorComponent
  ],
  providers: [
    {
      provide: ExamService,
      useClass: ExamApiService
    }
  ]
})
export class SharedModule { }
