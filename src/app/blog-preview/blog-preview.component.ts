import { Component, OnInit, Input } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'dk-blog-preview',
  templateUrl: './blog-preview.component.html',
  styleUrls: ['./blog-preview.component.scss'],
})
export class BlogPreviewComponent implements OnInit {
  @Input() max: number;
  blogPostData$: Observable<ScullyRoute[]>;

  constructor(private srs: ScullyRoutesService) {}

  ngOnInit() {
    this.blogPostData$ = this.srs.available$.pipe(
      map(posts => {
        if (this.max) {
          posts = posts.slice(0, 3);
        }
        return posts;
      }),
    );
  }
}
