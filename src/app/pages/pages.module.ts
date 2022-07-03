import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NewsScreenComponent } from './news-screen/news-screen.component';
import { ArchivedNewsScreenComponent } from './archived-news-screen/archived-news-screen.component';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { NewsComponent } from './news/news.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AddNewsComponent } from './add-news/add-news.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NewsScreenComponent,
    ArchivedNewsScreenComponent,
    PagesComponent,
    NewsComponent,
    AddNewsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    NewsScreenComponent,
    ArchivedNewsScreenComponent,
    PagesComponent,
    NewsComponent,
    AddNewsComponent
  ]
})
export class PagesModule { }
