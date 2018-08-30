import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Sistema } from '../sistema';
import { SistemasService } from '../service/sistemas.service';
// import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-sistema-search',
  templateUrl: './sistema-search.component.html',
  styleUrls: ['./sistema-search.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class SistemaSearchComponent implements OnInit {
  sistemas: Array<Sistema>;
  isSearch = false; 

//   public config: PaginationInstance = {
//     id: 'custom',
//     itemsPerPage: 10,
//     currentPage: 1
// };

  isShowFail = false; // MN001
  messageFail = 'Nenhum Sistema foi encontrado. Favor revisar os critérios da sua pesquisa!'; // MN001
  messageShow = '';
  patternEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // RN003 - Validação de E-mail
  rForm: FormGroup;

  constructor(private fb: FormBuilder, private api: SistemasService) {
    this.rForm = fb.group({
      'descricao' : new FormControl(),
      'sigla' : new FormControl(),
      'email' : new FormControl(null, { validators: [Validators.pattern(this.patternEmail)]})
    });
  }

  ngOnInit() {
  }

  search() {
    const data = this.rForm.value;
    if (data.descricao == null && data.sigla == null && data.email == null) {
      this.isShowFail = true;
      this.isSearch = false;
      this.messageShow = 'Favor inserir filtro para pesquisa.'
    } else {
      this.isShowFail = false;
      console.log(data);
      this.api.searchSistemas(data).subscribe(
        res => {
          console.log(res);
          
          this.sistemas = res;
          console.log(this.sistemas.length);
          if (this.sistemas.length > 0) {
            console.log("entrou");
            this.isSearch = true;
          } else {
            this.isShowFail = true;
            this.isSearch = false;
            this.messageShow = this.messageFail;
          }
        }
      ),
        // tslint:disable-next-line:no-unused-expression
        err => console.log(err);
    }
  }

  clear() {
    this.rForm.reset();
    if (this.sistemas !==  undefined) {
      this.sistemas.length = 0;
    }
    this.isSearch = false;
    this.isShowFail = false;
    
  }

  public getStatus(status) {
    return status === 1 ? 'Ativo' : 'Cancelado';
  }
}
