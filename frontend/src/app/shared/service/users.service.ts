import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user.entity";
import {environment} from "../../../environtments/environment";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
   baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }
   getAll():Observable<any>{
     return this.http.get(this.baseUrl+'/reader');
   }
   edit(id:any, name:any){
     return this.http.patch(this.baseUrl+'/reader' +`/${id}`, {firstName:name} )
   }
   createUser(item:any):Observable<User> {
     return this.http.post<User>(this.baseUrl+'/reader', JSON.stringify(item))
   }
   loginUser(item:any):Observable<User>{
    return this.http.post<User>(this.baseUrl+'/login', JSON.stringify(item))
   }
   getLoggedInUser():Observable<User>{
     return this.http.get<User>(this.baseUrl+'/login/d327')
   }

}
