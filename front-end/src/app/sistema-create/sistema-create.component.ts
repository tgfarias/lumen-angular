import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Sistema } from '../sistema';
import { Router } from '@angular/router';
import { SistemasService } from '../service/sistemas.service';

@Component({
  selector: 'app-sistema-create',
  templateUrl: './sistema-create.component.html',
  styleUrls: ['./sistema-create.component.css']
})
export class SistemaCreateComponent implements OnInit {
  sis: Sistema;
  public saved = false;
  success = 'Operação realizada com sucesso.';
  rForm: FormGroup;
  constructor(
    private fb: FormBuilder, 
    private api: SistemasService, 
    public router: Router) {
    this.rForm = fb.group({
      'descricao': new FormControl('', {validators: [Validators.required], updateOn: 'blur'} ),
      'sigla': new FormControl('', {validators: [Validators.required, Validators.maxLength(10)], updateOn: 'blur'} ),
      'email': new FormControl('', {validators: [Validators.email], updateOn: 'blur'} ),
      'url' : new FormControl(),
     });
  }

  ngOnInit() {
  }

  save() {
    const data = this.rForm.value;
    this.sis = new Sistema(
      data.descricao,
      data.sigla,
      data.email,
      data.url
    );


    this.api.saveSistema(this.sis).subscribe(
      res => {
        console.log(res);
      if (res.cod_sistema) {
        this.saved = true;
        this.rForm.reset();
        this.router.navigate(['sistema/search']);
      }
    }
    ),
    err => console.log(err);
  }



}
