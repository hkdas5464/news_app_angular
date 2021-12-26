import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {
  NewsDetails: any = [];
   title=""
   space="l"
  constructor(private _service: NewsapiserviceService) { }

  ngOnInit(): void {
  }


  
  getnews(value:any):void{
    this._service.news2(value).subscribe((result) => {
      console.log(result);
      this.NewsDetails = result.articles;
      this.title="Top Results About Your Search:"+value;
      console.log(this.NewsDetails);
    })}

}
