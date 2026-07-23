import { Injectable, NgModule } from '@angular/core';
import { Course } from '../model/course-model';

@Injectable({
  providedIn: 'root'
  
})

export class CourseService {

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
  
  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find(course => course.id === id);
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }

}