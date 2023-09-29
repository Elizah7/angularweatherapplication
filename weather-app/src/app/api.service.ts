import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://frail-gold-swallow.cyclic.cloud/weather/'; 

  
  constructor(private http: HttpClient ) { }

  getdata(){
    const url = `${this.baseUrl}`;
    return this.http.get(url);
  }
  getsingledata(city:string){
    const url = `${this.baseUrl}/${city}`;
    return this.http.get(url);
  }
  

  updatesingledata(city: string, updatedData: string): Observable<any> {
    const url = `${this.baseUrl}/${city}`;
    const body = { "rating":updatedData }; // Data to be sent in the PATCH request body

    return this.http.patch(url, body);
  }
}
