import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Sistema } from '../sistema';
import { SistemasService } from '../service/sistemas.service';

@Component({
  selector: 'app-sistema-search',
  templateUrl: './sistema-search.component.html',
  styleUrls: ['./sistema-search.component.css']
})
export class SistemaSearchComponent implements OnInit {
  sistemas: Array<Sistema>;
  isSearch = false;
  isShow = false;
  isShowFail = false;
  rForm: FormGroup;

  constructor(private fb: FormBuilder, private api: SistemasService) {
    this.rForm = fb.group({
      'descricao' : new FormControl(),
      'sigla' : new FormControl(),
      'email' : new FormControl('', { validators: [Validators.email] })
    });
  }

  ngOnInit() {
  }

  search() {

    const data = this.rForm.value;
    console.log(data);
    
    // if(data.descricao == "" || data.descricao == null)
    //   data.descricao = null;
    // else
    //   this.isSearch = true;

    // if(data.sigla == "" || data.sigla == null)
    //   data.sigla == null;
    // else
    //   this.isSearch = true;
    
    // if(data.email = "" || data.email == null)
    //   data.email == null;
    // else
    //   this.isSearch = true;
    
    // if(!this.isSearch)
    //   this.isShowFail = true;
    // else{

      console.log(data);
      this.api.searchSistemas(data).subscribe(
        res => { 
          this.sistemas = res;
          console.log(this.sistemas);
          if(this.sistemas.length > 0){
            this.isSearch = true;
          }
          else{
            this.isShowFail = true;
          }
        }
      ),
      err => console.log(err);
    }
  // }

  clear() {
    this.rForm.reset();
    this.sistemas.length = 0;
    this.isSearch = false;
  }

  public getStatus(status) {
    return status === 1 ? 'Ativo' : 'Cancelado';
  }
}
