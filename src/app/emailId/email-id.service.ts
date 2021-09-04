import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmailIdService {
  apiURl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllEmailIds(): Observable<any> {
    return this.http.get<any>(`${this.apiURl}/emailIds`);
  }
  getEmailIdById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiURl}/emailId/${id}`);
  }
  deleteEmailIdById(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiURl}/emailId/${id}`);
  }
  createEmailId(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiURl}/emailId`, data);
  }
  updateEmailId(data: any): Observable<any> {
    return this.http.put<any>(`${this.apiURl}/emailId`, data);
  }
  getEmailIdByCategory(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiURl}/emailId/category/${id}`);
  }
}
