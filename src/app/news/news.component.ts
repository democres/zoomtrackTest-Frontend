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
  newsPage = 0;

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getNews(0);
  }

  getNews(id) {
    this.news = [];
    this.rest.getNews(id).subscribe((data: {}) => {
      console.log(data);
      this.news = data;
    });
  }

  add() {
    this.router.navigate(['/news-add']);
  }

  loadMore() {
    this.newsPage++;
    this.getNews(this.newsPage);
  }

  delete(id) {
    this.rest.deleteNews(id)
      .subscribe(res => {
          this.getNews(0);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
