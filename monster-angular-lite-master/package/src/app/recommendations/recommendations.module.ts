import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { RecommendationsComponent } from "./recommendations.component";
import { RolesCardsComponent } from './roles-cards/roles-cards.component';
import { DataEngineerComponent } from './roles-cards/3-data-engineer/data-engineer.component';
import { RoleNotDefinedModalComponent } from './roles-cards/role-not-defined-modal.component'; // Corregir la importación

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Recommendations",
      urls: [{ title: "Recommendations", url: "/recommendations" }, { title: "Recommendations" }],
    },
    component: RecommendationsComponent,
  },
  {
    path: 'data-engineer',
    component: DataEngineerComponent
  }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    RecommendationsComponent,
    RolesCardsComponent,
    DataEngineerComponent,
    RoleNotDefinedModalComponent
  ],
})
export class RecommendationsModule {}
