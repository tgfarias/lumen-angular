import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SistemasService } from './service/sistemas.service';
import { AppComponent } from './app.component';
import { SistemaListComponent } from './sistema-list/sistema-list.component';
import { SistemaCreateComponent } from './sistema-create/sistema-create.component';
import { AppRoutingModule } from './app-routing.module';
import { SistemaSearchComponent } from './sistema-search/sistema-search.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SistemaListComponent,
    SistemaCreateComponent,
    SistemaSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [SistemasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
