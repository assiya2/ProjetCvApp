import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'http://localhost:5000/api/users/profile'; // URL de l'API

  constructor(private http: HttpClient) {}

  getProfile(): Observable<any> {
    return this.http.get<any>(this.apiUrl); // Assurez-vous que l'URL est correcte
  }

  updateProfile(photo: File | null, name: string, email: string): Observable<any> {
    const formData = new FormData();
    if (photo) formData.append('photo', photo);
    formData.append('name', name);
    formData.append('email', email);

    return this.http.put(`${this.apiUrl}/update`, formData);
  }
}
