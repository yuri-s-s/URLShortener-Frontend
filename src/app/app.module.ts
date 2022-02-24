import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { JwtInterceptor } from './core/utils/jwt.interceptors';
import { HighchartsChartModule } from 'highcharts-angular';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HighchartsChartModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      progressBar: true
    })

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
