import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news:any = [];

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.news = [];
    this.rest.getNews().subscribe((data: {}) => {
      console.log(data);
      this.news = data;
    });
  }

  add() {
    this.router.navigate(['/news-add']);
  }

  delete(id) {
    this.rest.deleteNews(id)
      .subscribe(res => {
          this.getNews();
        }, (err) => {
          console.log(err);
        }
      );
  }

}
