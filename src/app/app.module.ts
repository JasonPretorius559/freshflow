import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';

// DevExtreme imports (merged)
import {
  DxButtonModule,
  DxChartModule,
  DxPieChartModule,
  DxTextBoxModule,
  DxValidatorModule,
  DxDrawerModule,
  DxListModule,
  DxToolbarModule,
  DxDrawerComponent,
  DxDataGridModule,
  DxDropDownButtonModule,
  DxLoadPanelModule,
  DxPopupModule,
  DxCheckBoxModule,
  
 
} from 'devextreme-angular';

import { LoginComponent } from './Pages/login/login.component';
import { AppRoutingModule } from './app-routing.module';

import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { IntakeComponent } from './Pages/intake/intake.component';
import { LoadPoPopupComponent } from './Pages/intake/load-po-popup/load-po-popup.component';
import { EditIntakeComponent } from './Pages/intake/edit-intake/edit-intake.component';
import { StockGridComponent } from './Pages/stock/stock.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    MainLayoutComponent,
    IntakeComponent,
    LoadPoPopupComponent,
    EditIntakeComponent,
    StockGridComponent,
  ],
  imports: [
    BrowserModule,
    DxDrawerModule,
    DxTextBoxModule,
    DxButtonModule,
    DxValidatorModule,
    AppRoutingModule,
    DxChartModule,
    DxPieChartModule,
    DxListModule,
    HttpClientModule,
    DxToolbarModule,
    DxDrawerComponent,
    DxDataGridModule,
    DxDropDownButtonModule,
    DxLoadPanelModule,
    DxPopupModule,
    
    
    
    DxCheckBoxModule
     
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
