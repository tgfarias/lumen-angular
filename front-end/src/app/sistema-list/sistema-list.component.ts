import { Component, OnInit } from '@angular/core';
import { SistemasService } from './../service/sistemas.service';
import { Sistema } from '../sistema';

@Component({
  selector: 'app-sistema-list',
  templateUrl: './sistema-list.component.html',
  styleUrls: ['./sistema-list.component.css']
})
export class SistemaListComponent implements OnInit {
  public sistemas:  Array<Sistema> = [];
  constructor(private api: SistemasService) { }

  ngOnInit() {
    this.getSistemas();
  }

  public getSistemas() {
    this.api.getSistemas().subscribe(
      (data: Array<Sistema>) => {
        this.sistemas = data;
        console.log(data);
      }
    );
  }

  public getStatus(status) {
    return status === 1 ? 'Ativo' : 'Cancelado';
  }

}
