import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  // private serverUrl = 'http://localhost:4000';
  private serverUrl = environment.baseUrl;


  constructor(private http:HttpClient) { }

  registerVehicle(vehicleData: FormData): Observable<any> {
    return this.http.post(`${this.serverUrl}/vehicleadd`, vehicleData);
  }

  getvehicleData(): Observable<any> {
    return this.http.get(`${this.serverUrl}/vehicledata`);
  }

  updateVehicle(vehicleId: string, vehicleData: any): Observable<any> {
    console.log(vehicleId)
    const url = `${this.serverUrl}/updateVehicle/${vehicleId}`;
    return this.http.put<any>(url, vehicleData);
  }

}
