import { Component, Input, OnInit } from '@angular/core';
import { News } from 'src/app/interfaces/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @Input() news: News[];

  constructor( private newsService: NewsService ) { }

  ngOnInit(): void {
  }

  archiveNews( news ) {
    this.newsService.archiveNews(news)
      .subscribe(res => {
        console.log(res);
      }, err => {
        console.log(err);
      });
  }

}
