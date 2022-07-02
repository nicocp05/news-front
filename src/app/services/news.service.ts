import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { map } from 'rxjs/operators';
import { NewsResponse } from '../interfaces/news-response';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  URL: string = 'http://localhost:3000';

  constructor( private http: HttpClient ) { }

  getNews() {
    return this.http.get(`${this.URL}/news`)
      .pipe( map( ( res: NewsResponse ) => {
        return res.news;
      }));
  }

  getNewsArchived() {
    return this.http.get(`${this.URL}/news`)
  }

  archiveNews( news ) {

    return this.http.put(`${this.URL}/news/${news._id}`, { ...news} );
  }

}
