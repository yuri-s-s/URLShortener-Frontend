import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './page-home/page-home.component';
import { UrlsComponent } from './urls/urls.component';

const routes: Routes = [
  {
    path: "",
    component: PageHomeComponent
  },
  {
    path: "urls",
    component: UrlsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
