import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './Pages/login/login.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { IntakeComponent } from './Pages/intake/intake.component';

const routes: Routes = [
  // Public route (no sidebar)
  { path: 'login', component: LoginComponent },

  // Layout route (with sidebar)
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent }
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'intakes', component: IntakeComponent }
    ]
  },

  // Redirects
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
