import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiURl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<any> {
    return this.http.get<any>(`${this.apiURl}/categories`);
  }
  getCategoryById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiURl}/category/${id}`);
  }
  deleteCategoryById(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiURl}/category/${id}`);
  }
  createCategory(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiURl}/category`, data);
  }
  updateCategory(data: any, id: string): Observable<any> {
    return this.http.put<any>(`${this.apiURl}/category/${id}`, data);
  }
}
