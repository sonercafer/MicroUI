import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';  
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './components/menu/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserlistComponent } from './components/dashboard/userlist/userlist.component';
import { PostlistComponent } from './components/dashboard/postlist/postlist.component';
import { LoginService } from './services/login-service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserCardComponent } from './components/user-card/user-card.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { UserListService } from './services/user-list-service';
import { PostListService } from './services/post-list-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    SidebarComponent,
    DashboardComponent,
    UserlistComponent,
    PostlistComponent,
    UserCardComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [LoginService, UserListService, PostListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
