import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authors:any
  message:string
  constructor(private _httpService:HttpService) { 
    this.authors=[]
    this.message=''
  }

  ngOnInit() {
    this.getAuthors()
  }
  getAuthors(){
    var authObs= this._httpService.getAll()
    authObs.subscribe(data=>{
      if(data.success==1){
        this.authors=data.authors
        this.message=""
      }
      else{
        this.message=data.message
      }
    })
  }
  delete(authID){
    console.log(authID)
    var authObservable=this._httpService.delete(authID)
    authObservable.subscribe(data=>{
      if(data.success==0){
        this.message=data.message
      }
      else{
        this.message=""
        this.getAuthors()
      }
    })
  }
  edit(authID){
    console.log("Editing")
  }

}
