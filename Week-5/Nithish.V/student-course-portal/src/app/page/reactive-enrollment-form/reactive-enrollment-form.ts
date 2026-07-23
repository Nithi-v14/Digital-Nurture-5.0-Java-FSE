import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { noCourseCode,simulateEmailCheck } from '../../validator/custom-validator/custom-validator';
@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './reactive-enrollment-form.html',
  styleUrls: ['./reactive-enrollment-form.css']
})
export class ReactiveEnrollmentForm implements OnInit {

  enrollForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
additionalCourses: this.fb.array([])
    this.enrollForm = this.fb.group({

      studentName: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],

    studentEmail: this.fb.control(
    '',

    [
        Validators.required,
        Validators.email
    ],

    [
        simulateEmailCheck
    ]

),

      courseId: [
        '',[
        Validators.required,
        noCourseCode]
      ],

      preferredSemester: [
        'Odd',
        Validators.required
      ],

      agreeToTerms: [
        false,
        Validators.requiredTrue
      ],
      additionalCourses: this.fb.array([])
    });

  }
get additionalCourses(): FormArray<FormControl> {

    return this.enrollForm.get(
        'additionalCourses'
    ) as FormArray;

}
  onSubmit(): void {

    console.log("Form Value");

    console.log(this.enrollForm.value);

    console.log("Raw Value");

    console.log(this.enrollForm.getRawValue());

  }
  addCourse(): void {

    this.additionalCourses.push(

        new FormControl(
            '',
            Validators.required
        )

    );

}

removeCourse(index: number): void {

    this.additionalCourses.removeAt(index);

}
}