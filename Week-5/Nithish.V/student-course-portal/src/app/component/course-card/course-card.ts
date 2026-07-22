import { Component } from '@angular/core';
import { Input,Output,EventEmitter,OnChanges,OnInit,OnDestroy,SimpleChanges} from '@angular/core';
@Component({
  selector: 'app-course-card',
  imports: [],
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
}
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
  this.enrollRequested.emit(this.course.id);
}
}
