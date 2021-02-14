import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { ExamService } from './exam.service';
import { environment } from 'src/environments/environment';
import { ICourse } from '../../interfaces/course';
import { IInstructor } from '../../interfaces/instructor';

@Injectable({
  providedIn: 'root'
})
export class ExamApiService extends ExamService {

  apiUrl: string = environment.apiUrl;
  private http: HttpClient;

  constructor(handler: HttpBackend) {
    super();
    this.http = new HttpClient(handler);
   }

   getCourses(): Observable<ICourse[]>{
     return this.http.get<ICourse[]>(`${this.apiUrl}/course/`);
   }

   getFeaturedCourses(): Observable<ICourse[]>{
    return this.http.get<ICourse[]>(`${this.apiUrl}/course/?featured=true`);
   }
}
