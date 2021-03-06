import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-news-edit',
  templateUrl: './news-edit.component.html',
  styleUrls: ['./news-edit.component.css']
})
export class NewsEditComponent implements OnInit {

  @Input() newsData:any = { title: '', newsBody: '', author:'' };

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getNewsById(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.newsData = data;
    });
  }

  updateNews() {
    this.rest.updateNews(this.route.snapshot.params['id'], this.newsData).subscribe((result) => {
      this.router.navigate(['/news-feed']);
    }, (err) => {
      console.log(err);
    });
  }

}
