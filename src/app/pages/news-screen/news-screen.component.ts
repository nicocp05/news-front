import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/interfaces/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-screen',
  templateUrl: './news-screen.component.html',
  styleUrls: ['./news-screen.component.css']
})
export class NewsScreenComponent implements OnInit {

  news: News[] = [];

  constructor( private newsService: NewsService ) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this.newsService.getNews()
      .subscribe( (res: News[]) => {
        this.news = res;
        console.log(res);
      }, err => {
        console.log(err);
      });
  }

}
