import { Observable } from 'rxjs';
import { IInstructor } from './instructor';
import { ICourse} from './course';


export interface IExamService {
    getCourses(): Observable<ICourse[]>;
    getFeaturedCourses(): Observable<ICourse[]>;
    getCourse(id: number): Observable<ICourse>;

    getInstructors(): Observable<IInstructor[]>;
}
