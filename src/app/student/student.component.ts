import { Student } from './student.model';
import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

 @Input() student: Student
// @Input() isJedi: Boolean = true
  
  constructor() { }

  ngOnInit() {
  }

}
