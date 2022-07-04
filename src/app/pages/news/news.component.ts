import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { News } from 'src/app/interfaces/news';
import { NewsService } from 'src/app/services/news.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styles: []
})
export class NewsComponent implements OnInit {

  @Input() news: News[];
  @Output() getNews = new EventEmitter<any>();

  constructor( private newsService: NewsService ) { }

  ngOnInit(): void {
  }

  public archiveNews( news: News ) {

    const now = Date.now();

    const archivedNews = {
      ...news,
      archiveDate: Number(now)
    }

    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, archived it',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    }).then((result) => {
      if(result.value) {
        this.newsService.putNews( archivedNews )
          .subscribe( res => {
            console.log( res );
            this.getNews.emit();
          }, err => {
            console.log(err);
          });
      }
    });
    

  }

  public deleteNews( news: News ) {

    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it'
    }).then((result) => {
      if (result.value) {
        this.newsService.deleteNews( news )
          .subscribe( res => {
            console.log(res);
            this.getNews.emit();
          }, err => {
            console.log(err);
          });
      }

    });
  }

}
