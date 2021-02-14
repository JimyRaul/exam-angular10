import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseContainerComponent } from './Components/course-container/course-container.component';
import { CourseComponent } from './Components/course/course.component';
import { FormMessageErrorComponent } from './components/form-message-error/form-message-error.component';
import { RouterModule } from '@angular/router';



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
  ]
})
export class SharedModule { }
