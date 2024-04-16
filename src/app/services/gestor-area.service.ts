import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestorAreaService {


  constructor( private http:HttpClient) { }

  private APY_USERS="http://localhost:3000/usuarios";
  private APY_AREAS="http://localhost:3000/areas";

  //get
getAreas():Observable<any>{
  return this.http.get(this.APY_AREAS);
}

  //get users
getUsers():Observable<any>{
  return this.http.get(this.APY_USERS)
}
  //get por id
getArea(id:any):Observable<any>{
  return this.http.get(`${this.APY_AREAS}/${id}`)
}
  //create

  postArea(area:any):Observable<any>{
    return this.http.post(this.APY_AREAS,area)
  }

  //update
putArea(area:any):Observable<any>{
  return this.http.put(`${this.APY_AREAS}/${area.id}`,area)
}
  //delete

deleteArea(id:any):Observable<any>{
  return this.http.delete(`${this.APY_AREAS}/${id}`)
}
}
