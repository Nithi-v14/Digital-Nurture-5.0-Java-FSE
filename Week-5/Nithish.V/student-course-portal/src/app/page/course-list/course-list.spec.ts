import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseList } from './course-list';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';
// import { CourseListComponent } from './course-list.com;
describe('CourseList', () => {
  let component: CourseList;
  let fixture: ComponentFixture<CourseList>;
const mockCourses = [

  {

    id:1,

    name:'Angular',

    code:'CS101',

    credits:4,

    gradeStatus:'passed',
    enrolled:true

  },

  {

    id:2,

    name:'Java',

    code:'CS102',

    credits:3,

    gradeStatus:'pending',
    enrolled:false
  }

];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseList],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  let store: MockStore;

beforeEach(async () => {

  await TestBed.configureTestingModule({

    imports: [

      CourseList

    ],

    providers: [

      provideMockStore({

        initialState: {

          course: {

            courses: mockCourses,

            loading: false,

            error: null

          }

        }

      })

    ]

  }).compileComponents();

  store = TestBed.inject(MockStore);

  fixture = TestBed.createComponent(

    CourseList

  );

  component = fixture.componentInstance;

  fixture.detectChanges();

});
it('should render courses', () => {

  fixture.detectChanges();

  const cards = fixture.debugElement.queryAll(

    By.css('app-course-card')

  );

  expect(cards.length).toBe(2);

});
it('should display loading indicator', () => {

  store.setState({

    course: {

      courses: [],

      loading: true,

      error: null

    }

  });

  fixture.detectChanges();

  const loading = fixture.debugElement.query(

    By.css('.loading')

  );

  expect(loading).toBeTruthy();

});
});
