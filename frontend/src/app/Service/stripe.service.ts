import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StripeService {
  // url = "http://localhost:4000"
  private serverUrl = environment.baseUrl;


  constructor(private http :HttpClient) { }

  getcard(id:any ){
    // console.log(id);
    return this.http.get(`${this.serverUrl}/getcard/` + id)
  }

  deletecard(id:any){
    return this.http.delete(`${this.serverUrl}/deletecard/` + id)
  }
}
