import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  CommonModule, LocationStrategy,
  PathLocationStrategy
} from '@angular/common';
import { NgbModule, NgbModalModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { NgbNav, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';
import { NavigationComponent } from './shared/header/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';
import { InboxComponent } from './inbox/inbox.component';

import { LoginComponent, InvalidCredentialsModalContent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    InboxComponent,
    LoginComponent,
    InvalidCredentialsModalContent,
    HomepageComponent,


  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      {
        path: '',
        component: FullComponent,
        children: [
          { path: '', redirectTo: '/login', pathMatch: 'full' },
          { path: 'homepage', component: HomepageComponent },
          // otras rutas aquí
          {
            path: 'dashboard',
            loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) // Cargar módulo de dashboard
          },
          {
            path: 'about',
            loadChildren: () => import('./about/about.module').then(m => m.AboutModule) // Cargar módulo de about
          },
          {
            path: 'component',
            loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule) // Cargar módulo de component
          },
          {
            path: 'recommendations',
            loadChildren: () => import('./recommendations/recommendations.module').then(m => m.RecommendationsModule) // Cargar módulo de recommendations
          },
          {
            path: 'resources',
            loadChildren: () => import('./resources/resources.module').then(m => m.ResourcesModule) // Cargar módulo de resources
          },
          {
            path: 'h-bi',
            loadComponent: () => import('./resources/blog-cards/4-h-bi/h-bi.component').then(m => m.hBiComponent) // Cargar componente h-bi
          },
          {
            path: 'h-plataformas-datos',
            loadComponent: () => import('./resources/blog-cards/7-h-plataformas-datos/h-plataformas-datos.component').then(m => m.hPlataformasDatosComponent) // Cargar componente h-plataformas-datos
          },
          {
            path: 'front',
            loadComponent: () => import('./resources/blog-cards/2-front/front.component').then(m => m.FrontComponent) // Cargar componente front
          },
          {
            path: 'back',
            loadComponent: () => import('./resources/blog-cards/3-back/back.component').then(m => m.BackComponent) // Cargar componente back
          },
          {
            path: 'inbox',
            component: InboxComponent // Añadir componente inbox
          }
        ]
      },
      { path: '**', redirectTo: '/login' } // Redirigir a login para rutas no encontradas
    ]),
    NgbNavModule,
  ],

  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
