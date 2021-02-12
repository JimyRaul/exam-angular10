import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseContainerComponent } from './Components/course-container/course-container.component';
import { CourseComponent } from './Components/course/course.component';



@NgModule({
  declarations: [CourseContainerComponent, CourseComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CourseContainerComponent
  ]
})
export class SharedModule { }
