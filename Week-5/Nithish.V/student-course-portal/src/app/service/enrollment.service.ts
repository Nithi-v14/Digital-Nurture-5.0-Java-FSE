import { Injectable } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from '../model/course-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  private enrolledCourseIds: number[] = [];

  constructor(private courseService: CourseService,private http: HttpClient) {this.courseService.createCourse({

name:'Python',

code:'PY101',

credits:3,

gradeStatus:'pending',

enrolled:false

})

.subscribe({

next:data=>{

console.log(data);

}

});}

  enroll(courseId: number): void {

    if (!this.enrolledCourseIds.includes(courseId)) {
      this.enrolledCourseIds.push(courseId);
    }

  }

  unenroll(courseId: number): void {

    this.enrolledCourseIds =
      this.enrolledCourseIds.filter(id => id !== courseId);

  }

  isEnrolled(courseId: number): boolean {

    return this.enrolledCourseIds.includes(courseId);

  }
getStudentsByCourse(courseId: number): Observable<any[]> {

  return this.http.get<any[]>(

    `http://localhost:3000/enrollments?courseId=${courseId}`

  );

}
  getEnrolledCourses(): Course[] {

    return [];
  }

}