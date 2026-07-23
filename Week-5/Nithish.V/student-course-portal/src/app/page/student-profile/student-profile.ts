import { Component } from '@angular/core';
import { EnrollmentService } from '../../service/enrollment.service';
import { Course } from '../../model/course-model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-student-profile',
  imports: [CommonModule],
  templateUrl: './student-profile.html',
  styleUrl: './student-profile.css',
})
export class StudentProfile {
  constructor(
    private enrollmentService: EnrollmentService
){}enrolledCourses: Course[] = [];

ngOnInit(): void {

    this.enrolledCourses =
        this.enrollmentService.getEnrolledCourses();

}
}
