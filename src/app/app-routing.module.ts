import { AddItemComponent } from "./components/add-item/add-item.component";
import { ItemsComponent } from "./components/items/items.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", component: ItemsComponent, pathMatch: "full" },
  { path: "add-item", component: AddItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
