import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { UserListComponent } from './prs/user/user-list/user-list.component';
import { UserCreateComponent } from './prs/user/user-create/user-create.component';
import { UserDetailComponent } from './prs/user/user-detail/user-detail.component';
import { UserEditComponent } from './prs/user/user-edit/user-edit.component';
import { FourOhFourComponent } from './core/four-oh-four/four-oh-four.component';
import { VendorListComponent } from './prs/vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './prs/vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './prs/vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './prs/vendor/vendor-edit/vendor-edit.component';
import { ProductListComponent } from './prs/product/product-list/product-list.component';
import { ProductCreateComponent } from './prs/product/product-create/product-create.component';
import { ProductDetailComponent } from './prs/product/product-detail/product-detail.component';
import { ProductEditComponent } from './prs/product/product-edit/product-edit.component';
import { RequestListComponent } from './prs/request/request-list/request-list.component';
import { RequestCreateComponent } from './prs/request/request-create/request-create.component';
import { RequestDetailComponent } from './prs/request/request-detail/request-detail.component';
import { RequestEditComponent } from './prs/request/request-edit/request-edit.component';
import { RequestlineListComponent } from './prs/requestline/requestline-list/requestline-list.component';
import { RequestlineDetailComponent } from './prs/requestline/requestline-detail/requestline-detail.component';
import { RequestlineEditComponent } from './prs/requestline/requestline-edit/requestline-edit.component';
import { ReviewListComponent } from './prs/review/review-list/review-list.component';
import { ReviewItemComponent } from './prs/review/review-item/review-item.component';

import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';

import { LoginComponent } from './prs/user/login/login.component';


const routes: Routes = [
  {path: '', redirectTo: '/users/list', pathMatch: 'full'}, //initial route

  {path: 'login', component: LoginComponent },

  {path: 'home', component: HomeComponent },
  {path: 'about', component: AboutComponent },

  {path: 'users/list', component: UserListComponent }, //regular route
  {path: 'users/create', component: UserCreateComponent },
  {path: 'users/detail/:id', component: UserDetailComponent},
  {path: 'users/edit/:id', component: UserEditComponent },

  {path: 'vendors/list', component: VendorListComponent }, 
  {path: 'vendors/create', component: VendorCreateComponent },
  {path: 'vendors/detail/:id', component: VendorDetailComponent},
  {path: 'vendors/edit/:id', component: VendorEditComponent },

  {path: 'products/list', component: ProductListComponent }, 
  {path: 'products/create', component: ProductCreateComponent },
  {path: 'products/detail/:id', component: ProductDetailComponent},
  {path: 'products/edit/:id', component: ProductEditComponent },

  {path: 'requests/list', component: RequestListComponent }, 
  {path: 'requests/create', component: RequestCreateComponent },
  {path: 'requests/detail/:id', component: RequestDetailComponent},
  {path: 'requests/edit/:id', component: RequestEditComponent },

  {path: 'requestlines/list', component: RequestlineListComponent }, 
  {path: 'requestlines/detail', component: RequestlineDetailComponent},
  {path: 'requestlines/edit/:id', component: RequestlineEditComponent },

  {path: 'requests/review/list', component: ReviewListComponent},
  {path: 'requests/review/:id', component: ReviewItemComponent },

  {path: '**', component: FourOhFourComponent} //anything else
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
