import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-presentations',
  templateUrl: './presentations.component.html',
  styleUrls: ['./presentations.component.css']
})
export class PresentationsComponent implements OnInit {

  constructor(private router: Router) { }

  goTest() {
    this.router.navigate(['/home/quiz']);
  }
  
  close() {
    this.router.navigate(['/home/quizzes']);
  }

  ngOnInit() {
  }

}
