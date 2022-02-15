import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './pages-routing.module';
import { PageHomeComponent } from './page-home/page-home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { UrlShortenerComponent } from './url-shortener/url-shortener.component';
import { UrlsComponent } from './urls/urls.component';
import { HeaderComponent } from './header/header.component';
import { PaginationComponent } from '../shared/components/pagination/pagination.component';


@NgModule({
  declarations: [
    
    PageHomeComponent,
    UrlShortenerComponent,
    UrlsComponent,
    HeaderComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
