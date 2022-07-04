import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styles: []
})
export class AddNewsComponent implements OnInit {

  public addNewsForm: FormGroup;

  private formSubmitted: boolean = false;

  constructor( 
              private fb: FormBuilder,
              private newsService: NewsService,
              private router: Router
               ) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.addNewsForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      content: ['', Validators.required],
      author: ['', Validators.required]
    });
  }

  public createNews() {

    this.formSubmitted = true;
    
    if(this.addNewsForm.invalid) {
      return;
    } else {
      this.newsService.postNews( this.addNewsForm.value )
        .subscribe( res => {
          console.log(res);
          this.addNewsForm.reset();
          this.router.navigateByUrl('/');
        }, err => {
          console.log(err);
        });
    }

  }
  
  public fieldNotValid( field: string ) {

    if( this.addNewsForm.get(field).invalid && this.formSubmitted ) {
      return true;
    } else {
      return false;
    }

  }

}
