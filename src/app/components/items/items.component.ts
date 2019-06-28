import { Item } from "./../../models/Item";
import { ItemService } from "./../../services/item.service";
import { Component, OnInit } from "@angular/core";
import { Event } from "@angular/router";

@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.scss"]
})
export class ItemsComponent implements OnInit {
  items: Item[];
  loading: boolean = false;
  editState: boolean = false;
  itemToEdit: Item;

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      this.loading = true;
      this.items = items;
      console.log(this.loading);
    });
    this.loading = false;
    console.log(this.loading);
  }

  deleteItem(event, item: Item) {
    this.clearState();
    this.itemService.deleteItem(item);
  }

  editItem(event, item: Item) {
    this.editState = true;
    this.itemToEdit = item;
  }

  updateItem(item: Item) {
    this.itemService.updateItem(item);
    this.clearState();
  }

  clearState() {
    this.editState = false;
    this.itemToEdit = null;
  }
}
