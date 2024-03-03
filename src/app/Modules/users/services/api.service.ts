import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserSchema } from '../Models/userSchema';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  SERVER_URL = "https://emp-server-0pc2.onrender.com"
  constructor(private http:HttpClient) { }

  addUserAPI(user:UserSchema){
    return this.http.post(`${this.SERVER_URL}/users`,user)
  }

  //get all user api
  getAllUsersAPI(){
    return this.http.get(`${this.SERVER_URL}/users`)
  }

  //get single user api
  getSingleUserApi(id:string){
    return  this.http.get(`${this.SERVER_URL}/users/${id}`)
  }
 
  //update user api
  updateUserApi(userId:string,userDetails:UserSchema){
    return  this.http.put(`${this.SERVER_URL}/users/${userId}`,userDetails)
  }

  //delete user
  removeUserAPI(userId: string){
    return  this.http.delete(`${this.SERVER_URL}/users/${userId}`)

  }
}
