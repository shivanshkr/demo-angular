import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  errMsg = '';
  constructor(
    private fb: FormBuilder,
    private US: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.US.loginUser(this.form.value).subscribe(
      (res) => {
        this.router.navigateByUrl(`/`);
      },
      (err) => {
        console.log(err);
        this.errMsg = err.error.results;
      }
    );
  }
}
