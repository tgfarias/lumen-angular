import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from  '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SistemasService {
  public serverpath: string = 'http://localhost:8000/';

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  constructor(
    private http: HttpClient
  ) { }

  getSistemas(){
    return  this.http.get(this.serverpath + 'sistemas/list', { headers : this.headers});
  }
}
