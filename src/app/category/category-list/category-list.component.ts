import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { timer } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  categories: any[] = [];
  success = false;
  errMsg = '';
  constructor(private CS: CategoryService, private router: Router) {}

  ngOnInit(): void {
    this.getAllcategories();
  }
  getAllcategories() {
    this.CS.getAllCategories().subscribe((res) => (this.categories = res));
  }

  deleteCategories(id: string) {
    console.log(id);
    this.CS.deleteCategoryById(id).subscribe(
      (res) => {
        this.getAllcategories();
        this.success = true;
        timer(2000)
          .toPromise()
          .then(() => {
            this.success = false;
          });
      },
      (err) => (this.errMsg = err.error.results)
    );
  }
  updateCategories(id: string) {
    this.router.navigateByUrl(`/categories/edit/${id}`);
  }
  viewCategories(id: string) {
    this.router.navigateByUrl(`/categories/${id}`);
  }
}
