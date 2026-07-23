import { Component } from '@angular/core';
import { NotificationService } from '../service/notification.service';
/*
Component-level providers create a new NotificationService
instance for this component and its child components.

Each NotificationComponent gets its own separate service
instance instead of sharing one across the application.
*/
@Component({

  selector: 'app-notification',

  standalone: true,

  templateUrl: './notification.html',

  styleUrls: ['./notification.css'],

  providers: [

    NotificationService

  ]

})
export class NotificationComponent {

  constructor(

    private notificationService: NotificationService

  ) {}

}