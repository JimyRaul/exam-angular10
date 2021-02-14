import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ICourse } from '../../interfaces/course';
import { IInstructor } from '../../interfaces/instructor';
import { IExamService } from '../../interfaces/exam-service';

@Injectable({
  providedIn: 'root'
})
export class ExamService implements IExamService{

  constructor() { }

  // Cursos
  getCourses(): Observable<ICourse[]>{
    return;
  }

  getFeaturedCourses(): Observable<ICourse[]>{
    return;
  }

  getCourse(id: number): Observable<ICourse>{
    return;
  }


  // Instructores
  getInstructors(): Observable<IInstructor[]>{
    return;
  }
}
