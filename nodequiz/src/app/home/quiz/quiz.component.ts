import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizId: string;
  quiz: any;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient ) {
    this.quizId = this.route.snapshot.paramMap.get('id');
    this.http.get('/api/quizzes/' + this.quizId).subscribe(data => {
      this.quiz = data;
      console.log(this.quiz);
    }, err => {
      console.log(err);
    });
  }

  close() {
    this.router.navigate(['/home/quizzes']);
  }

  ngOnInit() {
  }
}