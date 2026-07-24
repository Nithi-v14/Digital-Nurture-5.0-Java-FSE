import { Routes} from '@angular/router';
import { Home } from './page/home/home';
import { CourseList } from './page/course-list/course-list';
import { Header } from './component/header/header';
import { StudentProfile } from './page/student-profile/student-profile';
import { Component } from '@angular/core';
import { EnrollmentForm } from './features/enrollment/enrollment-form/enrollment-form';
import { authGuard } from './guards/auth-guard';
import { CourseDetail } from './page/course-detail/course-detail';
import { NotFound } from './page/not-found/not-found';
import { ReactiveEnrollmentForm } from './features/enrollment/reactive-enrollment-form/reactive-enrollment-form';
export const routes: Routes = [
    {path:'',component:Home},
    {path:'courses',component:CourseList},
    {
    path: 'courses/:id',
    component: CourseDetail
  },
    {path:'profile',canActivate:[authGuard],component:StudentProfile},
    {
  path: 'enroll',canActivate:[authGuard],
  loadChildren: () =>

    import('./features/enrollment/enrollment-module')

      .then(m => m.EnrollmentModule)

},
    {path:'enroll-reactive',component:ReactiveEnrollmentForm},
    {
    path: '**',
    component: NotFound
  }
];
