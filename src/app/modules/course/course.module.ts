import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseListPageComponent } from './pages/course-list-page/course-list-page.component';
import { CourseDetailPageComponent } from './pages/course-detail-page/course-detail-page.component';
import { CourseDetailContainerComponent } from './components/course-detail-container/course-detail-container.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CourseListPageComponent, CourseDetailPageComponent, CourseDetailContainerComponent, CourseDetailComponent],
  imports: [
    SharedModule,
    CommonModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
