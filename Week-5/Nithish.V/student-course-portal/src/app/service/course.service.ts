import { Injectable, NgModule } from '@angular/core';
import { Course } from '../model/course-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError, throwError } from 'rxjs';
import { retry } from 'rxjs/operators';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
  
})

export class CourseService {
constructor(private http: HttpClient) {}
  private courses: Course[] = [

    {
      id: 1,
      name: 'Angular',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'passed',
      enrolled: true
    },

    {
      id: 2,
      name: 'Java',
      code: 'JAVA201',
      credits: 3,
      gradeStatus: 'pending',
      enrolled:false
    },

    {
      id: 3,
      name: 'Spring Boot',
      code: 'SPR301',
      credits: 4,
      gradeStatus: 'passed',
      enrolled:true
    },

    {
      id: 4,
      name: 'React',
      code: 'REA401',
      credits: 3,
      gradeStatus: 'failed',
      enrolled:false
    },

    {
      id: 5,
      name: 'SQL',
      code: 'SQL501',
      credits: 2,
      gradeStatus: 'pending',
      enrolled :true
    }

  ];
  createCourse(

course: Omit<Course,'id'>

): Observable<Course> {

  return this.http.post<Course>(

    'http://localhost:3000/courses',

    course

  );

}
  getCourses(): Observable<Course[]> {

   return this.http
    .get<Course[]>('http://localhost:3000/courses')
    .pipe(
retry(2),
      map(courses =>
        courses.filter(course => course.credits > 0)
      ),   tap(courses => {

        console.log('Courses loaded:', courses.length);

      }),catchError(error => {

        console.error(error);

        return throwError(() =>
          new Error('Failed to load courses. Please try again.')
        );

      })
    );

}
getCourseById(id: number): Observable<Course> {

  return this.http.get<Course>(

    `http://localhost:3000/courses/${id}`

  );

}

  addCourse(course: Course): void {
    this.courses.push(course);
  }

  updateCourse(

course:Course

):Observable<Course>{

return this.http.put<Course>(

`http://localhost:3000/courses/${course.id}`,

course

);

}
deleteCourse(

id:number

):Observable<void>{

return this.http.delete<void>(

`http://localhost:3000/courses/${id}`

);

}
}