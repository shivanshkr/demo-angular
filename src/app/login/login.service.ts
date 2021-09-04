import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiURl = environment.apiUrl + '/users';

  constructor(private http: HttpClient) {}

  loginUser(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiURl}/login`, data).pipe(
      tap((res) => {
        console.log(res.token);
        localStorage.setItem('jwtToken', res.token);
      })
    );
  }
  signUpUser(data: any): Observable<any> {
    return this.http.post<any>(this.apiURl, data);
  }
}
