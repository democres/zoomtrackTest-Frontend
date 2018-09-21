import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsEditComponent } from './news-edit/news-edit.component';
import { NewsAddComponent } from './news-add/news-add.component';
import { LoginComponent } from './login/login.component';

import { AlertService, AuthenticationService, UserService } from './_services';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'news-feed',
    component: NewsComponent,
    data: { title: 'News List' }
  },
  {
    path: 'news-details/:id',
    component: NewsDetailComponent,
    data: { title: 'News Details' }
  },
  {
    path: 'news-add',
    component: NewsAddComponent,
    data: { title: 'News Add' }
  },
  {
    path: 'news-edit/:id',
    component: NewsEditComponent,
    data: { title: 'News Edit' }
  },
  { path: '',
    redirectTo: '/news-feed',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NewsDetailComponent,
    NewsEditComponent,
    NewsAddComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AlertService,
    AuthenticationService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
