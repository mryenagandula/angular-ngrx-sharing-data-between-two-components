import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public url= environment.letstalkUrl || 'http://localhost:3000'
  
  private headers:HttpHeaders= new HttpHeaders({
    'Content-Type':'application/json',
    'Accept':"application/json",
    'Access-Control-Allow-Methods':'GET,POST,PUT,DELETE',
    'Authorization':''
  });

  constructor(private http:HttpClient) { }

  public loadUsers(){
    return this.http.get(`${this.url}/public/users`,{headers :this.headers})
  }

  public loadUserById(id: number | string){
    return this.http.get(`${this.url}/public/users/${id}`,{headers :this.headers})
  }
}
