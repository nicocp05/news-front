import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NewsScreenComponent } from './news-screen/news-screen.component';
import { ArchivedNewsScreenComponent } from './archived-news-screen/archived-news-screen.component';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { NewsComponent } from './news/news.component';



@NgModule({
  declarations: [
    NewsScreenComponent,
    ArchivedNewsScreenComponent,
    PagesComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    NewsScreenComponent,
    ArchivedNewsScreenComponent,
    PagesComponent,
    NewsComponent
  ]
})
export class PagesModule { }
