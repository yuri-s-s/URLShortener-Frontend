import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './pages/pages.module';
import { AuthGuard } from './core/utils/auth.guard';

const routes: Routes = [

  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
  },
  { 
    path: 'admin', 
    loadChildren: () => AdminModule,
    canActivate: [AuthGuard],
    data: { roles: ["ROLE_ADMIN"] }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
