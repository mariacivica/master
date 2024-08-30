import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { NgApexchartsModule } from "ng-apexcharts";
import { DashboardComponent } from "./dashboard.component";
import { ProfileComponent } from './dashboard-components/profile/profile.component';
import { ComunitiesComponent } from './dashboard-components/comunities-details/comunities-details.component';
import { ScoreSkillsComponent } from "./dashboard-components/score-skills/score-skills.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Dashboard",
      urls: [{ title: "Dashboard", url: "/dashboard" }, { title: "Dashboard" }],
    },
    component: DashboardComponent,
    children: [
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
    ProfileComponent,
    ComunitiesComponent,
    ScoreSkillsComponent,

  ],
})
export class DashboardModule {}
