import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './component/header/header';
import { Home } from './page/home/home';
import { CourseList } from './page/course-list/course-list';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    Header,
    Home,
    CourseList
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  showHome=true;
  protected readonly title = signal('student-course-portal');
}