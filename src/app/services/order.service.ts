import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../common/Order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  urlOD = environment.apiURL + '/api/order-detail';

  urlO = environment.apiURL + '/api/orders';

  constructor(private httpClient: HttpClient) { }

  getOrder(id:number) {
    return this.httpClient.get(this.urlO+'/'+id);
  }

  update(id:number, order:Order) {
    return this.httpClient.put(this.urlO+'/'+id, order);
  }

  getByOrder(id:number) {
    return this.httpClient.get(this.urlOD+'/order/'+id);
  }

  getAllOrder() {
    return this.httpClient.get(this.urlO);
  }

  getWait() {
    return this.httpClient.get(this.urlO+'/wait');
  }
}
