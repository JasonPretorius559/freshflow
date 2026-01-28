import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// DevExtreme imports
import { DxButtonModule } from 'devextreme-angular';
import { DxChartModule, DxPieChartModule } from 'devextreme-angular';

import { DxTextBoxModule } from 'devextreme-angular';
import { DxValidatorModule } from 'devextreme-angular';
import { LoginComponent } from './Pages/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
 
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DxTextBoxModule,
    DxButtonModule,
    DxValidatorModule,
    AppRoutingModule,
    DxChartModule,
    DxPieChartModule

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
