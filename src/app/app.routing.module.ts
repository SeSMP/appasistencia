import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { EscanerqrPage } from './escanerqr/escanerqr.page';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'escanerqr', component: EscanerqrPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }