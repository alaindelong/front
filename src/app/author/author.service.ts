import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthorService {
private url= '../../assets/data.json' ;

  constructor(private http: Http) { }

  getAuthors() {
    return this.http.get(this.url)
           .map((response: Response) => response.json())
           .catch(this.errorHandler);
  }
  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error || 'server error');
  }
}
