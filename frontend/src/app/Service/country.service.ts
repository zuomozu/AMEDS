import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  // private serverUrl = 'http://localhost:4000';
  private serverUrl = environment.baseUrl;

  private countryAPI = 'https://restcountries.com/v3.1/all'


  constructor(private http: HttpClient) { }

  
  fetchCountryAPI(): Observable<any> {
    return this.http.get(`${this.countryAPI}`);
  }
  
  addCountry(countryData: any): Observable<any> {
    return this.http.post(`${this.serverUrl}/countryadd`, countryData);
  }

  getcountryData(): Observable<any> {
    return this.http.get(`${this.serverUrl}/countrydata`);
  }
  searchCountry(search: string): Observable<any> {
    const params = {
      search: search,
    };
    return this.http.get(`${this.serverUrl}/searchcountry/`, { params: params });
  }


}
