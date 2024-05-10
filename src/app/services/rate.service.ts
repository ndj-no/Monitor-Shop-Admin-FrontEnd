import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RateService {

  url = environment.apiURL + '/api/rates';

  constructor(private httpClient: HttpClient) { }

  getAllRate() {
    return this.httpClient.get(this.url);
  }

  delete(id:number) {
    return this.httpClient.delete(this.url+'/'+id);
  }
}
