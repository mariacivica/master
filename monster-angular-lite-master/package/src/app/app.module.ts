import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule, NgbModalModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent, InvalidCredentialsModalContent } from './login/login.component';
import { FullComponent } from './layouts/full/full.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SpinnerComponent } from './shared/spinner.component'; // Asegúrate de que esta ruta es correcta

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InvalidCredentialsModalContent,
    HomepageComponent,
    SpinnerComponent // Asegúrate de declarar el SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    NgbModalModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      {
        path: '',
        component: FullComponent,
        children: [
          { path: '', redirectTo: '/homepage', pathMatch: 'full' },
          { path: 'homepage', component: HomepageComponent },
          // otras rutas aquí
        ]
      },
      { path: '**', redirectTo: '/homepage' }
    ])
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
