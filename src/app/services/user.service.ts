import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from "../models/user.model";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  apiBaseUrl = environment.apiBaseUrl;

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiBaseUrl + "/api/users");
  }
}
