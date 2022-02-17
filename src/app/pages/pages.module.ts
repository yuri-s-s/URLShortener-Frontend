import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { PageRoutingModule } from './pages-routing.module';
import { PageHomeComponent } from './page-home/page-home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { UrlShortenerComponent } from './url-shortener/url-shortener.component';
import { UrlsComponent } from './urls/urls.component';
import { HeaderComponent } from './header/header.component';
import { PaginationComponent } from '../shared/components/pagination/pagination.component';
import { UrlDetailsComponent } from './url-details/url-details.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { SafeUrlPipe } from '../core/services/safe-url.pipe';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [
    
    PageHomeComponent,
    UrlShortenerComponent,
    UrlsComponent,
    HeaderComponent,
    PaginationComponent,
    UrlDetailsComponent,
    SafeUrlPipe,
    UserComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    ReactiveFormsModule,
    FormsModule,
    HighchartsChartModule,
  ]
})
export class PageModule { }
