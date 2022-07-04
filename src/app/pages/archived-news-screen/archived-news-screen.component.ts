import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { News } from 'src/app/interfaces/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-archived-news-screen',
  templateUrl: './archived-news-screen.component.html',
  styles: []
})
export class ArchivedNewsScreenComponent implements OnInit {

  public news: News[] = [];

  constructor( 
              private newsService: NewsService,
              private spinner: NgxSpinnerService
            ) { }

  ngOnInit(): void {
    this.getArchivedNews();
  }

  public reloadPage() {
    this.getArchivedNews();
  }

  private getArchivedNews() {
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
