import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';

@Component({
  selector: 'app-top-headlines',
  templateUrl: './top-headlines.component.html',
  styleUrls: ['./top-headlines.component.css'],
})
export class TopHeadlinesComponent implements OnInit {
  constructor(private _service: NewsapiserviceService) {}
  topHeadingDisplay: any = [];

  ngOnInit(): void {
    this._service.topHeadeliner().subscribe((result) => {
      console.log(result);
      this.topHeadingDisplay = result.articles;
      console.log(this.topHeadingDisplay);
    });
  }
}
