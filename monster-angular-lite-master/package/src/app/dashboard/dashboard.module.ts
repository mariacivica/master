import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { NgApexchartsModule } from "ng-apexcharts";
import { DashboardComponent } from "./dashboard.component";
import { TopSellingComponent } from "./dashboard-components/top-selling/top-selling.component";
import { TopCardsComponent } from "./dashboard-components/top-cards/top-cards.component";
import { BlogCardsComponent } from "./dashboard-components/blog-cards/blog-cards.component";
import { IngenieriaDatosComponent } from './dashboard-components/blog-cards/ingenieria-datos/ingenieria-datos.component';
import { AnalisisDatosComponent } from './dashboard-components/blog-cards/analisis-datos/analisis-datos.component';
import { FrontComponent } from "./dashboard-components/blog-cards/front/front.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Dashboard",
      urls: [{ title: "Dashboard", url: "/dashboard" }, { title: "Dashboard" }],
    },
    component: DashboardComponent,
    children: [
      { path: 'ingenieria-datos', component: IngenieriaDatosComponent },
      { path: 'analisis-datos', component: AnalisisDatosComponent },
      { path: 'front', component: FrontComponent }

    ]
  },
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    NgApexchartsModule,
  ],
  declarations: [
    DashboardComponent,
    TopSellingComponent,
    TopCardsComponent,
    BlogCardsComponent,
  ],
})
export class DashboardModule {}
