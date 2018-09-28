import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }
  createAuthor(name){
    return this._http.post('/authors', {name:name})
  }
  getAll(){
    return this._http.get('/authors')
  }
  delete(authID){
    return this._http.delete(`/authors/${authID}`)
  }
}
