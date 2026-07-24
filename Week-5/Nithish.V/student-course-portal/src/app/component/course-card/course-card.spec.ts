import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { CourseCard } from './course-card';
import { By } from '@angular/platform-browser';
import { SimpleChange } from '@angular/core';
describe('CourseCard', () => {
  let component: CourseCard;
  let fixture: ComponentFixture<CourseCard>;
const mockCourse = {

  id: 1,

  name: 'Data Structures',

  code: 'CS101',

  credits: 4,

  gradeStatus: 'passed',

  enrolled: false

};
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCard],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
     fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render course name', () => {

  component.course = mockCourse;

  fixture.detectChanges();

  const heading = fixture.debugElement

    .query(By.css('h3'))

    .nativeElement;

  expect(heading.textContent)

    .toContain('Data Structures');

});
it('should emit enroll event', () => {

  component.course = mockCourse;

  fixture.detectChanges();

 const emitSpy = vi.spyOn(component.enrollRequested, 'emit');
 expect(emitSpy).toHaveBeenCalledWith(1);

  fixture.debugElement

    .query(By.css('button'))

    .nativeElement

    .click();

  fixture.detectChanges();

  expect(

    component.enrollRequested.emit

  ).toHaveBeenCalledWith(1);

});
it('should call ngOnChanges', () => {

  const logSpy = vi.spyOn(console, 'log');

  component.ngOnChanges({
    course: new SimpleChange(
      null,
      mockCourse,
      true
    )
  });

  expect(logSpy).toHaveBeenCalled();

});
  expect(console.log)

    .toHaveBeenCalled();

});

