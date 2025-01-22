import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private Server = 'http://localhost:3000/students';

  constructor(private http: HttpClient) {}

  // Function to get students
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.Server);
  }
  // Get a single student by ID
  getStudent(id: number): Observable<Student> {
    return this.http.get<Student>(`$${this.Server}/${id}`);
  }
  // Add a new student
  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.Server, student);
  }
  // Update an existing student
  updateStudent(id: number, student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.Server}/${id}`, student);
  }
  // Delete a student by ID
  deleteStudent(id: number): Observable<{}> {
    return this.http.delete<{}>(`${this.Server}/${id}`);
  }
}
