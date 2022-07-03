import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewsComponent } from './add-news/add-news.component';
import { ArchivedNewsScreenComponent } from './archived-news-screen/archived-news-screen.component';
import { NewsScreenComponent } from './news-screen/news-screen.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  { 
    path: '',
    component: PagesComponent,
    children: [
      { path: '', component: NewsScreenComponent },
      { path: 'archived-news', component: ArchivedNewsScreenComponent },
      { path: 'add-news', component: AddNewsComponent }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
