import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { PostViewModel } from "../models/post-view-model"; 

@Injectable()
export class PostListService {
    constructor(private http: HttpClient) {  
    } 
    path = "https://localhost:44393/api";
    
    getPostList(): Observable<PostViewModel[]>{
        return this.http.get<PostViewModel[]>(this.path + "/Post/get")
        .pipe(map((data: PostViewModel[]) => {
          return data;
        }));
      }
}
