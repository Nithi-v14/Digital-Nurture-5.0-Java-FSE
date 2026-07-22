import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CourseCard} from '../../component/course-card/course-card';
@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule,CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList {
  courses=[
    {
      id:1,
      name:"Java Programming",
      code:"JAVA101",
      credits:3
    },
    {
      id:2,
      name:"Web Development",
      code:"WEB201",
      credits:4
    },
    {
      id:3,
      name:"Database Management",
      code:"DB301",
      credits:3
    },
    {
      id:4,
      name:"Data Structures",
      code:"DS401",
      credits:4
    }
  ];
  selectedCourseId:number| null=null;
  onEnroll(id:number)
  {
    console.log("Enroll requested for course id: ",id);
    this.selectedCourseId=id;
  }
}
