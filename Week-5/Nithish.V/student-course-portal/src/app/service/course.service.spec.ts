import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CourseService } from './course.service';

describe('CourseService', () => {

  let service: CourseService;
  let httpMock!: HttpTestingController;

  const mockCourses = [
    {
      id: 1,
      name: 'Data Structures',
      code: 'CS101',
      credits: 4,
      gradeStatus: 'passed',
      enrolled:true
    },
    {
      id: 2,
      name: 'Angular',
      code: 'CS102',
      credits: 3,
      gradeStatus: 'pending',
      enrolled: false
    }
  ];

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CourseService]
    });

    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return courses', () => {

    service.getCourses().subscribe(courses => {

      expect(courses.length).toBe(2);
      expect(courses).toEqual(mockCourses);

    });

    const request = httpMock.expectOne('http://localhost:3000/courses');

    expect(request.request.method).toBe('GET');

    request.flush(mockCourses);

  });

  it('should handle server error', () => {

    service.getCourses().subscribe({

      next: () => {
        throw new Error('Expected an error');
      },

      error: error => {
        expect(error.message).toBe('Failed to load courses. Please try again.');
      }

    });

    const request = httpMock.expectOne('http://localhost:3000/courses');

    request.flush('Server Error', {
      status: 500,
      statusText: 'Internal Server Error'
    });

  });

});