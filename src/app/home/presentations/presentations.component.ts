import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-presentations',
  templateUrl: './presentations.component.html',
  styleUrls: ['./presentations.component.css']
})
export class PresentationsComponent implements OnInit {

  quizzes: any;

  constructor(private http: HttpClient, private router: Router) {
    this.http.get('/api/quizzes').subscribe(data => {
      this.quizzes = data;
      console.log(this.quizzes);
    }, err => {
      console.log(err);
    })
  }
  
  close() {
    this.router.navigate(['/home/quizzes']);
  }

  ngOnInit() {
  }

}
