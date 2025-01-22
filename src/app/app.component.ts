import { Component } from '@angular/core';
import { Student } from './student';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ang';
  students: Student[] = [];

  constructor(private strSrv: StudentService) {
    strSrv.getStudents().subscribe((res) => (this.students = res));
  }
}
