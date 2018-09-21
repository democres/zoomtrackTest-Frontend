import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-news-add',
  templateUrl: './news-add.component.html',
  styleUrls: ['./news-add.component.css']
})
export class NewsAddComponent implements OnInit {

  @Input() news = { title:'', newsBody: '', author: '', newsTags:[] };

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  addNews() {
    this.rest.addNews(this.news).subscribe((result) => {
      alert("CREATED");
      this.router.navigate(['/news-feed']);
    }, (err) => {
      alert("Error");
      console.log(err);
    });
  }

}
