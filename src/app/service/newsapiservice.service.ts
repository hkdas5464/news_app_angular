import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  constructor(private _http:HttpClient) { }
    data="";    

  everyThingUrl=`http://newsapi.org/v2/everything?q=bokaro&apiKey=7e5f361b870a4f94b109bb2cb29e34e3`;
  newsApiUrl="https://gnews.io/api/v4/top-headlines?token=0d09ea58b7f2e9f79097aa03035fc462&lang=en";
  techNewsUrl="http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=7e5f361b870a4f94b109bb2cb29e34e3";

  topTechnogy():Observable<any>{
    return this._http.get(this.techNewsUrl);
  }
  topHeadeliner():Observable<any>{
    return this._http.get(this.newsApiUrl);
  }

  
  news2(value:string):Observable<any>{
   
    console.log(value)
    return this._http.get(`https://gnews.io/api/v4/search?q=`+value+`&token=0d09ea58b7f2e9f79097aa03035fc462`);
  }


  
}
