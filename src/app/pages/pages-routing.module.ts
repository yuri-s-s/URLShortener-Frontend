import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './page-home/page-home.component';
import { UrlDetailsComponent } from './url-details/url-details.component';
import { UrlsComponent } from './urls/urls.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: "",
    component: PageHomeComponent
  },
  {
    path: "urls",
    component: UrlsComponent
  },
  {
    path: "user",
    component: UserComponent
  },
  {
    path: "urls/url/:url",
    component: UrlDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
