import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { info } from './interface/info.model';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  constructor(private http: HttpClient) { }

  sendEmail(obj): Observable<info> {
    return this.http.post<info>('http://localhost:3000/sendFormData', obj)
  }
}
