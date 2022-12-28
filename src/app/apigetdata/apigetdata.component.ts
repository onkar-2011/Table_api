import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../service/restapi.service'

@Component({
  selector: 'app-apigetdata',
  templateUrl: './apigetdata.component.html',
  styleUrls: ['./apigetdata.component.css']
})
export class ApigetdataComponent implements OnInit {

  constructor(private rest: RestapiService) { }
   
  response:any=[];
  ngOnInit(): void {
    this.fetchdata();
  }


  fetchdata() {
    this.rest.getdata().subscribe((data) => {
      console.log(data);
      this.response=data;
    })
  }
  getkey(obj: any) {
    return Object.keys(obj);
  }
}
