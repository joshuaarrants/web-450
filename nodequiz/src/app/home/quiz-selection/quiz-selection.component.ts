import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-quiz-selection',
  templateUrl: './quiz-selection.component.html',
  styleUrls: ['./quiz-selection.component.css']
})
export class QuizSelectionComponent implements OnInit {

  quizzes: any;

  constructor(private http: HttpClient, private router: Router) {
    this.http.get('/api/quiz').subscribe(data => {
      this.quizzes = data;
      console.log(this.quizzes);
    }, err => {
      console.log(err);
    })
  }

  goTest() {
    this.router.navigate(['/home/quiz']);
  }

  goPresentations() {
    this.router.navigate(['/home/presentations']);
  }

  ngOnInit() {
  }

}
