import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { RecommendationsComponent } from "./recommendations.component";
import { RolesCardsComponent } from './roles-cards/roles-cards.component';

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Recommendations",
      urls: [{ title: "Recommendations", url: "/recommendations" }, { title: "Recommendations" }],
    },
    component: RecommendationsComponent,
  },
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
  ],
})
export class RecommendationsModule {}
