import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizId: string;
  quiz: any;
  form: FormGroup;


  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, private fb: FormBuilder ) {
    this.quizId = this.route.snapshot.paramMap.get('id');
    this.http.get('/api/quizzes/' + this.quizId).subscribe(data => {
      this.quiz = data;
      console.log(this.quiz);
    }, err => {
      console.log(err);
    });
  }

  ngOnInit() {
    this.form = this.fb.group({
      selectedAnswers: ''
    });
  }

  saveQuiz() { 
    const selectedAnswers = this.form.controls['selectedAnswers'].value;

    this.http.post('/api/quizResult', {
      quizId: this.quizId
    }).subscribe(res => {
      this.router.navigate(['/'])
    }, err => {
      console.log(err);
    });
  }

  close() {
    this.router.navigate(['/home/quizzes']);
  }


}