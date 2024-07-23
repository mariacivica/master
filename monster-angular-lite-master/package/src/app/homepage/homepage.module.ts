import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HomepageComponent } from "./homepage.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Homepage",
      urls: [{ title: "Homepage", url: "/homepage" }, { title: "Homepage" }],
    },
    component: HomepageComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    HomepageComponent,
  ],
})
export class HomepageModule {}
