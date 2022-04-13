import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'; 
import { PostlistComponent } from './components/dashboard/postlist/postlist.component';
import { UserlistComponent } from './components/dashboard/userlist/userlist.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './_helpers/auth-guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]  }, 
  { path: 'dashboard/userlist', component: UserlistComponent, canActivate: [AuthGuard]  }, 
  { path: 'dashboard/postlist', component: PostlistComponent, canActivate: [AuthGuard]  }, 
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }