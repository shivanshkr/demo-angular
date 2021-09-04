import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiURl = environment.apiUrl + '/users';

  constructor(private http: HttpClient) {}

  loginUser(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiURl}/login`, data);
  }
  signUpUser(data: any): Observable<any> {
    return this.http.post<any>(this.apiURl, data);
  }
}
