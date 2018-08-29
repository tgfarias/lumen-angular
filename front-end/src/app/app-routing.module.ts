import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SistemaCreateComponent } from './sistema-create/sistema-create.component';
import { SistemaListComponent } from './sistema-list/sistema-list.component';
import { SistemaSearchComponent } from './sistema-search/sistema-search.component';

const routes: Routes = [
    { path:  '', redirectTo:  'sistema/search', pathMatch:  'full' },
    { path: 'sistema/search', component: SistemaSearchComponent },
    { path: 'sistema/list', component: SistemaListComponent },
    { path: 'sistema/create', component: SistemaCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
