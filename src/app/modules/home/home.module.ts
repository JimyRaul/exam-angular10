import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InstructorContainerComponent } from './components/instructor-container/instructor-container.component';
import { InstructorComponent } from './components/instructor/instructor.component';


@NgModule({
  declarations: [HomePageComponent, InstructorContainerComponent, InstructorComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
