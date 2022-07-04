import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { News } from '../interfaces/news';
import { NewsResponse } from '../interfaces/news-response';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  URL: string = 'http://localhost:3000';

  constructor( private http: HttpClient ) { }

  public getNews() {
    return this.http.get(`${this.URL}/news`)
      .pipe( map( ( res: NewsResponse ) => {
        return res.news;
      }));
  }

  public getArchivedNews() {
    return this.http.get(`${this.URL}/news/archived`)
      .pipe( map( ( res: NewsResponse ) => {
        return res.news;
      }));
  }

  public postNews( news: News ) {
    return this.http.post(`${this.URL}/news`, news);
  }

  public putNews( news: News ) {
    return this.http.put(`${this.URL}/news/${news._id}`, news );
  }

  public deleteNews( news: News ) {
    return this.http.delete(`${this.URL}/news/${news._id}`);
  }

}
