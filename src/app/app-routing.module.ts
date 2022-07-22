import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KsaPartnerapiComponent } from './ksa-partnerapi/ksa-partnerapi.component';

const routes: Routes = [
  { path: 'partner-ksa', component: KsaPartnerapiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
