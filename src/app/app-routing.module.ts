import { MainLayoutComponent } from './main-layout/main-layout.component';
import { PageListComponent } from './page-list/page-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MainLayoutComponent , children: [
    { path: '', component: PageListComponent }
  ] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
