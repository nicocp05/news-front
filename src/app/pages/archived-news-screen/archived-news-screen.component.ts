import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { News } from 'src/app/interfaces/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-archived-news-screen',
  templateUrl: './archived-news-screen.component.html',
  styleUrls: ['./archived-news-screen.component.css']
})
export class ArchivedNewsScreenComponent implements OnInit {

  news: News[] = [];

  constructor( 
              private newsService: NewsService,
              private spinner: NgxSpinnerService
            ) { }

  ngOnInit(): void {
    this.getArchivedNews();
  }

  reloadPage() {
    this.getArchivedNews();
  }

  getArchivedNews() {
    this.spinner.show();
    this.newsService.getArchivedNews()
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
