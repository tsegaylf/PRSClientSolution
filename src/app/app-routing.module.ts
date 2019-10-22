import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { UserListComponent } from './prs/user/user-list/user-list.component';
import { UserCreateComponent } from './prs/user/user-create/user-create.component';
import { UserDetailComponent } from './prs/user/user-detail/user-detail.component';
import { UserEditComponent } from './prs/user/user-edit/user-edit.component';
import { FourOhFourComponent } from './core/four-oh-four/four-oh-four.component';

const routes: Routes = [
  {path: '', redirectTo: '/users/list', pathMatch: 'full'}, //initial route

  {path: 'users/list', component: UserListComponent }, //regular route
  {path: 'users/create', component: UserCreateComponent },
  {path: 'users/detail/:id', component: UserDetailComponent },
  {path: 'users/edit/:id', component: UserEditComponent },

  {path: '**', component: FourOhFourComponent} //anything else
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
