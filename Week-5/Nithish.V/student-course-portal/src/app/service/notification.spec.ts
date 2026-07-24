import { NotificationComponent } from './../notification/notification';
import { NotificationService } from './notification.service';
import { TestBed } from '@angular/core/testing';

// import { NotificationComponent } from './NotificationComponent';
imports:[NotificationComponent]
describe('Notification', () => {
  let service: NotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
