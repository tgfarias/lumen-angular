import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sistema-search',
  templateUrl: './sistema-search.component.html',
  styleUrls: ['./sistema-search.component.css']
})
export class SistemaSearchComponent implements OnInit {
  rForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'descricao': '',
      'sigla': '',
      'email' : [null, Validators.email]
    });
  }

  ngOnInit() {
  }

  novo() {

  }

  search() {
    console.log(this.rForm.value);
  }

}
