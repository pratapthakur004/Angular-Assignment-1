import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  API = "http://localhost:3000/product/";

  constructor(private http:HttpClient) { }
  getAllProduct():Observable<any> {
    return this.http.get(`${this.API}get`)
  }
  postData(data:any):Observable<any>{
    return this.http.post(`${this.API}add`,data);
 }
 updateData(data:any,id:any):Observable<any>{
  return this.http.put(`${this.API}update/${id}`,data);
 }
 getData(id:any):Observable<any>{
  return this.http.get(`${this.API}getProductById/${id}`);
 }
 deleteData(id:any):Observable<any>{
  return this.http.delete(`${this.API}delete/${id}`);
 }
}
