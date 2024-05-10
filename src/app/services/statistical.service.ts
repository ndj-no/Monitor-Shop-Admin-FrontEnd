import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatisticalService {

  url = environment.apiURL + '/api/statistical';

  constructor(private httpClient: HttpClient) { }

  //lay du lieu tu thang 1 -12
  getStatisticalYear(year:number) {
    return this.httpClient.get(this.url+'/'+year);
  }

  //lay du lieu co trong database
  getMonth() {
    return this.httpClient.get(this.url+'/month/');
  }

  getDate() {
    return this.httpClient.get(this.url+'/date');
  }

  getYear() {
    return this.httpClient.get(this.url+'/years');
  }

  //lay so nam
  getYears() {
    return this.httpClient.get(this.url+'/year');
  }
}
