import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { ICourse } from '../../interfaces/course';
import { IInstructor } from '../../interfaces/instructor';
import { ExamService } from './exam.service';
import { coursesMock } from '../../mocks/course.mock';
import { instructorMock } from '../../mocks/instructor.mock';

@Injectable({
  providedIn: 'root'
})
export class ExamMockService extends ExamService {

  constructor() {
    super();
   }

   getCourses(): Observable<ICourse[]>{
    return new Observable(obs => {
      obs.next(coursesMock);
    });
  }

  getFeaturedCourses(): Observable<ICourse[]>{
    return new Observable(obs => {
      const featuredCourses: ICourse[] = coursesMock.filter(c => c.featured === true);
      obs.next(featuredCourses);
    });
  }

  getCourse(id: number): Observable<ICourse>{
    return new Observable(obs => {
      const course: ICourse = coursesMock.find(c => c.id === id);
      obs.next(course);
    });
  }

  getInstructors(): Observable<IInstructor[]>{
    return new Observable(obs => {
      obs.next(instructorMock);
    });
  }
}
