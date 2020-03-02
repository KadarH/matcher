import { Component } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from "rxjs";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "classifier";

  items: Observable<any[]>;
  itemValue = "";

  constructor(public db: AngularFirestore) {
    this.items = db.collection("items").valueChanges();
  }

  onSubmit() {
    this.db.collection("items").add({ content: this.itemValue });
    this.itemValue = "";
  }
}
