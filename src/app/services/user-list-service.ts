import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UserViewModel } from "../models/user-view-model";

@Injectable()
export class UserListService {
    constructor(private http: HttpClient) {  
    } 
    path = "https://localhost:44393/api";
    
    getUserList(): Observable<UserViewModel[]>{
        return this.http.get<UserViewModel[]>(this.path + "/User/get")
        .pipe(map((data: UserViewModel[]) => {
          return data;
        }));
      }
}
