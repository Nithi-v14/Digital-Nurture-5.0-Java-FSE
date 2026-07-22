import { Component,ChangeDetectorRef,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CourseCard} from '../../component/course-card/course-card';
import { HighlightDirective } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule,CourseCard, HighlightDirective, CreditLabelPipe],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList {
   isLoading = true;
   cdr=inject(ChangeDetectorRef);
  selectedCourseId: number | null = null;

  courses = [
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
    name: 'React',
    code: 'RCT102',
    credits: 3,
    gradeStatus: 'failed',
    enrolled: false
  },
  {
    id: 3,
    name: 'Spring Boot',
    code: 'SPR103',
    credits: 4,
    gradeStatus: 'pending',
    enrolled: true
  }
];
  onEnroll(id:number)
  {
    console.log("Enroll requested for course id: ",id);
    this.selectedCourseId=id;
  }
    ngOnInit(): void {
// console.log("ngOnInit called");

    setTimeout(() => {
// console.log("Loading finished");
      this.isLoading = false;
      this.cdr.detectChanges();
    }, 1500);

  }

  
  /*
trackBy improves performance by allowing Angular to identify
list items using a unique ID instead of recreating all DOM
elements whenever the array changes.
*/
trackByCourseId(index: number, course: any): number {
  return course.id;
}
}
