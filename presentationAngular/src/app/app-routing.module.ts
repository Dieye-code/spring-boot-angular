import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocaliteComponent } from './component/localite/localite.component';

const routes: Routes = [
  {
    path:"Localite",
    component: LocaliteComponent
  },
  {
    path:"",
    component: LocaliteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
