import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css'],
})
export class CategoryFormComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private CS: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  errMsg = '';
  sucessMsg = '';
  editMode = false;
  categoryId = '';
  ngOnInit(): void {
    this.initForm();
    this._checkEditMode();
  }
  initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
    });
  }
  onSubmit() {
    this.sucessMsg = '';
    this.errMsg = '';
    if (this.editMode) {
      this.CS.updateCategory(this.form.value, this.categoryId).subscribe(
        (res) => (this.sucessMsg = res.name),
        (err) => (this.errMsg = err.error.results)
      );
    } else {
      this.CS.createCategory(this.form.value).subscribe(
        (res) => (this.sucessMsg = res.name),
        (err) => (this.errMsg = err.error.results)
      );
    }
  }

  private _checkEditMode() {
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.editMode = true;
        this.categoryId = params.id;
        this.CS.getCategoryById(params.id).subscribe(
          (res) => {
            this.form.controls.name.setValue(res.name);
          },
          () => {
            this.router.navigate(['/categories']);
          }
        );
      }
    });
  }
}
