import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  errMsg = '';
  form: FormGroup = new FormGroup({});
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
    this.US.signUpUser(this.form.value).subscribe(
      (res) => {
        this.router.navigateByUrl(`/login`);
      },
      (err) => {
        console.log(err);
        this.errMsg = err.error.results;
      }
    );
  }
}
