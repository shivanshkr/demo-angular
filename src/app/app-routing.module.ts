import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryFormComponent } from './category/category-form/category-form.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { ViewCategoryComponent } from './category/view-category/view-category.component';
import { EmailIdFormComponent } from './emailId/email-id-form/email-id-form.component';
import { EmailIdListComponent } from './emailId/email-id-list/email-id-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'register', component: SignupComponent },
  { path: 'categories', component: CategoryListComponent },
  { path: 'categories/new', component: CategoryFormComponent },
  { path: 'categories/edit/:id', component: CategoryFormComponent },
  { path: 'categories/:id', component: ViewCategoryComponent },
  { path: 'emailIds', component: EmailIdListComponent },
  { path: 'emailIds/new', component: EmailIdFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
