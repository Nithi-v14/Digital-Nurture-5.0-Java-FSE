import { CourseService } from './../../service/course.service';
import { Course } from './../../model/course-model';
import { Component,ChangeDetectorRef,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CourseCard} from '../../component/course-card/course-card';
import { HighlightDirective } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule,CourseCard, HighlightDirective,FormsModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {
  courses: Course[] = [];
   isLoading = true;
   cdr=inject(ChangeDetectorRef);
  selectedCourseId: number | null = null;
  searchTerm=''
  searchCourse(){

this.router.navigate(

['courses'],

{

queryParams:{

search:this.searchTerm

}

}

);

}
  constructor(private courseService: CourseService,
    private router: Router,
    private route:ActivatedRoute) {}
  onEnroll(id:number)
  {
    console.log("Enroll requested for course id: ",id);
    this.selectedCourseId=id;
  }

    ngOnInit(): void {
// console.log("ngOnInit called");
  // this.courses = this.courseService.getCourses();
  this.courseService.getCourses().subscribe({

  next: courses => {

    this.courses = courses;

  },

  error: error => {

    this.errorMessage = error.message;

    this.isLoading = false;

  },

  complete: () => {

    this.isLoading = false;

  }

});
  this.courseService.getCourses()

    .subscribe({

      next: courses => {

        this.courses = courses;

      },

      error: err => {

        this.errorMessage = err.message;

      },

      complete: () => {

        this.isLoading = false;

      }

    });
    setTimeout(() => {
// console.log("Loading finished");
      this.isLoading = false;
      this.cdr.detectChanges();
    }, 1500);
this.searchTerm =

this.route.snapshot
.queryParamMap
.get('search')?? '';
  }
  addSampleCourse(): void {

  this.courseService.addCourse({

    id: 6,

    name: 'Python',

    code: 'PY101',

    credits: 3,

    gradeStatus: 'pending',
    enrolled:true
    
  });
// console.log(this.courseService.getCourses().length);
  this.courseService.getCourses().subscribe({

  next: courses => {

    this.courses = courses;

  },

  error: err => {

    this.errorMessage = err.message;

  },

  complete: () => {

    this.isLoading = false;

  }

});
}
 errorMessage = ''; 
  /*
trackBy improves performance by allowing Angular to identify
list items using a unique ID instead of recreating all DOM
elements whenever the array changes.
*/
trackByCourseId(index: number, course: Course): number {
  return course.id;
}
goToCourse(course: Course){

    this.router.navigate([
        'courses',
        course.id
    ]);

}
}
