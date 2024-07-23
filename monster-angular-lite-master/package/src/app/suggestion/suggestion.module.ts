import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { SuggestionComponent } from "./suggestion.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Suggestion",
      urls: [{ title: "Suggestion", url: "/suggestion" }, { title: "Suggestion" }],
    },
    component: SuggestionComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    SuggestionComponent,
  ],
})
export class SuggestionModule {}
