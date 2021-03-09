import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../student';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  base_path = "http://localhost:3000/students"

  constructor(private http:HttpClient) { }

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/jason'
    })
  }
  createStudent(student:any):Observable<Student>{
return this.http
.post <Student>(this.base_path, JSON.stringify(student), this.httpOptions)

  }
}
