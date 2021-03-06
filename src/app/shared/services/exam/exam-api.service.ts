import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { ICourse } from '../../interfaces/course';
import { IInstructor } from '../../interfaces/instructor';
import { environment } from 'src/environments/environment';
import { ExamService } from './exam.service';

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

   getCourse(id: number): Observable<ICourse>{
    return this.http.get<ICourse>(`${this.apiUrl}/course/${id}/`);
   }

   getInstructors(): Observable<IInstructor[]>{
    return this.http.get<IInstructor[]>(`${this.apiUrl}/instructor/`);
   }

   suscribeNews(email: string): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/contacts/news/`, { 'email': email}).pipe(
      map((data) => {
        return data;
      })
    );
   }
}
