import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      employeeId: [null, Validators.compose([ Validators.required, Validators.minLength(5)])]
    });
  }

  onLogin() {
    const employeeId = this.form.controls['employeeId'].value;

    this.http.post('/api/user', {
      employeeId: employeeId
    }).subscribe(res => {
      this.router.navigate(['/home'])
    }, err => {
      console.log(err);
    });
  }
}