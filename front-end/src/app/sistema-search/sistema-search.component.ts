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
  patternEmail = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2.4}$';

  constructor(private fb: FormBuilder, private api: SistemasService) {
    this.rForm = fb.group({
      'descricao' : new FormControl(),
      'sigla' : new FormControl(),
      'email' : new FormControl(null, { validators: [Validators.pattern(this.patternEmail)]})
    });
  }

  emailDomainValidator(control: FormControl) {
    const email = control.value;
    if (email && email.indexOf('@') !== -1) {
      const [_, domain] = email.split('@');
      if (domain && domain.indexOf('.') !== -1) {
        console.log(domain);
      }
      if (domain !== 'codecraft.tv') {
        return {
          emailDomain: {
            parsedDomain: domain
          }
        };
      }
    }
    return null;
  }

  ngOnInit() {
  }

  search() {

    const data = this.rForm.value;

    console.log(this.rForm.getRawValue());
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
      if (data.descricao == null && data.sigla == null && data.email == null) {

      } else {
        console.log(data);
        this.api.searchSistemas(data).subscribe(
          res => {
            this.sistemas = res;
            if (this.sistemas.length > 0) {
              this.isSearch = true;
            } else {
              this.isShowFail = true;
            }
          }
        ),
        // tslint:disable-next-line:no-unused-expression
        err => console.log(err);
      }
    }
  // }

  clear() {
    this.rForm.reset();
    if (this.sistemas !==  undefined) {
      this.sistemas.length = 0;
    }
    this.isSearch = false;
  }

  public getStatus(status) {
    return status === 1 ? 'Ativo' : 'Cancelado';
  }
}
