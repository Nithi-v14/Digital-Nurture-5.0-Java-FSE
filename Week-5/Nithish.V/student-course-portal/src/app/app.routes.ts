import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { CourseList } from './page/course-list/course-list';
import { Header } from './component/header/header';
import { StudentProfile } from './page/student-profile/student-profile';
import { Component } from '@angular/core';
export const routes: Routes = [
    {path:'',component:Home},
    {path:'courses',component:CourseList},
    {path:'profile',component:StudentProfile}
];
