import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { IngenieriaDatosComponent } from './dashboard/dashboard-components/blog-cards/ingenieria-datos/ingenieria-datos.component';
import { AnalisisDatosComponent } from './dashboard/dashboard-components/blog-cards/analisis-datos/analisis-datos.component';
import { FrontComponent} from './dashboard/dashboard-components/blog-cards/front/front.component';
import { BackComponent } from './dashboard/dashboard-components/blog-cards/back/back.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
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
      // Agregando rutas para los componentes específicos
      { path: 'ingenieria-datos', component: IngenieriaDatosComponent },
      { path: 'analisis-datos', component: AnalisisDatosComponent },
      { path: 'front', component: FrontComponent },
      { path: 'back', component: BackComponent }

    ]
  },
  {
    path: '**',
    redirectTo: '/starter'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(Approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
