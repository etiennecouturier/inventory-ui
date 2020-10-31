import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ManufacturersPage} from '../model/manufacturers.page';
import {Manufacturer} from '../model/manufacturer';


@Injectable()
export class ManufacturersService {

    constructor(private http: HttpClient) {}

    findManufacturers(offset, limit):  Observable<ManufacturersPage> {
      let params = new HttpParams();
      params = params.set('page', offset);
      params = params.set('size', limit);
      return this.http.get<ManufacturersPage>('http://localhost:8080/manufacturers/filter/', {params : params});
    }

  findAllManufacturers():  Observable<Array<Manufacturer>> {
    return this.http.get<Array<Manufacturer>>('http://localhost:8080/manufacturers/all');
  }

}
