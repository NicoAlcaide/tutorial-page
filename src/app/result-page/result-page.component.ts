import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {
  letter: string | null = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.letter = this.route.snapshot.queryParamMap.get('letter');
  }

  goBack() {
    this.router.navigate(['/']);
  }
}

