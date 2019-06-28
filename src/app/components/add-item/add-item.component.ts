import { Item } from "./../../models/Item";
import { ItemService } from "./../../services/item.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-item",
  templateUrl: "./add-item.component.html",
  styleUrls: ["./add-item.component.scss"]
})
export class AddItemComponent implements OnInit {
  item: Item = {
    title: "",
    description: ""
  };

  constructor(private itemsService: ItemService, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    if (this.item.title !== "" && this.item.description !== "") {
      this.itemsService.addItem(this.item);
      this.resetForm();
      this.router.navigate([""]);
    } else {
      return;
    }
  }

  resetForm() {
    this.item = {
      title: "",
      description: ""
    };
  }
}
