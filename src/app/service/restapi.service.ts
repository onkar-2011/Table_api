import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestapiService {
   
  url:any="https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo";
  constructor(private http:HttpClient) { }

  getdata(){
    return this.http.get(this.url);
  }
}
