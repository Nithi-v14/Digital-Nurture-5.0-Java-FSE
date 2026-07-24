import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../service/course.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit, OnDestroy {
constructor(private courseService: CourseService) {}
  portalName = 'Student Course Portal';

  isPortalActive = true;

  message = '';

  searchTerm = '';

  availableCourses = 0;

  onEnrollClick() {
    this.message = 'Enrollment opened!';
  }
  courseCount=0;
  ngOnInit(): void {
    this.courseService.getCourses().subscribe(courses => {

  this.courseCount = courses.length;

  this.availableCourses = courses.length;

});

    console.log("HomeComponent initialised — courses loaded");

  }

  ngOnDestroy(): void {

    console.log("HomeComponent destroyed");

  }
  getCourseCount(): number {

  return this.courseCount;

}
}