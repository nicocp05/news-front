import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/interfaces/news';
import { NewsService } from 'src/app/services/news.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-news-screen',
  templateUrl: './news-screen.component.html',
  styles: []
})
export class NewsScreenComponent implements OnInit {

  public news: News[] = [];

  constructor( 
              private newsService: NewsService,
              private spinner: NgxSpinnerService
            ) { }

  ngOnInit(): void {
    this.getNews();
  }

  public reloadPage() {
    this.getNews();
  }

  public getNews() {
    this.spinner.show();
    this.newsService.getNews()
      .subscribe( (res: News[]) => {
        setTimeout(() => {
          this.news = res;
          this.spinner.hide();
        }, 500);
      }, err => {
        console.log(err);
      });
  }

}
