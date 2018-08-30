import { Sistema } from './../sistema';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SistemasService {
  // public serverpath = 'http://apitem.local/';
  public serverpath = 'http://localhost:8000/';

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  constructor(
    private http: HttpClient
  ) { }

  getSistemas() {
    return  this.http.get(this.serverpath + 'sistemas/list', { headers : this.headers});
  }

  saveSistema(sistema: Sistema) {
    const h = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
    });

    console.log(sistema);


    return this.http.post<any>(this.serverpath + 'sistemas/create',
      { descricao: sistema.descricao,
        sigla: sistema.sigla,
        email: sistema.email,
        url: sistema.url },
      {headers: h} );
  }


  searchSistemas(params: any) {
    const h = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
    });

    return this.http.post<any[]>(this.serverpath + 'sistemas/search', params, {headers: h} );
  }
}
