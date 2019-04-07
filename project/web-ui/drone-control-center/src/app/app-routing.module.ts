import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {InventoryComponent} from './inventory/inventory.component';
import {AdminComponent} from './admin/admin.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {AuthGuardService} from './auth-guard.service';
import {HomeComponent} from './home/home.component';
import {NavigationComponent} from "./navigation/navigation.component";
import {register} from "ts-node";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  {
    path: 'home', component: NavigationComponent,
    children: [
      {path: '', redirectTo: 'profile', pathMatch: 'full'},
      {path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService]},
      {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]},
      {path: 'inventory', component: InventoryComponent, canActivate: [AuthGuardService]},
      {path: 'admin', component: AdminComponent, canActivate: [AuthGuardService]},
      {path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
