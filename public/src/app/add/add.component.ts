import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  authName:string
  message:string
  constructor(private _httpService:HttpService, private _router:Router) {
    this.authName=''
    this.message=''
  }


  ngOnInit() {
  }
  create(){
    console.log("Creating")
    var authorObservable=this._httpService.createAuthor(this.authName)
    authorObservable.subscribe(data=>{
      console.log(data)
      if(data.success==1){
        this.message=''
        this._router.navigate(['/'])
      }
      else{
        this.message=data.message
      }
    })
    this.authName=''
  }

}
