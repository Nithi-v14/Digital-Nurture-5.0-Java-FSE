import { Course } from './../../model/course-model';
import { CourseService } from '../../service/course.service';
import { Component,ChangeDetectorRef,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CourseCard} from '../../component/course-card/course-card';
import { HighlightDirective } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule,CourseCard, HighlightDirective],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {
  courses: Course[] = [];
   isLoading = true;
   cdr=inject(ChangeDetectorRef);
  selectedCourseId: number | null = null;

  constructor(private courseService: CourseService) {}
  onEnroll(id:number)
  {
    console.log("Enroll requested for course id: ",id);
    this.selectedCourseId=id;
  }

    ngOnInit(): void {
// console.log("ngOnInit called");
  this.courses = this.courseService.getCourses();
    setTimeout(() => {
// console.log("Loading finished");
      this.isLoading = false;
      this.cdr.detectChanges();
    }, 1500);

  }addSampleCourse(): void {

  this.courseService.addCourse({

    id: 6,

    name: 'Python',

    code: 'PY101',

    credits: 3,

    gradeStatus: 'pending',
    enrolled:true
    
  });
// console.log(this.courseService.getCourses().length);
  this.courses = this.courseService.getCourses();

}
  
  /*
trackBy improves performance by allowing Angular to identify
list items using a unique ID instead of recreating all DOM
elements whenever the array changes.
*/
trackByCourseId(index: number, course: Course): number {
  return course.id;
}
}
