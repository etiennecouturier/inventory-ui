import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {ProductHistory} from '../model/product-history';

@Injectable()
export class ProductHistoryService {

  constructor(private http: HttpClient) {
  }

  findProductHistoryByProduct(url: string, productId: string): Observable<Array<ProductHistory>> {
    let params = new HttpParams();
    params = params.set('productId', productId);
    return this.http.get<Array<ProductHistory>>(environment.baseUrl + url, {params : params});
  }
}