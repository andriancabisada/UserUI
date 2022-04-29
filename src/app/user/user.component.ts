import { Component, OnInit } from "@angular/core";
import { User } from "../models/user.model";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  constructor(private userService: UserService) {}

  users: User[] = [];

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((response) => {
      this.users = response;
    });
  }
}
