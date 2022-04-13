import { HttpClient} from "@angular/common/http"; 
import { User } from "../models/user";
import { map } from 'rxjs/operators'; 
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LoginService {
    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;
    
    constructor(private http: HttpClient) { 
        this.currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser') || 'null'));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    path = "https://localhost:44393/api/";
  
    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(user:User) {
        return this.http.post(this.path + "Auth/login",user)
        .pipe(map( user => {
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user 
            }
        ));
      }
}
