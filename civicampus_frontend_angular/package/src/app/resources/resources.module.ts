import { NgModule } from "@angular/core";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { ResourcesComponent } from "./resources.component";
import { BlogCardsComponent } from './blog-cards/blog-cards.component';
import { BlogNotDefinedModalComponent } from './blog-cards/blog-not-defined-modal.component';

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Resources",
      urls: [{ title: "Resources", url: "/resources" }, { title: "Resources" }],
    },
    component: ResourcesComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    ResourcesComponent,
    BlogCardsComponent,
    BlogNotDefinedModalComponent
  ]
})
export class ResourcesModule {}