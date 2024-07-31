import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './login/login.component';
import { InboxComponent } from './inbox/inbox.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Ruta para el login independiente
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      {
        path: 'homepage',
        loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      },
      {
        path: 'recommendations',
        loadChildren: () => import('./recommendations/recommendations.module').then(m => m.RecommendationsModule)
      },
      {
        path: 'resources',
        loadChildren: () => import('./resources/resources.module').then(m => m.ResourcesModule)
      },
      {
        path: 'h-bi',
        loadComponent: () => import('./resources/blog-cards/4-h-bi/h-bi.component').then(m => m.hBiComponent)
      },
      {
        path: 'h-plataformas-datos',
        loadComponent: () => import('./resources/blog-cards/7-h-plataformas-datos/h-plataformas-datos.component').then(m => m.hPlataformasDatosComponent)
      },
      {
        path: 'front',
        loadComponent: () => import('./resources/blog-cards/2-front/front.component').then(m => m.FrontComponent)
      },
      { path: 'back',
        loadComponent: () => import('./resources/blog-cards/3-back/back.component').then(m => m.BackComponent)
      },
      {
        path: 'inbox',
        component: InboxComponent
      }
    ]
  },
  { path: '**', redirectTo: '/homepage' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
