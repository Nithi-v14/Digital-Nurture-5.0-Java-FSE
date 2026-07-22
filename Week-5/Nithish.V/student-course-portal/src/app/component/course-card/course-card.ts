import { Component } from '@angular/core';
import { Input,Output,EventEmitter,OnChanges,OnInit,OnDestroy,SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
@Component({
  selector: 'app-course-card',
  imports: [CommonModule,CreditLabelPipe],
  standalone: true,
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard implements OnChanges,OnInit,OnDestroy{
@Input() 
course!:{
  id:number;
  name:string;
  code:string;
  credits:number;
  gradeStatus:string;
  enrolled:boolean;
}
isExpanded = false;
isEnrolled = false;
@Output()
enrollRequested=new EventEmitter<number>();
ngOnInit(): void {
    console.log("HomeComponent initialized - courses loaded");
}
ngOnChanges(changes: SimpleChanges): void {

    console.log("Course Input Changed");

    console.log(changes);

    console.log("Previous Value");

    console.log(changes['course']?.previousValue);

    console.log("Current Value");

    console.log(changes['course']?.currentValue);

  }
ngOnDestroy(): void {
    console.log("HomeComponent destroyed - courses unloaded");
}
enroll()
{
    this.isEnrolled = true;
  this.enrollRequested.emit(this.course.id);
}
get cardClasses() {
  return {
    'card--enrolled': this.course.enrolled,
    'card--full': this.course.credits >= 4,
    'expanded': this.isExpanded
  };
}
get borderColor(): string {

  switch (this.course.gradeStatus) {

    case 'passed':
      return 'green';

    case 'failed':
      return 'red';

    default:
      return 'gray';
  }
}
toggleDetails() {

  this.isExpanded = !this.isExpanded;

}

}
