import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { CourseService } from '../../service/course.service';
import { Course } from '../../model/course-model';
import { EnrollmentService } from '../../service/enrollment.service';
@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-detail.html',
  styleUrls: ['./course-detail.css']
})
export class CourseDetail implements OnInit {
students: any[] = [];
  course?: Course;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit(): void {
this.route.paramMap.pipe(

  switchMap(params => {

    const id = Number(params.get('id'));

    return this.enrollmentService.getStudentsByCourse(id);

  })

).subscribe({

  next: students => {

    this.students = students;

  }

});
    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.courseService.getCourseById(id)
.subscribe(course => {

  this.course = course;

});

  }

}