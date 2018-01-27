import { Component, OnInit, Input, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CourseService } from './course.service';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers: [CourseService]
})
export class CourseComponent implements OnInit {

  title = 'course';
  courses: string[];
  constructor(courseService: CourseService) {
    this.courses = courseService.getCourses();
   }
 @Input() parentData: string;
 @Output() childEvent = new EventEmitter<string>();

  ngOnInit() {
  }
  onChange(value: string) {
    this.childEvent.emit(value);
  }
}
